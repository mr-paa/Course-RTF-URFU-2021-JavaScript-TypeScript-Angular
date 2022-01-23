// ЗАДАЧА № 6 (БЛОК № 2.1 'MoneyRepository').
// Имеется класс денежного хранилища - MoneyRepository.
// Который должен хранить денежные единицы
// разных валют, разного номинала и в разном количестве.
// Требуется:
// 1) Реализовать классу MoneyRepository 2 метода:
// 		1.1) giveOutMoney - позволяет достать денежные единицы из хранилища по принципу жадного алгоритма:
// 			 сумма 1350RUB будет выдана
// 			 одной купюрой номиналом 1000RUB,
// 			 одной купюрой номиналом 200RUB,
// 			 одной купюрой номиналом 100RUB,
// 			 одной купюрой номиналом 50RUB
// 			 с учетом, что все эти купюры будут находится в хранилище.
// 			 Принимает аргументы count - сумма, требуемая к выдаче, currency - валюта
// 			 Если сумма была собрана и выдана, то метод возвращает true, иначе false
// 		1.2) takeMoney - позволяет положить в хранилище денежные единицы разных номиналов и разного количества
// 2) Типизировать все свойства и методы класса MoneyRepository,
// 	  пользуясь уже предоставленными интерфейсами (избавиться от всех any типов)

//РЕШЕНИЕ НИЖЕ (проверено):
/*
enum Currency {
    'RUB',
    'USD',
}

interface IMoneyInfo {
    denomination: string;  //>>>  "100, 500, 5000"
    currency: Currency; // Currency[0] == RUB ||  Currency[1] == USD
}

interface IMoneyUnit {
    moneyInfo: IMoneyInfo; // лежит наминал   + название валюты / Currence[1=ДОЛЛАР]
    count: number; // количество денег (скорее всего общее в двух валютах) //>>> 1400
}

class MoneyRepository {
    private _repository: IMoneyUnit[];
    constructor(initialRepository: IMoneyUnit[]) {
        this._repository = initialRepository;
    }

    public giveOutMoney(count: number, currency: Currency): boolean {
        this._repository.sort(function (a, b) {
            if (parseInt(a.moneyInfo.denomination, 10) > parseInt(b.moneyInfo.denomination, 10)) {
                return -1;
            } else if (parseInt(a.moneyInfo.denomination, 10) < parseInt(b.moneyInfo.denomination, 10)) {
                return 1;
            }
        }); // отсортировал массив объектов IMoneyUnit от большего к меньшему номиналу

        for (let elem of this._repository) {
            if (elem.moneyInfo.currency !== currency) {
                continue
            } // если валюта конретного элемента не подходит, то берем следующий элемент
            if (count === 0) {
                break
            }
            let denem_numb: number = parseInt(elem.moneyInfo.denomination, 10) // делаю из строки "100" число 100
            while (elem.count !== 0 && count >= denem_numb) {
                elem.count--
                count = count - denem_numb
            }
        }
        
        return count === 0; //если все получилось, то будет true, если сумма не наберется, то будет false
    }

    public takeMoney(moneyUnits:  IMoneyUnit[]): boolean {
        moneyUnits.sort(function (a, b) {
            if (parseInt(a.moneyInfo.denomination, 10) > parseInt(b.moneyInfo.denomination, 10)) {
                return -1;
            } else if (parseInt(a.moneyInfo.denomination, 10) < parseInt(b.moneyInfo.denomination, 10)) {
                return 1;
            }
        }); // отсортировал массив moneyUnits объектов типа IMoneyUnit от большего к меньшему номиналу
        
        for (let item of moneyUnits) {
            for (let elem of this._repository) {
                if (elem.moneyInfo.currency !== item.moneyInfo.currency) {
                    continue
                }
                while (parseInt(elem.moneyInfo.denomination, 10) === parseInt(item.moneyInfo.denomination,10) && item.count !== 0) {
                    item.count--
                    elem.count++
                }
            }
            if (moneyUnits[moneyUnits.length] === item) {
                break
            }
        }
        return true
    }
}

let Reposit: IMoneyUnit[] = []
let INFO1: IMoneyInfo = {
    denomination: "500",
    currency: Currency.RUB
}
let REPA1: IMoneyUnit = {
    moneyInfo: INFO1,
    count: 3,
}
Reposit.push(REPA1)

let INFO2: IMoneyInfo = {
    denomination: "100",
    currency: Currency.RUB
}
let REPA2: IMoneyUnit = {
    moneyInfo: INFO2,
    count: 3,
}
Reposit.push(REPA2)

let INFO3: IMoneyInfo = {
    denomination: "50",
    currency: Currency.RUB
}
let REPA3: IMoneyUnit = {
    moneyInfo: INFO3,
    count: 3,
}
Reposit.push(REPA3)

let INFO4: IMoneyInfo = {
    denomination: "100",
    currency: Currency.USD
}
let REPA4: IMoneyUnit = {
    moneyInfo: INFO4,
    count: 3,
}
Reposit.push(REPA4)
console.log("Наш банк (там всего по 3 было):", Reposit)

let BANK = new MoneyRepository(Reposit)
console.log(BANK.giveOutMoney(200, Currency.RUB))
console.log(BANK)
//заполняем репу кэша, который кладем

let Reposit_cash: IMoneyUnit[] = []

let INF11: IMoneyInfo = {
    denomination: "50",
    currency: Currency.RUB
}
let REP11: IMoneyUnit = {
    moneyInfo: INF11,
    count: 1,
}
Reposit_cash.push(REP11)

let INF22: IMoneyInfo = {
    denomination: "500",
    currency: Currency.RUB
}
let REP22: IMoneyUnit = {
    moneyInfo: INF22,
    count: 2,
}
Reposit_cash.push(REP22)

let INF33: IMoneyInfo = {
    denomination: "100",
    currency: Currency.RUB
}
let REP33: IMoneyUnit = {
    moneyInfo: INF33,
    count: 3,
}
Reposit_cash.push(REP33)
console.log("1350 руб., которые мы кладем:", Reposit_cash)

console.log(BANK.takeMoney(Reposit_cash))
console.log(BANK.giveOutMoney(100, Currency.USD))
console.log('Итог после того, как забрал 200 руб., забрал 100$ и положил 1350 руб', BANK)
console.log(BANK.giveOutMoney(300, Currency.USD))
*/


