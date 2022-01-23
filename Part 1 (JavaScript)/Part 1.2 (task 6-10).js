// ЗАДАЧА № 6 (БЛОК № 1.2 "Телефонная книга")
// Функция add.
// Требуется написать функцию add, которая
// принимает: 
// 	1) Текущее состояние телефонной книги
// 	2) Номер телефон
// 	3) Имя
// 	4) Электронную почту,
// требуется:
// в текущее состояние телефонной книги добавить новый контакт по правилам
// 	1) Телефоны принимаются только в форматах +7-999-111-22-33 или +79991112233
// 	2) Не добавляется уже существующая запись
// 	3) Не добавляется запись без имени
// возвращает:
// 	true - если добавление прошло успешно
// false - если запись не создалась или не добавилась в книгу

// @param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
// @param {string} phone Номер телефона
// @param {string} name Имя
// @param {string} email Электронная почта
// @returns {boolean} Результат добавления

//РЕШЕНИЕ НИЖЕ (проверено и раскомментированно в задаче №10):

/*const phoneBook = [];

function add(phoneBook, phone, name, email) {
    let P = phone.replace(/[-,(,)]/gi, '')
    let A = true
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].phone == P) {
            A = false
            break
        }

    }
    console.log(P)
    if ((P.length == 12 && A == true)) {
        if (name != undefined && name != "" && name != " ") {
            phoneBook.push({ phone: P, name, email })
            console.log(true)
        } else {
            console.log(false)
        }
    } else {
        console.log(false)
    }
}

add(phoneBook, '+78005553535', 'Сергей', 'sergey@mail.ru')
add(phoneBook, '+7-800-333-55-55', 'Антон', 'anton@mail.ru')
add(phoneBook, '+7-922-555-35-35', 'Алексей')

add(phoneBook, '+7800555353', 'Сергей', 'sergey@mail.ru')
add(phoneBook, '+7-800-333-55', 'Антон', 'anton@mail.ru')
add(phoneBook, '+7(922)555-35-35', 'Алексей')
add(phoneBook, '+79225550000', '')
add(phoneBook, '+79225550000')

add(phoneBook, '+7-800-555-35-35', 'Андрей', 'andrey@mail.ru')
add(phoneBook, '+7-922-555-35-35', 'Роман', 'roman@mail.ru')
add(phoneBook, '+79225553535', 'Миша')

console.log(phoneBook)
*/


// ЗАДАЧА № 7 (БЛОК № 1.2 "Телефонная книга")
// Функция update.
// Требуется написать функцию update, которая
// принимает: 
// 	1) Текущее состояние телефонной книги
// 	2) Номер телефон
// 	3) Имя
// 	4) Электронную почту,
// требуется:
// в текущем состояние телефонной книги обновить контакт по номеру телефона
// 	1) Электронную почту можно стереть, а имя нет
// 	2) Правила валидации полей такое же, как и при добавлении
// возвращает:
// 	true - если обновление прошло успешно
// 	false - если запись не обновилась

// @param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
// @param {string} phone Номер телефона
// @param {string} name Имя
// @param {string} email Электронная почта
// @returns {boolean} Результат обновления

//РЕШЕНИЕ НИЖЕ (проверено и раскомментированно в задаче №10):

