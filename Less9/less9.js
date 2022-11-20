/* console.log(this);

var TEST = 'TEST';
console.log(this.TEST); */

/* function test() {
    console.log(this);
}

test(); */

/* console.log(globalThis); */

/* Создать объект который будет описывать любой населенный пункт
(на ваш выбор). Объект должен содержать свойства описывающие: 
название и численность. Так же объект должен содержать два метода: 
первый должен возвращать название города, а второй должен возвращать 
численность. 

*Дополнительно, добавить метод, который будет устанавливать 
новое значение для выбранного свойства из объекта 
описывающего город */


let city = {
    name: "NN", 
    population: "1,2M",
    getName: function () {
        console.log(this.name);
        return this.name;
    },
    getPopul: function () {
        console.log(this.population);
        return this.population;
    },
    changePopul: function (a) {
        this.population = a;
    },
    setAnyValue: function (key,value) {
        this[key] = value;
    }
};

city.getName();
city.getPopul();
city.changePopul('1.3m');
city.getPopul();

city.setAnyValue('name','nn')
city.getName();
city.setAnyValue("country", "rf");
console.log(city);

/* Создайте второй объект описывающий город (первый возьмите из решения задачи №1). Второй объект должен
содержать только свойства названия и численность.
    Используя метод call() / apply() вызовите методы объекта первого города в контексте объекта второго города.
    Используя метод bind(), изменить свойства объекта второго города на произвольные значения. */

let city2 = {
  name: "Azamas",
  population: "102th",
};

city.getName.call(city2)
city.getPopul.apply(city2)

const bound = city.setAnyValue.bind(city2)

bound("country", "rf");

console.log(city2);

/* Используя замыкание написать функцию которая будет вычислять объём параллелепипеда с высотой 10. */

const parallelepipedVolume = (a) => (b,c) => a*b*c;

/*
const cubeValue = () => {
    let a = 10;
    return (b, c) => {
        return a * b * c;
   };
 };

или

const cubeValue = (a) => {
    return (b, c) => {
        return a * b * c;
   };
 };

const first = cubeValue(10);
console.log(first(10, 10)); */

const first = parallelepipedVolume(10);
console.log(first(10,10));

/* Используя каррирование написать функцию которая будет вычислять объём параллелепипеда. */

const paralVolume = (a,b,c) => a*b*c;

console.log(paralVolume(1,3,3));

const paralVolumeCary = (a) => (b) => (c) => a*b*c;

console.log(paralVolumeCary(1)(3)(3));

const twoArgs = paralVolumeCary(1)(3);

console.log(twoArgs(3));