// ЗАДАЧА № 7 (БЛОК № 2.1 'MoneyRepository').
// Имеется класс BankOffice. Который должен хранить пользователей и банковские карты.
// Пользователи банка могу иметь карту, а могут не иметь.
// Карты могут иметь своего владельца, а могут не иметь.
// Требуется:
// 1) Реализовать классу BankOffice 3 метода:
// 		1.1) authorize - позволяет авторизировать пользователя:
// 			 Пользователь считается авторизованым, если карта принадлежит ему и пин-код введен корректно
// 			 Принимает аргументы userId - id пользователя, cardId - id банковской карты, cardPin - пин-код карты
// 			 Если пользователь был успешно авторизован, то метод возвращает true, иначе false
// 		1.2) getCardById - позволяет получить объект банковской карты из хранилища по id карты
//		1.3) isCardTiedToUser - позволяет по id карты узнать, привзяана ли карта к какому-нибудь пользователю
//			 возвращает true - если карта привязана к какому-нибудь пользователю, false в ином случае
// 2) Типизировать все свойства и методы класса MoneyRepository,
// 	  пользуясь уже предоставленными интерфейсами (избавиться от всех any типов)

//РЕШЕНИЕ НИЖЕ (проверено):
/*
enum Currency {
    'RUB',
    'USD',
}

interface ICard {
    id: string;
    balance: number;
    currency: Currency,
    pin: string,
}

interface IBankUser {
    id: string;
    name: string;
    surname: string;
    cards: Array<ICard>;
}

class BankOffice {
    private _users: IBankUser[];
    private _cards: ICard[];

    constructor(users: IBankUser[], cards: ICard[]) {
        this._users = users;
        this._cards = cards;
    }

    public authorize(userId: string, cardId: string, cardPin: string): boolean {
        let Authorizing = false
        this._users.forEach(elem => {
            if (parseInt(elem.id, 10) === parseInt(userId, 10)) {
                this._cards.forEach(item => {
                    if (parseInt(item.id, 10) === parseInt(cardId, 10) &&
                        parseInt(item.pin, 10) === parseInt(cardPin, 10)) {
                            return Authorizing = true
                    }

                })
            }
        });
        return Authorizing
    }

    public getCardById(cardId: string): ICard {
        let obj_card: ICard
        this._cards.forEach(elem => {
            if (parseInt(elem.id, 10) === parseInt(cardId, 10)) {
                return obj_card = elem
            }
        })
        return obj_card
    }

    public isCardTiedToUser(cardId: string): boolean {
        let tied = false
        this._users.forEach(elem => {
            if  (elem.cards.some(item => {
                parseInt(item.id, 10) === parseInt(cardId, 10)})) {
                    return tied = true
            }
        })
        return tied
    }
}
*/