/*const phoneBook = [];

function add(phoneBook, phone, name, email) {
    let P = phone.replace(/[-,(,)]/gi, '')
    let A = true
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].phone == P) {
            A = false
            break
        }
    }
    if ((P.length == 12 && A == true)) {
        if (name != undefined && name != "" && name != " ") {
            phoneBook.push({ phone, name, email })
            console.log("---")
        } else {
            console.log("---")
        }
    } else {
        console.log("---")
    }
}
add(phoneBook, '+7-800-555-35-35', 'Андрей', 'andrey@mail.ru');
add(phoneBook, '+7-922-555-35-35', 'Роман', 'roman@mail.ru');
console.log(phoneBook)

function update(phoneBook, phone, name, email) {
    // let P = phone.replace(/[-,(,)]/gi, '')
    let A = true
        // console.log(P)
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].phone == phone
            && name != undefined
            && name != ""
            && name != " ") {
            phoneBook[i].name = name
            phoneBook[i].email = email
            console.log(true)
            break
        } else {
            if (i == phoneBook.length - 1) {
                console.log(false)
                break
            }

        }
    }
}
update(phoneBook, '+7-922-555-35-35', 'Сергей', 'sergey@mail.ru') // toBe(true);
update(phoneBook, '+7-800-555-35-35', 'Алексей') // toBe(true);
update(phoneBook, '+7-800-555-35-35', '') // toBe(false);
update(phoneBook, '+7-800-555-35-35') // toBe(false);
update(phoneBook, '+7-800-555-3535', 'Артем') // toBe(false);
update(phoneBook, 'aaa+79225553535', 'Сергей', 'sergey@mail.ru') // toBe(false);
update(phoneBook, '+79225553535aaa', 'Сергей', 'sergey@mail.ru') // toBe(false);
update(phoneBook, '+7-800-555-00-00', 'Сергей') // toBe(false);
*/


// ЗАДАЧА № 8 (БЛОК № 1.2 "Телефонная книга")
//Функция find
// Требуется написать функцию find, которая
// принимает: 
// 	1) Текущее состояние телефонной книги
// 	2) Запрос для поиска
// требуется:
// в текущем состоянии телефонной книги найти все записи, которые удовлетворяют требованиям
// 	1) Одно из полей name, email содержит подстроку поиска
// 	2) Поиск по полю phone проводится по следующим правилам:
// 		2.1) При запросе +7-800-555-35-35 должны отображаться записи с номерами +7-800-555-35-35 и +78005553535
// 		2.2) При запросе +78005553535 должны отображаться записи с номерами +78005553535 и +7-800-555-35-35
// 	2) Пустой запрос не должен ничего находить
// 	3) Запрос «*» находит все записи
// возвращает:
// 	Отсортированный по полю name массив строк в формате name, phone, email
// 	Поле phone должно быть отформатировано в виде +7 (999) 111-22-33

// @param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
// @param {string} query Строка для поиска
// @returns {Array<string>} Результаты поиска


// РЕШЕНИЕ НИЖЕ (проверено):

const phoneBook = [];

function add(phoneBook, phone, name, email) {
    let P = phone.replace(/[-,(,)]/gi, '')
    let A = true
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].phone == P) {
            A = false
            break
        }
    }
    if ((P.length == 12 && A == true)) {
        if (name != undefined && name != "" && name != " ") {
            phoneBook.push({ phone, name, email })
            console.log("---")
        } else {
            console.log("---")
        }
    } else {
        console.log("---")
    }
}
add(phoneBook, '+7-800-555-35-35', 'Андрей', 'andrey@mail.ru');
add(phoneBook, '+79221114219', 'Роман');
add(phoneBook, '+78005553535', 'Иван', 'ivan66@mail.ru');

console.log('От так лежат там изначально:', phoneBook)


