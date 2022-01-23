//===15 ЗАДАЧ по TypeScript (БЛОК №2.1)===



// ЗАДАЧА № 1 (БЛОК № 2.1).
// Требуется описать типы FooType и BarType так, чтобы код,
// который написан в функции logObj компилировался и исполнялся корректно

// type FooType = unknown;
// type BarType = unknown;

//РЕШЕНИЕ НИЖЕ (проверено):

type FooType = {
    stringProp: string,
    numberProp: number,
    barObject: BarType,
};

type BarType = {
    stringsArrayProp: Array<string>,
    numbersOrDatesArrayProp: Array<number|Date>,
    functionProp: Function,
};

const fooObjects: FooType[] = [
    {
        stringProp: 'firstFoo',
        numberProp: 2077,
        barObject: {
            stringsArrayProp: ['barString1', 'barString2', 'barString3'],
            numbersOrDatesArrayProp: [new Date(), 100500, new Date(2077), 2020],
            functionProp: (flag: boolean) => console.log(!flag),
        }
    },
    {
        stringProp: 'secondFoo',
        numberProp: 2020,
        barObject: {
            stringsArrayProp: ['barString1', 'barString2', 'barString3'],
            numbersOrDatesArrayProp: [new Date(2077), 2020, new Date(), 100500],
            functionProp: (flag: boolean) => console.log(flag),
        }
    },
];

function logObj(fooObject: FooType) {
    console.log(`stringProp -- ${fooObject.stringProp}`);
    console.log(`numberProp -- ${fooObject.numberProp}`)
    console.log(`barObject.stringsArrayProp -- ${fooObject.barObject.stringsArrayProp}`)
    console.log(`barObject.numbersOrDatesArrayProp -- ${fooObject.barObject.numbersOrDatesArrayProp}`)
    console.log(`barObject.functionProp -- ${fooObject.barObject.functionProp(true)}`)
}
 
fooObjects.forEach(logObj);



// ЗАДАЧА № 2 (БЛОК № 2.1).
// Требуется реализовать функцию filter, которая будет принимать
// массив с объектами 3х типов
// наименование типа
// возврщать массив с объектами, которые имеют тип, указанный во втором аргументе

//РЕШЕНИЕ НИЖЕ (проверено):

enum System {
   Linux = 0,
   Window = 1,
   MacOS = 2,
}

type FirstType = {
   prop1: string,
   prop2: boolean,
}

type SecondType = {
   prop1: typeof undefined,
   prop2: () => Date,
}

type ThirdType = {
   prop1: string,
   prop2: boolean,
   prop3: System,
}

const obj1: FirstType = {
   prop1: "Привет, РТФ!",
   prop2: false,
};

const obj2: FirstType = {
   prop1: "Привет, УрФУ!",
   prop2: true,
};

const obj3: FirstType = {
   prop1: "Привет, мир!",
   prop2: true,
};

const obj4: SecondType = {
   prop1: undefined,
   prop2: () => {
       return new Date();
   }
};

const obj5: SecondType = {
   prop1: undefined,
   prop2: () => {
       return new Date(2021, 3, 1);
   }
};

const obj6: ThirdType = {
   prop1: "Cats",
   prop2: true,
   prop3: System.Linux
};

const obj7: ThirdType = {
   prop1: "Dogs",
   prop2: true,
   prop3: System.MacOS
};

const array = [obj1, obj2, obj3, obj4, obj5, obj6, obj7];

function filter(array: Array<FirstType | SecondType | ThirdType>, type: string) {
    return array.filter(elem =>{
        if (type === "SecondType" && elem.prop1 === undefined){
            return elem
        }
        if (type === "ThirdType" &&  Object.keys(elem).length == 3) {
            return elem
        }
        if (type === "FirstType" &&  Object.keys(elem).length === 2 && elem.prop1 !== undefined) {
            return elem
        }
    })
    
}

console.log('first:', filter(array, 'FirstType'));
console.log('second::', filter(array, 'SecondType'));
console.log('third:', filter(array, 'ThirdType'));



// ЗАДАЧА № 3 (БЛОК № 2.1).
// Требуется реализовать функцию add, которая будет иметь 2 сигнатуры
// 1 - принимает 2 аргумента: x, y оба типа string и возвращает тип string
// 2 - принимает 2 аргумента: x, y оба типа number и возвращает тип number
// использовать тип any для типизации параметров запрещено
// функция должна возвращать сумму двух аргументов

// function add(x: string, y: string): string;
// function add(x: number, y: number): number;
// add('20', '21'); //2021
// add(20, 21); //41

//РЕШЕНИЕ НИЖЕ (проверено):

function add(x: string | number, y: string | number): string | number {
    if (typeof(x) === "string" && typeof(y) === "string") {
        return x + y
    } else if (typeof(x) === "number" && typeof(y) === "number") {
        return x + y
    } else {
        throw new Error ("Ошибка в типах аргументов: функция принимает аругменты одного типа (string || number).")
    }
}

console.log(add('20', '21')) //2021
console.log(add(20, 21)) //41
console.log(add('20', 30)); //// Error ("Ошибка в типах аргументов: Функция ...")



// ЗАДАЧА № 4 (БЛОК № 2.1).
// Разобраться и описать в чём заключается разница между IFoo1 и FooType1
// (фактически нужно описать в чём разница между type и interface)

// interface IFoo1 {
//    a: number
//    b: string
// };
//
// type FooType1 = {
//    a: number
//    b: string
// };

//РЕШЕНИЕ НИЖЕ (проверено):

// Отличия, которые я нашел:
// I) interface можно объявить несколько раз, при работе все интерфейсы будут объединены вместе
// мы получим доступ к полям/свойствам от каждого объявленного interface;
// II) type можно объвить только один раз;
// III)  После того как тип объявили, его уже нельзя изменить, интерфейс можно;
// IV) interface это описание структуры без реализации,
// а type это и описание структуры, и реализация.



// ЗАДАЧА № 5 (БЛОК № 2.1).
// Измените объявление функции filterUsers так, чтобы
// в аргумент criteria можно было передавать объект,
// содержащий любое поле или поля объекта User

//РЕШЕНИЕ НИЖЕ (проверено):

interface User {
    type: string;
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: string;
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        type: 'user',
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },

    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },

    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },

    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },

    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];

export function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}
export function isUser(person: Person): person is User {
    return person.type === 'user';
}

export function logPerson(person: Person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(persons: Person[], criteria: Partial<User>): User[] {
    return persons.filter(isUser).filter(function (user) {
            const criteriaKeys = Object.keys(criteria);
            return criteriaKeys.every((fieldName) => {
                return user[fieldName] === criteria[fieldName];
            });
        });
}

console.log('Users of age 23:');

filterUsers(
    persons,
    {
        age: 23
    }
).forEach(logPerson);