// ЗАДАЧА № 8 (БЛОК № 2.1 'MoneyRepository').
// Имеется класс UserSettingsModule. Который должен отвечать за
// изменение настроек пользователя.
// Требуется:
// 1) Реализовать классу UserSettingsModule 4 метода:
// 		1.1) changeUserName - метод, заменяющий имя пользователя на переданное в аргументе
// 			 возвращает true, если операция удалась и false в ином случае
// 		1.2) changeUserSurname - метод, заменяющий фамилию пользователя на переданную в аргументе
// 			 возвращает true, если операция удалась и false в ином случае
// 		1.3) registerForUserNewCard - метод, привязывающий пользователю банковскую
// 			 Карта считается успешно привязанной, если она существует и она не привязана ни к одному пользователю
// 			 возвращает true, если операция удалась и false в ином случае
// 		1.4) changeUserSettings - управляющий метод
// 			 который возвращает резльтат работы одного из методов из 1.1 - 1.3
// 			 на основе переданных аргументов
// 2) Типизировать все свойства и методы класса UserSettingsModule,
// 	  пользуясь уже предоставленными интерфейсами (избавиться от всех any типов)

//РЕШЕНИЕ НИЖЕ (проверено):
/*
enum Currency {
    'RUB',
    'USD',
}
interface ICard {
    id: string;
    balance: number;
    currency: Currency,
    pin: string,
}
interface IBankUser {
    id: string;
    name: string;
    surname: string;
    cards: Array<ICard>;
}
class BankOffice {
    private _users: IBankUser[];
    private _cards: ICard[];

    constructor(users: IBankUser[], cards: ICard[]) {
        this._users = users;
        this._cards = cards;
    }

    public authorize(userId: string, cardId: string, cardPin: string): boolean {
        let Authorizing = false
        this._users.forEach(elem => {
            if (parseInt(elem.id, 10) === parseInt(userId, 10)) {
                this._cards.forEach(item => {
                    if (parseInt(item.id, 10) === parseInt(cardId, 10) &&
                        parseInt(item.pin, 10) === parseInt(cardPin, 10)) {
                            return Authorizing = true
                    }

                })
            }
        });
        return Authorizing
    }

    public getCardById(cardId: string): ICard {
        let obj_card: ICard
        this._cards.forEach(elem => {
            if (parseInt(elem.id, 10) === parseInt(cardId, 10)) {
                return obj_card = elem
            }
        })
        return obj_card
    }

    public isCardTiedToUser(cardId: string): boolean {
        let tied = false
        this._users.forEach(elem => {
            if  (elem.cards.some(item => {
                parseInt(item.id, 10) === parseInt(cardId, 10)})) {
                    return tied = true
            }
        })
        return tied
    }
}

enum UserSettingOptions {
    'name',
    'surname',
    'newCard',
}

class UserSettingsModule {
    private _bankOffice: BankOffice;
    private _user: IBankUser;

    public set user(user: IBankUser) {
        this._user = user;
    }

    constructor(initialBankOffice: BankOffice) {
        this._bankOffice = initialBankOffice;
    }

    private changeUserName(newName: string): boolean {
        if (this.user.name !== newName) {
            this._user.name = newName
            return true
        } else {
            return false
        }
    }

    private changeUserSurname(newSurname: string): boolean {
        if (this._user.surname !== newSurname) {
            this.user.surname = newSurname
            return true
        } else {
            return false
        }
    }

    private registerForUserNewCard(newCardId: string): boolean {
        let card_obj: ICard  = this._bankOffice.getCardById(newCardId);
        if (card_obj === undefined ||
            this._bankOffice.isCardTiedToUser(newCardId)) {
            return false
        } else {
            this._user.cards.push(card_obj)
            return true
        }
    }

    public changeUserSettings(option: UserSettingOptions, argsForChangeFunction: string): boolean {
        if (option === UserSettingOptions.name) {
            return this.changeUserName(argsForChangeFunction)
        }
        if (option === UserSettingOptions.surname) {
            return this.changeUserSurname(argsForChangeFunction)
        }
        if (option === UserSettingOptions.newCard) {
            return this.registerForUserNewCard(argsForChangeFunction)
        }
    }
}
*/