function find(phoneBook, query) {
    let mas = []

    if (query != "*" && query != '') {
        let reg = RegExp('(' + query.replace(/[\-+]/g, '') + '[\w\n]*)', 'i')
        let reg1 = new RegExp(/(^\+|\d{3})/);
        let reg2 = new RegExp(/@|\.|ru|m\w+\./)
        let s = query.replace(/-/g, '')
        if (reg1.test(s)) {
            FindPhone(phoneBook, reg)
        } else if (reg2.test(s)) {
            FindEmail(phoneBook, reg)
        } else {
            let trans = TranslitName(query)
            let reg = RegExp('(' + trans.replace(/[\-+]/g, '') + '[\w\n]*)', 'i')
            FindName(phoneBook, reg)
        }
    } else if (query == "*") {
        for (let i = 0; i < phoneBook.length; i++) {
            let rep = (phoneBook[i].phone).replace(/-/g, '');
            FormatPhone(phoneBook[i])
        }
    } else {
        false
    }

    function TranslitName(word) {
        let answer = "";
        let convert_name = {
            "a": "а",
            "b": "б",
            "v": "в",
            "g": "г",
            "d": "д",
            "e": "е",
            "zh": "ж",
            "z": "з",
            "i": "и",
            "y": "й",
            "k": "к",
            "l": "л",
            "m": "м",
            "n": "н",
            "o": "о",
            "p": "п",
            "r": "р",
            "s": "с",
            "t": "т",
            "u": "у",
            "f": "ф",
            "kh": "х",
            "ts": "ц",
            "ch": "ч",
            "sh": "ш",
            "shch": "щ",
            "ie": "ъ",
            "E": "э",
            "iu": "ю",
            "ia": "я",
            "A": "А",
            "B": "Б",
            "V": "В",
            "G": "Г",
            "D": "Д",
            "E": "Е",
            "ZH": "Ж",
            "Z": "З",
            "I": "И",
            "Y": "Й",
            "K": "К",
            "L": "Л",
            "M": "М",
            "N": "Н",
            "O": "О",
            "P": "П",
            "R": "Р",
            "S": "С",
            "T": "Т",
            "U": "У",
            "F": "Ф",
            "KH": "Х",
            "TS": "Ц",
            "CH": "Ч",
            "SH": "Ш",
            "SHCH": "Щ",
            "IE": "Ъ",
            "E": "Э",
            "IU": "Ю",
            "IA": "Я",
        }
        if (word != "" || word != " ") {
            for (var i = 0; i < word.length; i++) {
                if (convert_name[word[i]] == undefined) {
                    answer += word[i];
                } else {
                    answer += convert_name[word[i]];
                }
            }

            return answer[0].toUpperCase() + answer.slice(1)
        }
    }

    function FindEmail(phoneBook, reg) {
        for (let i = 0; i < phoneBook.length; i++) {
            if (Object.values(phoneBook[i])[2] != undefined) {
                let rep = (phoneBook[i].email).replace(/-/g, '');
                if (reg.test(rep)) {
                    FormatPhone(phoneBook[i])
                }
            }
        }

    }

    function FindName(phoneBook, reg) {
        for (let i = 0; i < phoneBook.length; i++) {
            let rep = (phoneBook[i].name).replace(/-/g, '');
            if (reg.test(rep)) {
                FormatPhone(phoneBook[i])
            }
        }

    }

    function FindPhone(phoneBook, reg) {
        for (let i = 0; i < phoneBook.length; i++) {
            let rep = (phoneBook[i].phone).replace(/-/g, '');
            if (reg.test(rep)) {
                FormatPhone(phoneBook[i])
            }
        }
    }

    function FormatPhone(object) {
        let array_bezdefis = (object["phone"].replace(/\-/g, '')).split('');
        array_bezdefis.splice(2, 0, " ", "(");
        array_bezdefis.splice(7, 0, ")", " ");
        array_bezdefis.splice(12, 0, "-");
        array_bezdefis.splice(15, 0, "-");
        array_bezdefis.join("")
        return objtostrtomas(object, array_bezdefis.join(""))

    }

    function objtostrtomas(obj, v) {
        let str = ""
        str += obj['name'] + ' '
        if (obj["email"] != undefined) {
            str += v + ' '
            str += obj['email']
        } else {
            str += v
        }
        mas.push(str)
    }
    if (query != "") {
        console.log(mas)
    }

}


find(phoneBook, "555-35")
console.log("Выше ответ на запрос '555-35',должны выйти Андрей и Роман")
find(phoneBook, "andrey")
console.log("Выше ответ на запрос 'andrey', должны выйти  данный по Андрею")
find(phoneBook, "+78005553535")
console.log("Выше запрос = +78005553535")
find(phoneBook, "ivan66@mail.ru")
console.log("Выше запрос = ivan66@mail.ru")
find(phoneBook, "Роман")
console.log("Выше запрос = Роман")
find(phoneBook, "Ro")
console.log("Выше ответ на запрос = 'Ro'")
find(phoneBook, "")
console.log("Выше ответ на запрос = ''")
find(phoneBook, "*")
console.log("Выше ответ на запрос = '*'")


// ЗАДАЧА № 9 (БЛОК № 1.2 "Телефонная книга")
// Функция findAndRemove.
// Требуется написать функцию findAndRemove, которая принимает: 
//    1) Текущее состояние телефонной книги
//    2) Запрос для поиска
// требуется:
// в текущем состоянии телефонной книги найти и удалить все записи, которые удовлетворяют требованиям
//    1) См. find из task_3
// возвращает:
//    Число удаленных записей

