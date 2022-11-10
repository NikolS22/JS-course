/* 1. Используя метод map() напишите код, который получает из массива
строк новый массив, содержащий их длины. */

const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const varLength = arr => arr.map((el)=>el.length);

console.log(varLength(arr));

/* 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17,
19]. Использую метод reduce() напишите функцию currentSums(numbers), 
которая возвращает новый массив из такого же числа элементов, 
в котором на каждой позиции будет находиться сумма элементов массива 
numbers до этой позиции включительно. */

const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

const currentSums = (numbers) => {
  let result = [];
  numbers.reduce((pre, cur, ind) => result[ind] = pre + cur, 0);
  return result;
};  

console.log(currentSums(numbers));

/* 3. Напишите код, который получает из массива чисел новый массив, 
содержащий пары чисел, которые в сумме должны быть равны семи: (0:7),
(1:6) и т.д. */

const arr_1 = [0, 2, 3, 4, 5, 6, 1, 7, 11, 1, 6, -5, 12];

const parSeven = (arr_1) => {
  let array = [];
  for (let i = 0; i < arr_1.length; i++) {
    for (let y = i + 1; y < arr_1.length; y++) {
      if (arr_1[i] + arr_1[y] === 7) {
        if (!array.includes(`(${arr_1[i]}:${arr_1[y]})`)){
        array.push(`(${arr_1[i]}:${arr_1[y]})`);}
      }
    }
  }
  return array;
};

console.log(parSeven(arr_1));


/* 4.	Напишите код, создающий массив, который будет состоять из 
первых букв слов строки str. */

const str = "Hello big world";

const theFirstLettOfStr = str => str.split(' ').map((el)=>el.slice(0,1)); 

console.log(theFirstLettOfStr(str));

/* 5. Напишите код, создащий массив, который будет состоять из строк, 
состоящих из предыдущего, текущего и следующего символа строки str. */

const massThreeLet = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.substring(i-1,i+2));
  }
  return arr;
};

console.log(massThreeLet(str));

/* 6. Напишите код, преобразующий массив цифр, которые располагаются 
неупорядоченно, в массив цифр расположенных по убыванию их значений. */

//сортировка по убыванию
//console.log(arr_1);

const sortUb = (arr) => arr.sort((a, b) => b - a);

console.log(sortUb(arr_1));

/* 7.	Напишите код, объединяющий три массива цифр, и располагающий 
цифры, в полученном массиве, в порядке убывания их значений через 
пробел. */

const a = [1, 2, 3],
  b = [4, 5, 6],
  c = [7, 8, 9];

const getArr = (a, b, c) => {
  let arr = a.concat(b, c);
  arr.sort((a, b) => b - a);
  return "[" + arr.join(" ") + "]";
};
console.log(getArr(a, c, b));

/* 8.	Дан двухмерный массив с числами, например
[[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. 
Массив, конечно же, может быть произвольным. */

const arr_2 = [[1, 2, 3], [4, 5], [6]];

const sumArr2 = (arr) => arr.toString().split(',').map((el)=>+el).reduce((pre, cur) => pre + cur);

console.log(sumArr2(arr_2));

/* 9.	Дан массив с числами. Не используя метода reverse переверните
его элементы в обратном порядке. */

//console.log(arr_1);

const hendReverse = (arr) => {
  let result = [];
  for (i=arr.length-1; i>=0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(hendReverse(arr_1));

/* 10. Дан массив с числами. Узнайте сколько элементов с начала 
массива надо сложить, чтобы в сумме получилось больше 10-ти. */

const arr_3 = [0, 7, 1, 4, 7, 9];

const sumTen = arr => {
  let k =0;
  let sum = 0;
  while (sum<11) {
    sum+=arr[k];
    k++;
  }
  return k;
}

console.log(sumTen(arr_3));

/* 11. Напишите функцию arrayFill, которая будет заполнять массив
заданными значениями. Первым параметром функция принимает значение, 
которым заполнять массив, а вторым - сколько элементов должно быть 
в массиве. Пример: arrayFill('x', 5) сделает массив 
['x', 'x', 'x', 'x', 'x']. */

const arrayFill = (el, kol) => {
  let arr = [];
  for (let i=0; i<kol; i++) {
    arr.push(el);
  }
  return arr;
}

console.log(arrayFill('x', 5));