// ЗАДАЧА № 9 (БЛОК № 2.1 'MoneyRepository').
// Имеется класс CurrencyConverterModule. Который должен отвечать за
// конвертацию валют.
// Требуется:
// 1) Реализовать классу CurrencyConverterModule 1 метод - convert
// 	  метод должен принимать 3 аргумента:
//		1.1) fromCurrency - валюта, из которой происходит конвертация
//		1.2) toCurrency - валюта, в которую происходит конвертация
//		1.3) moneyUnits - денежные единицы, полностью соответствующие валюте,
//			 из которой происходит конвертация
//	  Метод должен возвращать набор денежных единиц в той валюте, в которую происходит конвертация
//	  Для простоты реализации будем считать, что банкомат конвертирует только по курсу
//	  1USD = 70RUB и кратные курсу суммы (т.е. банкомат не может сконвертировать 100RUB, может только 70, 140 и т.д.)
// 2) Типизировать все свойства и методы класса UserSettingsModule,
// 	  пользуясь уже предоставленными интерфейсами (избавиться от всех any типов)

//РЕШЕНИЕ НИЖЕ (проверено):
/*
enum Currency {
    'RUB',
    'USD',
}

interface IMoneyInfo {
    denomination: string;  //>>>  "100, 500, 5000"
    currency: Currency; // Currency[0] == RUB ||  Currency[1] == USD
}

interface IMoneyUnit {
    moneyInfo: IMoneyInfo; // лежит наминал   + название валюты / Currence[1=ДОЛЛАР]
    count: number; // количество денег (скорее всего общее в двух валютах) //>>> 1400
}

class MoneyRepository {
    private _repository: IMoneyUnit[];
    constructor(initialRepository: IMoneyUnit[]) {
        this._repository = initialRepository;
    }

    public giveOutMoney(count: number, currency: Currency): boolean {
        this._repository.sort(function (a, b) {
            if (parseInt(a.moneyInfo.denomination, 10) > parseInt(b.moneyInfo.denomination, 10)) {
                return -1;
            } else if (parseInt(a.moneyInfo.denomination, 10) < parseInt(b.moneyInfo.denomination, 10)) {
                return 1;
            }
        }); // отсортировал массив объектов IMoneyUnit от большего к меньшему номиналу

        for (let elem of this._repository) {
            if (elem.moneyInfo.currency !== currency) {
                continue
            } // если валюта конретного элемента не подходит, то берем следующий элемент
            if (count === 0) {
                break
            }
            let denem_numb: number = parseInt(elem.moneyInfo.denomination, 10) // делаю из строки "100" число 100
            while (elem.count !== 0 && count >= denem_numb) {
                elem.count--
                count = count - denem_numb
            }
        }
        
        return count === 0; //если все получилось, то будет true, если сумма не наберется, то будет false
    }

    public takeMoney(moneyUnits:  IMoneyUnit[]): boolean {
        moneyUnits.sort(function (a, b) {
            if (parseInt(a.moneyInfo.denomination, 10) > parseInt(b.moneyInfo.denomination, 10)) {
                return -1;
            } else if (parseInt(a.moneyInfo.denomination, 10) < parseInt(b.moneyInfo.denomination, 10)) {
                return 1;
            }
        }); // отсортировал массив moneyUnits объектов типа IMoneyUnit от большего к меньшему номиналу
        
        for (let item of moneyUnits) {
            for (let elem of this._repository) {
                if (elem.moneyInfo.currency !== item.moneyInfo.currency) {
                    continue
                }
                while (parseInt(elem.moneyInfo.denomination, 10) === parseInt(item.moneyInfo.denomination,10) && item.count !== 0) {
                    item.count--
                    elem.count++
                }
            }
            if (moneyUnits[moneyUnits.length] === item) {
                break
            }
        }
        return true
    }
}

class CurrencyConverterModule {
    private _moneyRepository: MoneyRepository;
    private oneUSD: number;

    constructor(initialMoneyRepository: MoneyRepository) {
        this._moneyRepository = initialMoneyRepository;
        this.oneUSD = 70
    }

    public convertMoneyUnits(fromCurrency: Currency, toCurrency: Currency, moneyUnits: IMoneyUnit[]): boolean {
        let result = false
        if (fromCurrency === Currency.RUB && toCurrency === Currency.USD) {
            let fromsumRUB: number = 0
            moneyUnits.forEach(elem => {
                fromsumRUB += elem.count * parseInt(elem.moneyInfo.denomination, 10)
            })

            if (fromsumRUB % this.oneUSD === 0) {
                let tosumUSD: number = fromsumRUB / this.oneUSD
                if (this._moneyRepository.giveOutMoney(tosumUSD, Currency.USD) &&
                    this._moneyRepository.takeMoney(moneyUnits)) {
                        return result = true
                }
            }
        }

        if (fromCurrency === Currency.USD && toCurrency === Currency.RUB) {
            let fromsumUSD: number = 0
            moneyUnits.forEach(elem => {
                fromsumUSD += elem.count * parseInt(elem.moneyInfo.denomination, 10)
            })

            let tosumRUB: number = fromsumUSD * this.oneUSD
            if (this._moneyRepository.giveOutMoney(tosumRUB, Currency.RUB) &&
               this._moneyRepository.takeMoney(moneyUnits)) {
                   return result = true
               }
        }

        return result
    }
}
*/


