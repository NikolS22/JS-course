/* function showMess(message) {
    console.log(message);
}
showMess("Hi!");

function getName() {
   const userName = "Alex";
   return userName;
 }

 function getUserName() {
   console.log(userName);
 }

 console.log(getName());
 console.log(getUserName()); */

/*  Написать функцию, которая будет принимать имя пользователя, и выводить
 строку с приветствием данного пользователя, если имени пользователя нет, 
 выводить приветствие гостя. */

let user_Name = "Alex";

function sayHi(user_Name = "guest") {
  console.log(`Hi, ${user_Name}!`);
}
sayHi(user_Name);

/* Написать функцию, которая в качестве первого параметра будет принимать
численное значение, а в качестве второго параметра будет принимать степень, в
которую надо возвести первый аргумент. По умолчанию, второй аргумент
единица */

function pow_(par_1, par_2 = 1) {
  return (s = par_1 ** par_2);
  //return (Math.pow(par_1,par_2));
}

console.log(pow_(3, 2));

/* Написать функцию, которая будет принимать в качестве входного параметра
массив любых, целых чисел, и будет возвращать среднее арифметическое
значение данного массива*.  */

const arr = [1, 2, 3, 4, 5];

function srAr(arr = "") {
  if (Array.isArray(arr) === true) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return (sum /= arr.length);
  } else {
    console.log("Нет массива");
    return;
  }
}

console.log(srAr(arr));

const sayHello = function (name) {
  console.log(`Hello ${name}`);
};

const funcExample = function (callback) {
  for (let i = 0; i < 10000000000; i += 1) {}
  callback("Alex");
};
sayHello("Ivan");
//funcExample("");

const getName = (name) => `Name-${name}`;

console.log(getName("Alex"));
console.log(getName("Ivan"));

const getNameTwo = (name) => {
  return `Name-${name}`;
};

/*Практика*/

console.log("Практика задача 1");

/* Напишите стрелочную функцию которая будет выводить переданную строку в
консоль n раз*/

const printStr = (str, n) => {
  for (let i = 0; i < n; i++) {
    console.log(str);
  }
};

printStr("Задача 1", 3);

/* Напишите стрелочную функцию, которая будет принимать в качестве параметра
букву и если она гласная, функция будет возвращать true, в противном случае
false .*/

console.log("Практика задача 2");

const isVowel = (letter) => {
  const vowels = "аеёиоуыэюя";
  let answer = false;
  for (let i = 0; i < 10; i++) {
    if (letter == vowels[i]) {
      answer = true;
      break;
    }
  }
  console.log(answer);
};

const isVowel_2 = (letter) => {
  if (
    letter == "а" ||
    letter == "е" ||
    letter == "ё" ||
    letter == "и" ||
    letter == "о" ||
    letter == "у" ||
    letter == "ы" ||
    letter == "э" ||
    letter == "ю" ||
    letter == "я"
  ) {
    console.log(true);
  } else {console.log(false);}
};

isVowel("а");
isVowel_2("а");

/* Напишите стрелочную функцию, которая будет возвращать true если строка
является палиндромом и false в противном случае*. */

console.log("Практика задача 3");

const palindrome = (stroka) =>
  stroka === stroka.split("").reverse().join("")
    ? console.log(true)
    : console.log(false);

const palindrome_2 = (stroka) => {
  let newStroka = "";
  for (let i = stroka.length - 1; i >= 0; i--) {
    newStroka += stroka[i];
  }
  if (stroka === newStroka) {
    console.log(true);
  } else {
    console.log(false);
  }
};

palindrome("шалаш");
palindrome_2("шалаш");
