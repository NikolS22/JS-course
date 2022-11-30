/* 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), 
surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен 
иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) 
ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника. */

class Worker {
  constructor(name, surName, rate, days) {
    this.name = name;
    this.surName = surName;
    this.rate = rate;
    this.days = days;
  }
  getFullName() {
    return `${this.name} ${this.surName}`;
  }
  getSallary() {
    return `${this.getFullName()} получил ${this.rate * this.days}`;
  }
  //zadacha 3
  getRate() {
    return this.rate;
  }
  setRate(newRate) {
    this.rate = newRate;
  }
  getDays() {
    return this.days;
  }
  setDays(newDays) {
    this.days = newDays;
  }
}

const firstWorker = new Worker("Alex", "Petrov", 500, 20);
const secondWorker = new Worker("Tony", "Ivanov", 700, 25);

console.log(firstWorker.getSallary());
console.log(secondWorker.getSallary());

/* 2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется 
новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) 
ставки rate на количество отработанных дней и на количество работников. */

class Boss extends Worker {
  constructor(name, surName, rate, days, workers) {
    super(name, surName, rate, days);
    this.workers = workers;
  }
  getSallary() {
    return `${this.getFullName()} получил ${
      this.rate * this.days * this.workers
    }`;
  }
}

const firstBoss = new Boss("Oleg", "Boss", 500, 20, 5);

console.log(firstBoss.getSallary());

/* 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days
сделайте и методы-сеттеры и методы-геттеры для их чтения. */

console.log(firstWorker.getDays());
console.log(firstWorker.getRate());

firstWorker.setRate(600);
firstWorker.setDays(10);

console.log(firstWorker.getDays());
console.log(firstWorker.getRate());

/* 4. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром 
принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, 
а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и 
делает заглавной первую букву каждого слова этой строки. */

class MyString {
  constructor() {}
  reverse(str) {
    return str.split('').reverse().join('');
  }
  ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  ucWords(str) {
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
  }
}

const stroka = 'hello big world'
let myStr = new MyString();
console.log(myStr);
console.log(myStr.reverse(stroka));
console.log(myStr.ucFirst(stroka));
console.log(myStr.ucWords(stroka));

/* 5. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail 
параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - 
возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain 
для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона. */

class Validator{
    constructor() {}
    isEmail(str) {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z])/;
        return reg.test(str);
    }
    isDomain(str) {
        const reg = /^([A-Za-z\.])+\.([A-Za-z0-9_\-\.])+\.([A-Za-z])/;
        return reg.test(str);
    }   
    isDate(str) {
        const reg = /^([0-9\.])+\.|-|\/([0-9_\-\.])+\.|-|\/([0-9])/;
        return reg.test(str);
    }   
    isPhone(str) {
      const reg = /^([0-9]){10,12}/;
      return reg.test(str);
  }  
}

const mail = 'hello@big.world'
const dommen = 'hello.big.world'
const day1 = '01-01-01'
const day2 = '01.01.2001'
const phone = '9876543210'
let myVal = new Validator();
//console.log(myVal);
console.log(myVal.isEmail(mail));
console.log(myVal.isDomain(dommen));
console.log(myVal.isDate(day1));
console.log(myVal.isDate(day2));
console.log(myVal.isPhone(phone));

/* 6. Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это 
сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от 
User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод 
getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. 
Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите 
самостоятельно с помощью new Date. */

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    if (new Date().getFullYear() - this.year > 5) {
      console.log(`${this.getFullName()} - выпускник`);
    } else {
      console.log(
        `${this.getFullName()} учится на ${
          new Date().getFullYear() - this.year
        } курсе`
      );
    }
  }
}

/* const firstUser = new User("Alex", "Petrov");
const secondUser = new User("Tony", "Ivanov"); */

const firstStudent = new Student("Alex", "Petrov", '2020');
const secondStudent = new Student("Tony", "Ivanov", '2010');

firstStudent.getCourse();
secondStudent.getCourse();
