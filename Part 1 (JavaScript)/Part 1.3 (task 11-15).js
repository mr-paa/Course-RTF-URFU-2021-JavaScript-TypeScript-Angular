// ЗАДАЧА № 11 (БЛОК № 1.3 "Органайзер")
// Класс Time
// Требуется написать класс времени - Time, который содержит:
// 1.1. Поле с часами — hours (number)
// 1.2. Поле с минутами — minutes (number)
// 1.3. Прототип класса должен содержать метод сравнения isEarlier,
//  	который принимает объект класса Time и возвращает true,
//	    если переденное значение времени находится позже того времени,
//	    которое содержится в экземпляре объекта (Time2), у которого вызван метод.
// 1.4. Прототип класса должен содержать метод сравнения isLater,
//	    который принимает объект класса Time и возвращает true,
//	    если переденное значение времени находится раньше того,
//	    которое содержится в экземпляре объекта, у которого вызван метод.

// @constructor
// @this {Time}
// @param {number} hours - Час
// @param {number} minutes - Минуты

// РЕШЕНИЕ НИЖЕ (проверено):

function time(hours, minutes) {};

class Time {
    constructor(hours, minutes) {
        if ((hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59)) {
            this.hours = hours
            this.minutes = minutes
        } else {
            throw new Error('Время переданно некорректно')
        }
    }

    isEarlier(time) {
        if (time.hours > this.hours) {
            return console.log(true)
        } else if ((time.hours == this.hours) && time.minutes > this.minutes) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    }

    isLater(time) {
        if (time.hours < this.hours) {
            return console.log(true)
        } else if ((time.hours == this.hours) && time.minutes < this.minutes) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    }

}

let bbb = new Time(20, 21)
console.log(bbb)

let firstTime = new Time(20, 21);
let secondTime = new Time(21, 21);
firstTime.isEarlier(secondTime) // true
secondTime.isEarlier(firstTime) // false

firstTime = new Time(14, 30);
secondTime = new Time(14, 35);
firstTime.isEarlier(secondTime) // true
secondTime.isEarlier(firstTime) // false

let FirstTime = new Time(20, 21);
let SecondTime = new Time(21, 21);
SecondTime.isLater(FirstTime) // true
FirstTime.isLater(SecondTime) // false

FirstTime = new Time(14, 30);
SecondTime = new Time(14, 35);
SecondTime.isLater(FirstTime) // true
FirstTime.isLater(SecondTime) // false
    //console.log()



// ЗАДАЧА № 12 (БЛОК № 1.3 "Органайзер")
// Класс Meeting
// Требуется написать класс встречи - Meeting, который содержит:
//	2.1. Поле c датой встречи (объект класса Date)
//	2.2. Поле — время начала встречи (объект класса Time)
//	2.3. Поле — время конца встречи (объект класса Time)
//	2.4. Прототип класса должен содержать метод isMeetingInTimeRange, принимающий два аргумента:
//		Начало временного промежутка — объект класса Time
//		Конец временного промежутка — объект класса Time
//		Должен возвращать true, если встреча, у которой был вызван метод,
//		пересекает переданный временной промежутук
//	2.5. Время начала встречи должно быть больше времени конца
//	2.6. Встреча может быть назначана только в промежутке между 08:00 до 19:00

// @constructor
// @this {Meeting}
// @param {Date} meetingDate - Дата встречи
// @param {Time} startTime - Время начала встречи
// @param {Time} endTime - Время конца встречи
// function Meeting(meetingDate, startTime, endTime) {}

// РЕШЕНИЕ НИЖЕ (проверено):

class Time {
    constructor(hours, minutes) {
        if ((hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59)) {
            this.hours = hours
            this.minutes = minutes
        } else {
            throw new Error('Время переданно некорректно')
        }
    }
    isEarlier(time) {
        if (time.hours > this.hours) {
            return console.log(true)
        } else if ((time.hours == this.hours) && time.minutes > this.minutes) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    }

    isLater(time) {
        if (time.hours < this.hours) {
            return console.log(true)
        } else if ((time.hours == this.hours) && time.minutes < this.minutes) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    }

}