// @param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
// @param {string} query Строка для поиска
// @returns {number} Количество удаленных записей

// РЕШЕНИЕ НИЖЕ (проверено):

const phoneBook = [];

function add(phoneBook, phone, name, email) {
    let P = phone.replace(/[-,(,)]/gi, '')
    let A = true
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].phone == P) {
            A = false
            break
        }
    }
    if ((P.length == 12 && A == true)) {
        if (name != undefined && name != "" && name != " ") {
            phoneBook.push({ phone, name, email })
            console.log("---")
        } else {
            console.log("---")
        }
    } else {
        console.log("---")
    }
}
add(phoneBook, '+7-800-555-35-35', 'Андрей', 'andrey@mail.ru');
add(phoneBook, '+79225553335', 'Роман')
add(phoneBook, '+79125553535', 'Иван', 'ivan66@mail.ru');
console.log('От так лежат там изначально:', phoneBook)


function findAndRemove(phoneBook, query) {
    let mas = 0

    if (query != "*" && query != '') {
        let reg = RegExp('(' + query.replace(/[\-+]/g, '') + '[\w\n]*)', 'i')
        let reg1 = new RegExp(/(^\+|\d{3})/);
        let reg2 = new RegExp(/@|\.|ru|m\w+\./)
        let s = query.replace(/-/g, '')
        if (reg1.test(s)) {
            FindPhone(phoneBook, reg)
        } else if (reg2.test(s)) {
            FindEmail(phoneBook, reg)
        } else {
            let trans = TranslitName(query)
            let reg = RegExp('(' + trans.replace(/[\-+]/g, '') + '[\w\n]*)', 'i')
            FindName(phoneBook, reg)
        }
    } else if (query == "*") {
        mas = phoneBook.length
        phoneBook.splice(0, phoneBook.length)
    } else {
        false
    }


    function TranslitName(word) {
        let answer = "";
        let convert_name = {
            "a": "а",
            "b": "б",
            "v": "в",
            "g": "г",
            "d": "д",
            "e": "е",
            "zh": "ж",
            "z": "з",
            "i": "и",
            "y": "й",
            "k": "к",
            "l": "л",
            "m": "м",
            "n": "н",
            "o": "о",
            "p": "п",
            "r": "р",
            "s": "с",
            "t": "т",
            "u": "у",
            "f": "ф",
            "kh": "х",
            "ts": "ц",
            "ch": "ч",
            "sh": "ш",
            "shch": "щ",
            "ie": "ъ",
            "E": "э",
            "iu": "ю",
            "ia": "я",
            "A": "А",
            "B": "Б",
            "V": "В",
            "G": "Г",
            "D": "Д",
            "E": "Е",
            "ZH": "Ж",
            "Z": "З",
            "I": "И",
            "Y": "Й",
            "K": "К",
            "L": "Л",
            "M": "М",
            "N": "Н",
            "O": "О",
            "P": "П",
            "R": "Р",
            "S": "С",
            "T": "Т",
            "U": "У",
            "F": "Ф",
            "KH": "Х",
            "TS": "Ц",
            "CH": "Ч",
            "SH": "Ш",
            "SHCH": "Щ",
            "IE": "Ъ",
            "E": "Э",
            "IU": "Ю",
            "IA": "Я",
        }
        if (word != "" || word != " ") {
            for (var i = 0; i < word.length; i++) {
                if (convert_name[word[i]] == undefined) {
                    answer += word[i];
                } else {
                    answer += convert_name[word[i]];
                }
            }

            return answer[0].toUpperCase() + answer.slice(1)
        }
    }

    function FindEmail(phoneBook, reg) {
        for (let i = 0; i < phoneBook.length; i++) {
            if (Object.values(phoneBook[i])[2] != undefined) {
                let rep = (phoneBook[i].email).replace(/-/g, '');
                if (reg.test(rep)) {
                    delete phoneBook[i]
                    mas += 1
                }
            }
        }

    }

    function FindName(phoneBook, reg) {
        for (let i = 0; i < phoneBook.length; i++) {
            let rep = (phoneBook[i].name).replace(/-/g, '');
            if (reg.test(rep)) {
                delete phoneBook[i]
                mas += 1
            }
        }

    }

    function FindPhone(phoneBook, reg) {
        for (let i = 0; i < phoneBook.length; i++) {
            let rep = (phoneBook[i].phone).replace(/-/g, '');
            if (reg.test(rep)) {
                delete phoneBook[i]
                mas += 1
            }
        }
    }

    console.log(mas)
}

