// ЗАДАЧА № 11 (БЛОК № 2.3).
// Изучить принцип работы паттерна декоратор (https://refactoring.guru/ru/design-patterns/decorator)
// 2) Для метода exec класса Calculator реализовать два классических декоратора:
// 		2.1) DecorateRu - Оборачивает работу метода exec и выводит
// 			 результат в виде строки на русском языке:
// 			 результат сложения ${a} + ${b} = ${рассчитанное значение}
//		2.2) DecorateEn - Оборачивает работу метода exec и выводит
//			 результат в виде строки на английском языке:
//			 result of the addition operation ${a} + ${b} = ${рассчитанное значение}

//РЕШЕНИЕ НИЖЕ (проверено):

class Calculator {
    protected a: number = 0;
    protected b: number = 0;

    constructor(a: number, b: number) {
        if (!!a) { // двойное отрицание означает: если а != 0
            this.a = a;
        }
        if (!!b) { // двойное отрицание означает: если b != 0
            this.b = b;
        }
    }
    
    public exec(): string {
        return (this.a + this.b).toString();
    }
}

class BaseDecorator extends Calculator {
    protected wrap: Calculator;

    constructor(a: number, b: number) {
        super(a, b);
        this.wrap = new Calculator(a, b);
    }
}

class DecorateRu extends BaseDecorator {
    public exec(): string {
        return `результат сложения ${this.a} + ${this.b} = ${this.wrap.exec()}`;
    }
}   
    
class DecorateEn extends BaseDecorator {
    public exec(): string {
        return `result of the addition operation ${this.a} + ${this.b} = ${this.wrap.exec()}`
    }
}

let calcul = new Calculator(2,8);
console.log("Реализация класса Calculator (подал 2 и 8): ",calcul.exec())

let base = new BaseDecorator(18, 7);
console.log("Реализация класса BaseDecorator (подал 18 и 7):", base.exec())

let engsum = new DecorateEn(2,8)
console.log("Реализация класса DecorateEng (подал 2 и 8):", engsum.exec())

let rusum = new DecorateRu(16,14)
console.log("Реализация класса DecorateRu: (подал 16 и 14)",rusum.exec())



// ЗАДАЧА № 12 (БЛОК № 2.3).
// Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
// который будет реагировать на присвоение в поле email значения.
// Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
// Когда присваивается некорректный e-mail возбуждается ошибка.

//РЕШЕНИЕ НИЖЕ (проверено):
/
function validateMail(target: Object, propertyKey: string | symbol): any {
    let email = target[propertyKey]
    let descriptor: PropertyDescriptor = {
        get() {
            return email
        },
        set(newEmail: string) {
            if (newEmail !== "" && !/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/.test(newEmail)) {
                throw 'Invalid email.'
            } else {
                console.log('email valid');
                email = newEmail;
            }
        }
    }
    return descriptor;
}
    
class Example {
    @validateMail
        public email: string = "";
}

let exampleInstance = new Example();
exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid



// ЗАДАЧА № 13 (БЛОК № 2.3).
// Ниже представлен код в котором, пропущены участки кода.
// Требуется дописать участки кода так, чтобы программа компилировалась.
// Использование типа any допустимо только в Control<any>.
// Переопределенные методы getValue и setValue в классах TextBox и SelectBox должны
// принимать и возвращать только свой результирующий тип (string и SelectItem)
// Методы register и getInstance класса FactoryControl. Должны принимать и возвращать только те типы,
// которые унаследованы от класса Control<T>.

//РЕШЕНИЕ НИЖЕ (-):

/**Базовый класс для контролов */
abstract class Control<T> {
    public name: string = "";
    protected value: T;
    /**взять значение из контрола */
    public abstract getValue(): T;
    /**установить значение в контрол */
    public abstract setValue(val: T): void;
}

/**Класс описывает TextBox контрол */
class TextBox extends Control<string> {
    public getValue(): string {
        return this.value
    }
    public setValue(val: string): void {
        this.value = val
    }
}

/**value контрола selectBox */
class SelectItem {
    public value: string;
    public id: number;
}

/**Класс описывает SelectBox контрол */
class SelectBox extends Control<SelectItem> {
    public getValue(): SelectItem {
        return this.value
    }
    public setValue(val: SelectItem): void {
        this.value = val 
    }
}

class Container {
    public instance: Control<any>;
    public type: string;
}
/**Фабрика которая отвечает за создание экземпляров контролов */

class FactoryControl {
    /**Список соотношений тип - инстанс типа */
    private _collection: Array<Container>;
    
    constructor() {
        this._collection = [];
    }

    public register<T extends typeof SelectBox>(type: T) {
        if(!this.existType(typeof type)) {
            this._collection.push({instance: new type, type: typeof type})
        }
    }

    public getInstance<T extends typeof SelectBox>(type: T): Control<T> {
        return this._collection.find(item => item.instance === type.prototype).instance
    }


    private existType(type: string): boolean {
        return this._collection.filter(g => g.type === type).length > 0;
    }
}

const factory = new FactoryControl();
factory.register(SelectBox);

const selectBoxInstance = factory.getInstance(SelectBox);

//selectBoxInstance.setValue("sdfsdf") // компилятор TS не пропускает
//selectBoxInstance.setValue(new SelectItem()) // компилятор TS пропускает



// ЗАДАЧА № 14 (БЛОК № 2.3).
//Описать каким должен быть объект X, чтобы метод работал корректно

//РЕШЕНИЕ НИЖЕ (проверено):

function getProperty(obj, key) {
    return obj[key];
}
const x = {
    m: 878
};
console.log(getProperty(x, "m"));



// ЗАДАЧА № 15 (БЛОК № 2.3).
// Реализовать декоратор с шаблонным типом, который добавляется к полю класса.
// Декоратор должен выполнять 2 функции:
// 		1) Проверять соответствие устанавливаемого значения типу, который передан в декоратор.
// 		   Если тип не верный, то генерируется эксепшен.
// 		2) Проверять у передаваемого объекта наличие заполненного поля.
// 		   Если поле не заполнено, то генерируется эксепшен.


function validate<T, P extends keyof T>(type: new () => T, prop: P): (target: Object, propertyKey: string | symbol) => any {
    let temp: T;
    return (target: Object, propertyKey: string | symbol): PropertyDescriptor => {
        let descriptor: PropertyDescriptor = {
            get: function () {
                return temp;
            },
            set: function (val: T) {
                if (!(val instanceof type)) {
                    throw new Error("Устанавливается значение которое не соотвтетсвует типу");
                }
                if (temp[prop]) {
                    throw new Error("У требуемого поля не верный примитивный тип");
                }
                console.log("value valid");
                temp = val;
            }
        };
        return descriptor;
    };
}
class ValueExample1 {
    public value: string;
    public id: number;
	public constructor(value?: string, id?: number) {
		this.value = value;
		this.id = id;
	}
}
 
class ValueExample2 {
    public undefinedProp: undefined;
    public booleanProp: boolean;
	public constructor(undefinedProp?: undefined, booleanProp?: boolean) {
		this.undefinedProp = undefinedProp;
		this.booleanProp = booleanProp;
	}
}

class Example1 {
    @validate(ValueExample1, "id")
    public propValueExample1: any;
 
    @validate(ValueExample2, "booleanProp")
    public propValueExample2: any;
}