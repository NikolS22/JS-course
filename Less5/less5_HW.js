/* 1. Сделайте функцию, которая возвращает квадрат числа. Число передается 
параметром. */

const sqrt = (n) => n ** 2;

console.log(sqrt(9));

/* 2. Сделайте функцию, которая возвращает сумму двух чисел. */

const sum = (a, b) => a + b;

console.log(sum(3, 5));

/* 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. */

const drob = (a, b, c) => (a - b) / c;

console.log(drob(16, 4, 3));

/* 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. */

const dayOfTheWeek = (n) => {
  switch (n) {
    case 1:
      console.log("Понедельник");
      break;
    case 2:
      console.log("Вторник");
      break;
    case 3:
      console.log("Среда");
      break;
    case 4:
      console.log("Четверг");
      break;
    case 5:
      console.log("Пятница");
      break;
    case 6:
      console.log("Суббота");
      break;
    case 5:
      console.log("Воскресенье");
      break;
    default:
      console.log("Введите число от 1 до 7");
      break;
  }
};

dayOfTheWeek(3);

/* 5. Сделайте функцию, которая параметрами принимает 2 числа. 
Если эти числа равны - пусть функция вернет true, а если не равны - false. */

const isEquals = (a, b) => (a === b ? true : false);

console.log(isEquals(3, 3));

/* 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
больше 10 - пусть вернет true, а если нет то - false. */

const isMoreTen = (a, b) => (a + b > 10 ? true : false);

console.log(isMoreTen(1, 10));

/* 7. Сделайте функцию, которая параметром принимает число и проверяет - 
отрицательное оно или нет. Если отрицательное - пусть функция вернет true, 
а если нет - false. */

const isANegativeNumber = (n) => (n < 0 ? true : false);

console.log(isANegativeNumber(-5));

/* 8. Сделайте функцию isNumberInRange, которая параметром принимает число 
и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция 
возвращает true, если не так - false. */

const isNumberInRange = (n) => (n > 0 && n < 10 ? true : false);

console.log(isNumberInRange(15));

/* 9. Дан массив с числами. Запишите в новый массив только те числа, которые 
больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию 
isNumberInRange из предыдущей задачи. */

const isNewNumbers = (n) => {
  let newN = "";
  for (let i = 0; i < n.length; i++) {
    if (isNumberInRange(n[i]) == true) {
      newN += n[i];
    }
  }
  console.log(newN);
};

const mass = [1, 2, 5, -14, 12, 5];
isNewNumbers(mass);

/* 10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром 
принимает целое число и возвращает сумму его цифр. */

const getDigitsSum = (n) => {
  let newN = String(n);
  let sum = 0;
  for (let i = 0; i < newN.length; i++) {
    sum += Number(newN[i]);
  }
  return sum;
};
console.log(getDigitsSum(158));

/* 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для 
этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи. */

const Years = () => {
  for (let i = 1; i <= 2020; i++) {
    if (getDigitsSum(i) == 13) {
      console.log(i);
    }
  }
};

Years();

const filterYears = () => {
  const result = [];
  for (let i = 1; i < 2020; i += 1) {
    if (getDigitsSum(i) === 13) {
      result.push(i);
    }
  }

  return result;
};

console.log(filterYears());

/* 12. Сделайте функцию isEven() (even - это четный), которая параметром 
принимает целое число и проверяет: четное оно или нет. Если четное - пусть 
функция возвращает true, если нечетное - false. */

const isEven = (n) => (n % 2 == 0 ? true : false);

console.log(isEven(2));

/* 13. Дан массив с целыми числами. Создайте из него новый массив, где 
останутся лежать только четные из этих чисел. Для этого используйте 
вспомогательную функцию isEven из предыдущей задачи. */

const newMass = (n) => {
  let newM = "";
  for (let i = 0; i < n.length; i++) {
    if (isEven(n[i]) == true) {
      newM += n[i];
    }
  }
  return newM;
};

const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newMass(massiv));

const filterArr = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (isEven(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* 14. Сделайте функцию getDivisors, которая параметром принимает число и 
возвращает массив его делителей (чисел, на которое делится данное число). */

const getDivisors = (n) => {
  let massDel = [];
  let k = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      massDel[k] = i;
      k++;
    }
  }
  return massDel;
};

console.log(getDivisors(24));

/* 15. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, 
опять сложите его цифры. И так, пока сумма не станет однозначным числом 
(9 и менее). */

const sumDigital = (n) => {
  let newn = getDigitsSum(n);
  while (newn >= 10) {
    newn = getDigitsSum(newn);
  }
  return newn;
};

console.log(sumDigital(11973));

const lessNine = (num) => {
  console.log(`Функция lessNine вызванна с параметром ${num}`);
  if (getDigitsSum(num) > 9) {
    return lessNine(getDigitsSum(num));
  }
  return getDigitsSum(num);
};

console.log(lessNine(156957565523));

/* 16. Напишите стрелочную функцию, которая будет возвращать true если 
строка является палиндромом и false в противном случае. */

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