//findAndRemove(phoneBook, '*')
//console.log("Выше запрос: '*'. Должны удалиться все элименты и выйти число 3")
//console.log("После запроса: '*', вот так выгляит массив(ниже):")
//console.log(phoneBook)

//findAndRemove(phoneBook, '3535')
//console.log("Выше запрос: '3535'. Должны удалиться Андрей и Иван и выйти число 2")
//console.log("После запроса: '3535', вот так выгляит массив(ниже):")
//console.log(phoneBook)

findAndRemove(phoneBook, '555-35')
console.log("Выше запрос: '555-35'. Должны удалиться Андрей и Иван выйти число 2")
console.log("После запроса: '555-35', вот так выгляит массив(ниже):")
console.log(phoneBook)



// ЗАДАЧА № 10 (БЛОК № 1.2 "Телефонная книга") 
// Функция importFromCsv
// Требуется написать функцию importFromCsv, которая
// принимает: 
// 	1) Текущее состояние телефонной книги
// 	2) Строку в формате csv
// требуется:
// в текущем состоянии телефонной книги обновить записи или добавить их в зависимости от того, существуют они или нет
// возвращает:
// 	Число обновленных и добавленных записей

// @param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
// @param {string} csv Csv строка, описывающая таблицу, формата name;phone;email
// @returns {number} Количество добавленных и обновленных записей

// РЕШЕНИЕ НИЖЕ (Проверена):

const phoneBook = []

function add(phoneBook, phone, name, email) {
    let P = phone.replace(/-/g, '')
    let A = true
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].phone == P) {
            A = false
            break
        }

    }

    if ((P.length == 12 && A == true)) {
        if (name != undefined && name != "" && name != " ") {
            phoneBook.push({ phone: P, name, email })
        } else {
            A = false
        }
    } else {
        A = false
    }
}

function update(phoneBook, phone, name, email) {
    let A = true

    // console.log(P)
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].phone.replace(/-/g, "") == phone.replace(/-/g, "") &&
            name != undefined &&
            name != "" &&
            name != " ") {
            phoneBook[i].name = name
            phoneBook[i].email = email

            break
        } else {
            if (i == phoneBook.length - 1) {
                break
            }

        }
    }
}

const CSV = [
    '+7-800-555-35-35;Борис;boris@example.com',
    '+7-800-333-55;Григорий;grisha@example.com',
    'Алексей;alex@example.com',
    '+7-800-555-35-35;Валерий;valera@example.com',
    '+78005551111;Артем;artem@example.com'
].join('\n');

function importFromCsv(phoneBook, csv) {
    let itog_arr = []
    let big_arr = csv.split('\n');
    let sum = 0
    big_arr.forEach(item => {
        let min_arr = item.split(';')
        let contact = {}
        let reg1 = new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
        let reg2 = new RegExp(/@|\.|ru|m\w+\./)
        let reg3 = new RegExp(/^\W\W\W/)
        min_arr.forEach(function(item) {
            if (min_arr.length > 2) {
                if (reg1.test(item)) {
                    contact.phone = item
                }
                if (reg3.test(item)) {
                    contact.name = item
                }
                if (reg2.test(item)) {
                    contact.email = item
                }
            }
        })
        if (contact.phone && contact.name && contact.email) {
            itog_arr.push(contact)
            sum++
        }
    })


    itog_arr.forEach(item => {
        if (item.phone && item.name && item.email) {
            add(phoneBook, item.phone, item.name, item.email)

        }
        if (item.phone && item.name && item.email) {
            update(phoneBook, item.phone, item.name, item.email)
        }
    })

    console.log(phoneBook, sum)

}

importFromCsv(phoneBook, CSV)