// ЗАДАЧА № 10 (БЛОК № 2.1 'MoneyRepository').
// Имеется класс BankTerminal. Класс представляет банковский терминал.
// Требуется:
// 1) Реализовать классу BankTerminal 5 методjd:
// 		1.1) authorize - позволяет авторизировать пользователя c помощью авторизации в BankOffice
// 		1.2) takeUsersMoney - позволяет авторизованному пользователю положить денежные единицы
// 			 в хранилище и пополнить свой баланс на карте
//		1.3) giveOutUsersMoney - позволяет авторизованному пользователю снять денежные единицы
// 			 с карты и получить их наличными из хранилища
//		1.4) changeAuthorizedUserSettings - позволяет авторизованному пользователю изменить свои
// 			 настройки с помощью методов UserSettingsModule
//		1.5) convertMoneyUnits - позволяет авторизованному пользователю конвертировать валюту
//			 с помощью методов CurrencyConverterModule
// 2) Типизировать все свойства и методы класса BankTerminal,
// 	  пользуясь уже предоставленными интерфейсами (избавиться от всех any типов)

//РЕШЕНИЕ НИЖЕ (проверено):

enum Currency {
    'RUB',
    'USD',
}

enum UserSettingOptions {
    'name',
    'surname',
    'newCard',
}

interface IMoneyInfo {
    denomination: string;  //>>>  "100, 500, 5000"
    currency: Currency; // Currency[0] == RUB ||  Currency[1] == USD
}

interface IMoneyUnit {
    moneyInfo: IMoneyInfo; // лежит наминал   + название валюты / Currence[1=ДОЛЛАР]
    count: number; // количество денег (скорее всего общее в двух валютах) //>>> 1400
}

class MoneyRepository {
    private _repository: IMoneyUnit[];
    constructor(initialRepository: IMoneyUnit[]) {
        this._repository = initialRepository;
    }

