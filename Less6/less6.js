/* const key = "firstName";

const person = {
  [key]: "Alex",
};

person.age = 56;

person["city-name"] = "NN";

person[4] = 4;

// console.log(person.firstName);
// console.log(person["city-name"]);

// console.log(person.age);

person.age = 26;

// console.log(person.age);

// console.log(person.height);
// person.height = 193;
// console.log(person.height);

// delete person.age;
// console.log(person.age);

const sayHello = function () {
  console.log("Привет я ALEX");
};

person.sayHello = sa
person.sayHello = sayHello;

person.sayHello(); */

//практика
console.log("Практика");

const key = "filmName";

const myFavoriteFilm = {
  [key]: "The Social Network",
  releaseDates: "2010",
  directedBy: "Дэвид Финчер",
  country: "США",
  sayNameFilm: function () {
    console.log(`Название: ${myFavoriteFilm.filmName}`)
  }
};

myFavoriteFilm["boxOffice"] = "$224 920 315";

myFavoriteFilm.sayNameFilm();

console.log(myFavoriteFilm);

delete myFavoriteFilm.boxOffice;

console.log(myFavoriteFilm);

/*Практика*/

console.log("Практика 2");

/* Реализовать функцию которая будет определять, в каком регистре записан n 
элемент переданной строки, если в верхнем то вернуть true, в противном случае
вернуть false. */

const register = (str,n) =>{
  if (n-1>str.length)
  {
    return "Ошибка индекса";
  }
  if (str[n-1]===str[n-1].toUpperCase())
  {
    return true;
  }
return false;
}
let stroka = "Hello world";
let n=1;
console.log(register(stroka,n));

/* Реализовать функцию которая заменяет в строке str, все вхождения подстроки
find, на подстроку replace */

let str ="Hello world, hello";
let find = "ello";
let replace_ = "i";

const replacement = (str, find, replace_) => {
  let strNew = str.toString();
  let count = str.split(find).length - 1;
  for (let i=0; i<count; i++)
  {
    strNew = strNew.replace(find,replace_);
  }
  
return strNew;
}

console.log(replacement(str, find, replace_));

/* Реализовать функцию которая будет принимать числовой диапазон в качестве
параметров [min, max] и будет возвращать случайное целое число из данного
диапазона */

const min = 10;
const max = 10000;

const random = (min, max) => {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

console.log(random(min,max));
