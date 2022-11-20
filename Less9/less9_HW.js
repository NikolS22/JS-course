/* 1. Что выведет функция? */

function f() {
 //alert(this);
// console.log(this);
}

let user = {
 g: f.bind(null),
};

user.g();

//[object Window]


/* 2.	Можем ли мы изменить this дополнительным связыванием? */

function f() {
 //alert(this.name);
 console.log(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();

//нет, можно сделать новую привязку, но нельзя изменить существующую.

/* 3.	В свойство функции записано значение. Изменится ли оно после применения bind? */

function sayHi() {
 alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
 name: "Вася" //тут нет test
});

//alert( bound.test );
console.log(bound.test);

//undefined, результатом работы bind является другой объект. У него уже нет свойства test.

/* 4.	Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
Однако, его вызов приводит к ошибке. Почему? */
/* 
function askPassword(ok, fail) {
 let password = prompt("Password?", '');
 if (password == "rockstar") ok();
 else fail();
} */

let user1 = {
 name: 'Вася',

 loginOk() {
   alert(`${this.name} logged in`);
 },

 loginFail() {
   alert(`${this.name} failed to log in`);
 },

};

//askPassword(user1.loginOk, user1.loginFail); //не выводит имя вася в сообщении

//askPassword(user1.loginOk.bind(user1), user1.loginFail.bind(user1)); 

/* 5.	Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – 
user.login(true/false). Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла 
вызывать функцию user.login(true) как ok и функцию user.login(false) как fail? */

/* function askPassword(ok, fail) {
 let password = prompt("Password?", '');
 if (password == "rockstar") ok();
 else fail();
}

let user2 = {
 name: 'John',

 login(result) {
   alert( this.name + (result ? ' logged in' : ' failed to log in') );
 }
};

askPassword(user2.login.bind(user2, true), user2.login.bind(user2, false)); */

/* 6.	Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда 
указывал на value. Eсть функция const sum = (a, b, c) => a + b + c, которая складывает три числа
из переменной elem.*/

const elem = {value: 'Привет'}

function func(surname, name) {
//alert(this.value + ', ' + surname + ' ' + name);
console.log(this.value + ', ' + surname + ' ' + name);
}

const func1 = func.bind(elem) //Тут напишите конструкцию с bind()


func1('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func1('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

//func.bind(elem)("Иванов", "Иван");
//func.call(elem, "Петров", "Петр");


/* 7.	Есть функция которая складывает три числа.Выполните каррирование.*/

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

const sum = (a, b, c) => a + b + c;

let curriedSum = curry(sum);

function curriedSum2 (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
} 
  
console.log(curriedSum(1)(2)(3));
console.log(curriedSum2(1)(2)(3));

/* 8. Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение 
и значение завершения. Таймер движется назад.При достижении точки завершения в консоль выводится значение 
таймера и сообщение о завершении работы таймера. */