    public giveOutMoney(count: number, currency: Currency): boolean {
        this._repository.sort(function (a, b) {
            if (parseInt(a.moneyInfo.denomination, 10) > parseInt(b.moneyInfo.denomination, 10)) {
                return -1;
            } else if (parseInt(a.moneyInfo.denomination, 10) < parseInt(b.moneyInfo.denomination, 10)) {
                return 1;
            }
        }); // отсортировал массив объектов IMoneyUnit от большего к меньшему номиналу

        for (let elem of this._repository) {
            if (elem.moneyInfo.currency !== currency) {
                continue
            } // если валюта конретного элемента не подходит, то берем следующий элемент
            if (count === 0) {
                break
            }
            let denem_numb: number = parseInt(elem.moneyInfo.denomination, 10) // делаю из строки "100" число 100
            while (elem.count !== 0 && count >= denem_numb) {
                elem.count--
                count = count - denem_numb
            }
        }
        
        return count === 0; //если все получилось, то будет true, если сумма не наберется, то будет false
    }

    public takeMoney(moneyUnits:  IMoneyUnit[]): boolean {
        moneyUnits.sort(function (a, b) {
            if (parseInt(a.moneyInfo.denomination, 10) > parseInt(b.moneyInfo.denomination, 10)) {
                return -1;
            } else if (parseInt(a.moneyInfo.denomination, 10) < parseInt(b.moneyInfo.denomination, 10)) {
                return 1;
            }
        }); // отсортировал массив moneyUnits объектов типа IMoneyUnit от большего к меньшему номиналу
        
        for (let item of moneyUnits) {
            for (let elem of this._repository) {
                if (elem.moneyInfo.currency !== item.moneyInfo.currency) {
                    continue
                }
                while (parseInt(elem.moneyInfo.denomination, 10) === parseInt(item.moneyInfo.denomination,10) && item.count !== 0) {
                    item.count--
                    elem.count++
                }
            }
            if (moneyUnits[moneyUnits.length] === item) {
                break
            }
        }
        return true
    }
}

interface ICard {
    id: string;
    balance: number;
    currency: Currency,
    pin: string,
}

interface IBankUser {
    id: string;
    name: string;
    surname: string;
    cards: Array<ICard>;
}

class BankOffice {
    private _users: IBankUser[];
    private _cards: ICard[];

    constructor(users: IBankUser[], cards: ICard[]) {
        this._users = users;
        this._cards = cards;
    }

    public authorize(userId: string, cardId: string, cardPin: string): boolean {
        let Authorizing = false
        this._users.forEach(elem => {
            if (parseInt(elem.id, 10) === parseInt(userId, 10)) {
                this._cards.forEach(item => {
                    if (parseInt(item.id, 10) === parseInt(cardId, 10) &&
                        parseInt(item.pin, 10) === parseInt(cardPin, 10)) {
                            return Authorizing = true
                    }

                })
            }
        });
        return Authorizing
    }

    public getCardById(cardId: string): ICard {
        let obj_card: ICard
        this._cards.forEach(elem => {
            if (parseInt(elem.id, 10) === parseInt(cardId, 10)) {
                return obj_card = elem
            }
        })
        return obj_card
    }

    public isCardTiedToUser(cardId: string): boolean {
        let tied = false
        this._users.forEach(elem => {
            if  (elem.cards.some(item => {
                parseInt(item.id, 10) === parseInt(cardId, 10)})) {
                    return tied = true
            }
        })
        return tied
    }
}

class UserSettingsModule {
    private _bankOffice: BankOffice;
    private _user: IBankUser;

    public set user(user: IBankUser) {
        this._user = user;
    }

    constructor(initialBankOffice: BankOffice) {
        this._bankOffice = initialBankOffice;
    }

    private changeUserName(newName: string): boolean {
        if (this.user.name !== newName) {
            this._user.name = newName
            return true
        } else {
            return false
        }
    }

    private changeUserSurname(newSurname: string): boolean {
        if (this._user.surname !== newSurname) {
            this.user.surname = newSurname
            return true
        } else {
            return false
        }
    }

    private registerForUserNewCard(newCardId: string): boolean {
        let card_obj: ICard  = this._bankOffice.getCardById(newCardId);
        if (card_obj === undefined ||
            this._bankOffice.isCardTiedToUser(newCardId)) {
            return false
        } else {
            this._user.cards.push(card_obj)
            return true
        }
    }

