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


