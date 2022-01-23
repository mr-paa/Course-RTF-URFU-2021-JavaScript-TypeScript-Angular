//===15 ЗАДАЧ по JavaScript (БЛОК №1)===



// ЗАДАЧА № 1 (БЛОК № 1.1).
// Сумма цифр числа.
// Требуется написать функцию numeralSum, которая
// принимает число, требуется вернуть сумму цифр этого числа

//@param { number }  // исходное число
//@return { number } // Сумма цифр числа

//РЕШЕНИЕ НИЖЕ (проверено):

function numeralSum(number) {
    let a = String(number).replace(/[-,.,,/]/gi, '')
    let sum = 0

    for (let i = 0; i < a.length; i++) {
        sum += Number(a[i])
    }
    if (number == Infinity) {
        sum = Infinity
    }
    if (isNaN(number)) {
        sum = 0
    }
    return console.log(sum)
}



// ЗАДАЧА № 2 (БЛОК № 1.1)
//Форматтер для ФИО.
//Требуется написать функцию fioFormat, которая
//принимает строку, в которой через пробел написаны три слова: имя, фамилия и отчество,
//требуется вернуть новую строку формата Фамилия И.О. где И - имя и О - отчество

//@param {string} inputFio - Строка с именем, фамилией и отчеством
//@return {string} Строка формата Фамилия И.О.

//РЕШЕНИЕ НИЖЕ (проверено):

function fioFormat(inputFio) {
    let famil = ""
    let name = ""
    let otchestvo = ""
    for (let i = 0; i < inputFio.length; i++) {
        name += inputFio[i]
        if (inputFio[i] == " ") {
            for (let j = i + 1; j < inputFio.length; j++) {
                if (inputFio[j] != " ") {
                    famil += inputFio[j]
                } else {
                    for (let x = j + 1; x < inputFio.length; x++) {
                        otchestvo += inputFio[x]
                    }
                    break
                }
            }
            break
        }
    }

    let itogo = famil + " " + name[0] + "." + otchestvo[0] + "."
    return console.log(itogo)
}



// ЗАДАЧА № 3 (БЛОК № 1.1) 
// Узнать возраст.
// Требуется написать функцию countAge, которая
// принимает число - год рождения,
// требуется вернуть число - количество лет с года рождения на данный момент.
// Если введенный год рождения некорректный, то требуется возбуждать ошибку

// @param {number} birthYear - Год рождения
// @return {number} Количество лет

//РЕШЕНИЕ НИЖЕ (проверено):

function countAge(birthYear) {
    let presentYear = new Date().getFullYear()
    let age = presentYear - birthYear
    if (presentYear >= birthYear && birthYear >= 0 && Number.isInteger(birthYear) == true) {
        return console.log(age)
    }
}



// ЗАДАЧА № 4 (БЛОК № 1.1)
// Среднее арифмитическое чисел.
//Требуется написать функцию average, которая
//принимает строку, в которой через запятую написаны числа,
//требуется вернуть среднее арифмитическое перечисленных чисел

//@param {string} numbersString - Строка с числами
//@return {number} Среднее арифмитическое чисел в строке

//РЕШЕНИЕ НИЖЕ (проверено):

function average(numbersString) {
    let array = numbersString.split(",")
    let a = array.reduce((a, b, c) => {
        return Number(a) + Number(b);
    })
    console.log(a / array.length)
}



// ЗАДАЧА № 5 (БЛОК № 1.1)
// Развёртка объекта.
// Требуется написать функцию makePairs, которая
// принимает любой объект,
// требуется вернуть массив вида [[key, value], [key, value], ...],
// где элементы key - ключи исходного объекта,
// value - значение, которое содержится в поле key исходного объекта

// @param {object} object - Исходный объект
// @return {Array} Массив вида [[key, value], [key, value], ...]

//РЕШЕНИЕ НИЖЕ (проверено):

let obj = {
    a: 5,
    b: 3
}

function makePairs(object) {
    console.log("etries=", Object.entries(object))
}

makePairs(obj)