class Meeting {
    constructor(meetingDate, startTime, endTime) {
        if (startTime.hours > endTime.hours ||
            startTime.hours === endTime.hours &&
            startTime.minutes >= endTime.minutes) {
            throw new Error('Некорретный ввод времени: Начало встречи не может быть позже окончания.')

        } else if (startTime.hours < 8 ||
            endTime.hours >= 19 &&
            endTime.minutes !== 0) {
            throw new Error('Некорретный ввод времени. Встреча может быть назначена с 8:00 до 19:00.')

        } else {
            this.startTime = startTime
            this.endTime = endTime
            this.meetingDate = meetingDate

        }
    }

    isMeetingInTimeRange(start, end) {
        if (this.startTime.hours <= end.hours && // 16:15 - 16:40
            this.endTime.hours >= start.hours) { // 16:00 - 17:00
            if (this.endTime.minutes >= start.minutes) {
                return console.log(true)

            } else {
                return console.log(false)
            }
        } else {
            return console.log(false)

        }

    }
}

let meetingDate = new Date(2021, 5, 3);
let startTime = new Time(16, 15);
let endTime = new Time(16, 40);
let correctMeeting = new Meeting(meetingDate, startTime, endTime);

console.log(correctMeeting.meetingDate)
console.log(correctMeeting.startTime)
console.log(correctMeeting.endTime)
console.log(correctMeeting)

correctMeeting.isMeetingInTimeRange(new Time(16, 00), new Time(17, 00))
correctMeeting.isMeetingInTimeRange(new Time(16, 15), new Time(17, 00))
correctMeeting.isMeetingInTimeRange(new Time(16, 15), new Time(16, 20))
correctMeeting.isMeetingInTimeRange(new Time(15, 15), new Time(15, 20)) //false
correctMeeting.isMeetingInTimeRange(new Time(15, 15), new Time(16, 20))



// ЗАДАЧА № 13 (БЛОК № 1.3 "Органайзер")
// Класс Vacation
// Требуется написать класс отпуска - Vacation, который содержит:
//	3.1. Дата начала (объект класса Date)
//	3.2. Дата окончания (объект класса Time)
//	3.3. Прототип класса должен содержать метод isDateInVacation, принимающий один аргумент — дату.
//	Должен возвращать true, если переданная дата, входит в промежуток отпуска.
//	3.4. Дата окончания отпуска должна быть позже даты начала

// @constructor
// @this {Vacation}
// @param {Date} vacationStartDate - Дата начала отпуска
// @param {Date} vacationEndDate - Время конца отпуска

// РЕШЕНИЕ НИЖЕ (проверено)

class Vacation {
    constructor(vacationStartDate, vacationEndDate) {
        if (+vacationEndDate > +vacationStartDate) {
            this.vacationStartDate = vacationStartDate
            this.vacationEndDate = vacationEndDate
        } else {
            throw new Error('Время переданно некорректно: конец отпуска должен быть позже его начала')
        }
    }
    isDateInVacation(date) { // 03.06.2021 - 15.06.2021 
        if (+date <= +this.vacationEndDate && +date >= +this.vacationStartDate) {
            return console.log(true)
        } else {
            return console.log(false) // 08.06.2021
        }
    }

}

let vacationStartDate = new Date(2021, 5, 3);
let vacationEndDate = new Date(2021, 5, 15);
let correctVacation = new Vacation(vacationStartDate, vacationEndDate);

console.log(correctVacation)

correctVacation.isDateInVacation(new Date(2021, 5, 8)) +
    correctVacation.isDateInVacation(new Date(2021, 5, 15))
correctVacation.isDateInVacation(new Date(2021, 5, 3))
correctVacation.isDateInVacation(new Date(2020, 5, 3))


// ЗАДАЧА № 14 (БЛОК № 1.3 "Органайзер")
// Класс Organaizer
// Требуется написать класс органайзера - Organaizer, который содержит:
//	4.1. Поле встреч — meetings (массив объектов класса Meeting)
//	4.2. Поле отпусков — vacations (массив объектов класса Vacation)

// @constructor
// @this {Organaizer}
// @param {Array<Meeting>} meetings - Массив встреч
// @param {Array<Vacation>} vacations - Массив отпусков

// РЕШЕНИЕ НИЖЕ (проверено):

class Time {
    constructor(hours, minutes) {
        if ((hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59)) {
            this.hours = hours
            this.minutes = minutes
        } else {
            throw new Error('Время переданно некорректно')
        }
    }

    isEarlier(time) {
        if (time.hours > this.hours) {
            return console.log(true)
        } else if ((time.hours == this.hours) && time.minutes > this.minutes) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    }