    public changeUserSettings(option: UserSettingOptions, argsForChangeFunction: string): boolean {
        if (option === UserSettingOptions.name) {
            return this.changeUserName(argsForChangeFunction)
        }
        if (option === UserSettingOptions.surname) {
            return this.changeUserSurname(argsForChangeFunction)
        }
        if (option === UserSettingOptions.newCard) {
            return this.registerForUserNewCard(argsForChangeFunction)
        }
    }
}

class CurrencyConverterModule {
    private _moneyRepository: MoneyRepository;
    private oneUSD: number;

    constructor(initialMoneyRepository: MoneyRepository) {
        this._moneyRepository = initialMoneyRepository;
        this.oneUSD = 70
    }

    public convertMoneyUnits(fromCurrency: Currency, toCurrency: Currency, moneyUnits: IMoneyUnit[]): boolean {
        let result = false
        if (fromCurrency === Currency.RUB && toCurrency === Currency.USD) {
            let fromsumRUB: number = 0
            moneyUnits.forEach(elem => {
                fromsumRUB += elem.count * parseInt(elem.moneyInfo.denomination, 10)
            })

            if (fromsumRUB % this.oneUSD === 0) {
                let tosumUSD: number = fromsumRUB / this.oneUSD
                if (this._moneyRepository.giveOutMoney(tosumUSD, Currency.USD) &&
                    this._moneyRepository.takeMoney(moneyUnits)) {
                        return result = true
                }
            }
        }

        if (fromCurrency === Currency.USD && toCurrency === Currency.RUB) {
            let fromsumUSD: number = 0
            moneyUnits.forEach(elem => {
                fromsumUSD += elem.count * parseInt(elem.moneyInfo.denomination, 10)
            })

            let tosumRUB: number = fromsumUSD * this.oneUSD
            if (this._moneyRepository.giveOutMoney(tosumRUB, Currency.RUB) &&
               this._moneyRepository.takeMoney(moneyUnits)) {
                   return result = true
               }
        }

        return result
    }
}

//Само решение задачи №10:

class BankTerminal {
    private _bankOffice: BankOffice;
    private _moneyRepository: MoneyRepository;
    private _userSettingsModule: UserSettingsModule;
    private _currencyConverterModule: CurrencyConverterModule;
    private _authorizedUser: IBankUser;
    private _Card: ICard;

    constructor(initBankOffice: BankOffice, initMoneyRepository: MoneyRepository) {
        this._moneyRepository = initMoneyRepository;
        this._bankOffice = initBankOffice;
        this._userSettingsModule = new UserSettingsModule(initBankOffice);
        this._currencyConverterModule = new CurrencyConverterModule(initMoneyRepository);
    }

    public authorizeUser(user: IBankUser, card: ICard, cardPin: string): void {
        if(this._bankOffice.authorize(user.id, card.id, cardPin)) {
            this._authorizedUser = user;
            this._Card = card;
        }
    }

    public takeUsersMoney(moneyUnits: IMoneyUnit[]): void {
        if (this._authorizedUser !== undefined) {
            this._moneyRepository.takeMoney(moneyUnits);

            this._authorizedUser.cards.forEach(item => {
                moneyUnits.forEach(elem => {
                    if (item.currency === elem.moneyInfo.currency) {
                        this._bankOffice.getCardById(item.id).balance += elem.count * parseInt(elem.moneyInfo.denomination, 10);
                    }
                })
            })
        }
    }

    public giveOutUsersMoney(count: number): void {
        if (this._authorizedUser !== undefined) {
            if (this._moneyRepository.giveOutMoney(count, this._Card.currency)){
                this._Card.balance = this._Card.balance - count
            }
        }
    }

    public changeAuthorizedUserSettings(option: UserSettingOptions, argsForChangeFunction: string): void {
        if (this._authorizedUser !== undefined) {
            this._userSettingsModule.changeUserSettings(option, argsForChangeFunction);
        }
    }

    public convertMoneyUnits(fromCurrency: Currency, toCurrency: Currency, moneyUnits: IMoneyUnit[]): void {
        if (this._authorizedUser !== undefined) {
        this._currencyConverterModule.convertMoneyUnits(fromCurrency, toCurrency,moneyUnits)
        }
    }
}
