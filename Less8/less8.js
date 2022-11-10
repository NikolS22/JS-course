/* const user = { name: "Alex" };

const user2 = Object.assign({}, user, { favoriteColor: "red", city: "London" });
const user2 = { ...user, favoriteColor: "red", city: "London" };

user.age = 18;
user2.name = "Ivan";

console.log(user);
console.log(user2);

const arr = [1, 2, 3];

const arr2 = [...arr];

arr.push(4);

console.log(arr);
console.log(arr2);

const arr = [1, 2, 3, 4];

const arrPush = (arr) => {
  const arrNew = [...arr];
  arrNew.push(5);
};

console.log(arr, "one");
arrPush(arr);
console.log(arr, "two");

const user = { name: "Alex", age: 18 };

const user2 = JSON.parse(JSON.stringify(user));

user.name = "Ivan";
user2.age = 20;

console.log(user);
console.log(user2); */

/* Создайте объект и скопируйте данный объект с помощью: 
Object.assign() и spread оператора. Изменить любое свойство в копии 
объекта, и проверить не изменился ли исходный. */

let object1 = {par1: "1"};
console.log(object1);

let object2 = Object.assign({},object1);
let object3 = {... object1};

object2.par2="2";
object3.par2="2";
object3.par3="3";

console.log(object1);
console.log(object2);
console.log(object3);

/* Написать функцию которая будет принимать n-ое количество
аргументов, в качестве результата функция будет возвращать сумму 
всех четных элементов. Для решения использовать цикл for (... of …).*/

const sumArg = (...arg) => {
  let sum = 0;
  for (variable of arg) {
    if (variable % 2 === 0) {
      sum += variable;
    }
  }
  return sum;
};

console.log(sumArg(1,2,3,4,4));

/* Написать функцию которая будет принимать два массива, и в качестве
результата будет возвращать только те значения которые есть и
в первом и во втором массиве */

const mas1 = [1,2,3,4,5,3];
const mas2 = [3,4,5,6,7,1,2];

const identOb = (mas1, mas2) => {
  if (mas1.length > mas2.length) {
    for (variable of mas1) {
      if (mas2.includes(variable)) {
        console.log(variable);
      }
    }
  } else {
    for (variable of mas2) {
      if (mas1.includes(variable)) {
        console.log(variable);
      }
    }
  }
};

identOb(mas1,mas2);