    isLater(time) {
        if (time.hours < this.hours) {
            return console.log(true)
        } else if ((time.hours == this.hours) && time.minutes < this.minutes) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    }

}
class Meeting {
    constructor(meetingDate, startTime, endTime) {
        if (startTime.hours > endTime.hours ||
            startTime.hours === endTime.hours &&
            startTime.minutes >= endTime.minutes) {
            throw new Error('Некорретный ввод времени: Начало встречи не может быть позже окончания.')

        } else if (startTime.hours < 8 ||
            endTime.hours >= 19 &&
            endTime.minutes !== 0) {
            throw new Error('Некорретный ввод времени. Встреча может быть назначена с 8:00 до 19:00.')

        } else {
            this.startTime = startTime
            this.endTime = endTime
            this.meetingDate = meetingDate

        }
    }

    isMeetingInTimeRange(start, end) {
        if (this.startTime.hours <= end.hours && // 16:15 - 16:40
            this.endTime.hours >= start.hours) { // 16:00 - 17:00
            if (this.endTime.minutes >= start.minutes) {
                return console.log(true)

            } else {
                return console.log(false)
            }
        } else {
            return console.log(false)

        }

    }
}

let meetingDate = new Date(2021, 5, 3);
let startTime = new Time(16, 15);
let endTime = new Time(16, 40);
let correctMeeting = new Meeting(meetingDate, startTime, endTime);
console.log(correctMeeting)


class Vacation {
    constructor(vacationStartDate, vacationEndDate) {
        if (+vacationEndDate > +vacationStartDate) {
            this.vacationStartDate = vacationStartDate
            this.vacationEndDate = vacationEndDate
        } else {
            throw new Error('Время переданно некорректно: конец отпуска должен быть позже его начала')
        }
    }
    isDateInVacation(date) { // 03.06.2021 - 15.06.2021 
        if (+date <= +this.vacationEndDate && +date >= +this.vacationStartDate) {
            return console.log(true)
        } else {
            return console.log(false) // 08.06.2021
        }
    }

}
let vacationStartDate = new Date(2021, 5, 3);
let vacationEndDate = new Date(2021, 5, 15);
let correctVacation = new Vacation(vacationStartDate, vacationEndDate);
console.log(correctVacation)


class Organaizer {
    constructor(meetings, vacations) {
        this.meetings = meetings
        this.vacations = vacations
    }
}
const organaizer = new Organaizer([], []);
console.log(organaizer)



// ЗАДАЧА № 15 (БЛОК № 1.3 "Органайзер")
// Расширить прототип класса Organaizer следующими методами:
//	5.1. addMeeting, принимающий — объект класса Meeting.
//	Результатом работы должно быть true и добавление объекта встречи в массив встреч,
//	если встреча успешно добавлена в органайзер и false в ином случае.
//	Встреча может быть добавлена, если:
//		В день встречи в органайзере нет отпуска
//		Время встречи не пересекается с какой-нибудь другой встречей в органайзере
// 	5.2. addVacation, принимающий — объект класса Vacation.
//	Результатом работы должно быть true и добавление объекта отпуска в массив отпусков,
//	если отпуск успешно добавлена в органайзер и false в ином случае.
//	Отпуск может быть добавлен, если:
//		Отпуск не попадает в промежуток другого отпуска
//		В промежуток отпуска не назначено никаких встреч

// РЕШЕНИЕ НИЖЕ (проверено):

class Time {
    constructor(hours, minutes) {
        if ((hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59)) {
            this.hours = hours
            this.minutes = minutes
        } else {
            throw new Error('Время переданно некорректно')
        }
    }
    isEarlier(time) {
        if (time.hours > this.hours) {
            return console.log(true)
        } else if ((time.hours == this.hours) && time.minutes > this.minutes) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    }

    isLater(time) {
        if (time.hours < this.hours) {
            return console.log(true)
        } else if ((time.hours == this.hours) && time.minutes < this.minutes) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    }

}

class Meeting {
    constructor(meetingDate, startTime, endTime) {
        if (startTime.hours > endTime.hours ||
            startTime.hours === endTime.hours &&
            startTime.minutes >= endTime.minutes) {
            throw new Error('Некорретный ввод времени: Начало встречи не может быть позже окончания.')
        } else if (startTime.hours < 8 ||
            endTime.hours >= 19 &&
            endTime.minutes !== 0) {
            throw new Error('Некорретный ввод времени. Встреча может быть назначена с 8:00 до 19:00.')
        } else {
            this.startTime = startTime
            this.endTime = endTime
            this.meetingDate = meetingDate
        }
    }
    isMeetingInTimeRange(start, end) {
        if (this.startTime.hours <= end.hours && // 16:15 - 16:40
            this.endTime.hours >= start.hours) { // 16:00 - 17:00
            if (this.endTime.minutes >= start.minutes) {
                return true

            } else {
                return false
            }
        } else {
            return false

        }

    }
}

class Vacation {
    constructor(vacationStartDate, vacationEndDate) {
        if (+vacationEndDate > +vacationStartDate) {
            this.vacationStartDate = vacationStartDate
            this.vacationEndDate = vacationEndDate
        } else {
            throw new Error('Время переданно некорректно: конец отпуска должен быть позже его начала')
        }
    }
    isDateInVacation(date) { // 03.06.2021 - 15.06.2021 
        if (+date <= +this.vacationEndDate && +date >= +this.vacationStartDate) {
            return true
        } else {
            return false // 08.06.2021
        }
    }

}

class Organaizer {
    constructor(meetings, vacations) {
        this.meetings = meetings
        this.vacations = vacations
    }

    addMeeting(meetin) {
        for (let i of this.meetings) {
            if (+i.meetingDate == +meetin.meetingDate &&
                meetin.isMeetingInTimeRange(i.startTime, i.endTime) == true) {
                return console.log(false)
            }
        }
        for (let i of this.vacations) {
            if (i.isDateInVacation(meetin.meetingDate) == true) {
                return console.log(false)
            }
        }
        this.meetings.push(meetin)
        return console.log(true)
    }

    addVacation(vacat) {
        for (let i of this.meetings) {
            if (vacat.isDateInVacation(i.meetingDate) == true) {
                return console.log(false)
            }
        }
        for (let i of this.vacations) {
            if ((i.isDateInVacation(vacat.vacationStartDate) == true) ||
                (i.isDateInVacation(vacat.vacationEndDate) == true)) {
                return console.log(false)
            }
        }
        this.vacations.push(vacat)
        return console.log(true)
    }
}


const organaizer = new Organaizer([], []);

const firstMeeting = new Meeting(new Date(2021, 3, 12), new Time(16, 0), new Time(17, 0));
const secondMeeting = new Meeting(new Date(2021, 3, 12), new Time(13, 0), new Time(14, 0));
const thirdMeeting = new Meeting(new Date(2021, 3, 14), new Time(16, 0), new Time(17, 0));
organaizer.addMeeting(firstMeeting) // true
organaizer.addMeeting(secondMeeting) // true
organaizer.addMeeting(thirdMeeting) // true


const firstVacation = new Vacation(new Date(2021, 4, 1), new Date(2021, 4, 15));
const secondVacation = new Vacation(new Date(2021, 5, 1), new Date(2021, 5, 15));
const thirdVacation = new Vacation(new Date(2021, 6, 1), new Date(2021, 6, 15));
organaizer.addVacation(firstVacation) // true
organaizer.addVacation(secondVacation) // true
organaizer.addVacation(thirdVacation) // true


const firstUncorrectMeeting = new Meeting(new Date(2021, 3, 12), new Time(15, 0), new Time(16, 15));
const secondUncorrectMeeting = new Meeting(new Date(2021, 3, 12), new Time(13, 59), new Time(16, 0));
const thirdUncorrectMeeting = new Meeting(new Date(2021, 4, 5), new Time(16, 0), new Time(17, 0));

organaizer.addMeeting(firstUncorrectMeeting) // toBe(false);
organaizer.addMeeting(secondUncorrectMeeting) // toBe(false);
organaizer.addMeeting(thirdUncorrectMeeting) // toBe(false);

const firstUncorrectVacation = new Vacation(new Date(2021, 3, 15), new Date(2021, 4, 12));
const secondUncorrectVacation = new Vacation(new Date(2021, 5, 12), new Date(2021, 5, 20));
const thirdUncorrectVacation = new Vacation(new Date(2021, 3, 10), new Date(2021, 3, 13));
organaizer.addVacation(firstUncorrectVacation) // toBe(false);
organaizer.addVacation(secondUncorrectVacation) // toBe(false);
organaizer.addVacation(thirdUncorrectVacation) // toBe(false);
console.log("митинги", organaizer.meetings)
console.log("отпуска", organaizer.vacations)