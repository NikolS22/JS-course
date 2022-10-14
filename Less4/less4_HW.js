//Работа с if-else
console.log("Работа с if-else");

/* 1. Если переменная a равна нулю, то выведите 'Верно', иначе выведите
'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. */

const a_1 = -3;
if (a_1 == 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* 2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите
'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. */

const a_2 = -3;
if (a_2 > 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* 3. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите
'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. */

const a_3 = -3;
if (a_3 < 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* 4. Если переменная a больше или равна нулю, то выведите 'Верно',
иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0,
-3. */

const a_4 = -3;
if (a_4 >= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* 5. Если переменная a меньше или равна нулю, то выведите 'Верно',
иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0,
-3. */

const a_5 = -3;
if (a_5 < 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* 6. Если переменная a не равна нулю, то выведите 'Верно', иначе
выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. */

const a_6 = -3;
if (a_6 != 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* 7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите
'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3. */

const a_7 = "3";
if (a_7 === "test") {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* 8. Если переменная a равна '1' и по значению и по типу, то выведите
'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a,
равном '1', 1, 3. */

const a_8 = 3;
if (a_8 === 1) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//Работа с логическими переменными
console.log("Работа с логическими переменными");

/* 1. Если переменная test равна true, то выведите 'Верно', иначе выведите
'Неверно'. Проверьте работу скрипта при test, равном true, false.
Напишите два варианта скрипта - с короткой записью и с длинной. */

const var_1_1 = true;

if (var_1_1 === true) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

var_1_1 === true ? console.log("Верно") : console.log("Неверно");

/* 2. Если переменная test не равна true, то выведите 'Верно', иначе
выведите 'Неверно'. Проверьте работу скрипта при test, равном true,
false. Напишите два варианта скрипта - с короткой записью и с длинной. */

const var_1_2 = true;

if (var_1_2 !== true) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

var_1_2 !== true ? console.log("Верно") : console.log("Неверно");

//Работа с && (и) и || (или)
console.log("Работа с && (и) и || (или)");

/* 1. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно',
иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0,
-3, 2. */

const a_9 = 2;
a_9 > 0 && a_9 < 5 ? console.log("Верно") : console.log("Неверно");

/* 2. Если переменная a равна нулю или равна двум, то прибавьте к ней 7,
иначе поделите ее на 10. Выведите новое значение переменной на
экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2. */

let a_10 = 2;
if (a_10 == 0 || a_10 == 2) {
  a_10 += 7;
  console.log(a_10);
} else {
  a_10 /= 10;
  console.log(a_10);
}

/* 3. Если переменная а равна или меньше 1, а переменноя b больше или
равна 3, то выведите сумму этих переменных, иначе выведите их разность
(результат вычитания). Проверьте работу скрипта при a и b, равном 
1 и 3, 0 и 6, 3 и 5. */

const a_11 = 3;
const b_11 = 5;
let rez_11;

if (a_11 <= 1 && b_11 >= 3) {
  rez_11 = a_11 + b_11;
  console.log(rez_11);
} else {
  rez_11 = a_11 - b_11;
  console.log(rez_11);
}

/* 4. Если переменная a больше 2-х и меньше 11-ти, или переменная
b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в
противном случае выведите 'Неверно'. */

const a_12 = 10;
const b_12 = 10;

if ((a_12 > 2 && a_12 < 11) || (b_12 >= 6 && b_12 < 14)) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//На switch-case
console.log("На switch-case");

/* 1. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она
имеет значение '1', то в переменную result запишем 'зима', если имеет
значение '2' – 'весна' и так далее. Решите задачу через switch-case.
 */

const num = 1;
let result;

switch (num) {
  case 1:
    result = "Зима";
    console.log(result);
    break;
  case 2:
    result = "Весна";
    console.log(result);
    break;
  case 3:
    result = "Лето";
    console.log(result);
    break;
  case 4:
    result = "Осень";
    console.log(result);
    break;
  default:
    console.log("Ошибка значения");
    break;
}

//Общие задачи
console.log("Общие задачи");

/* 1. В переменной day лежит какое-то число из интервала от 1 до 31. 
Определите в какую декаду месяца попадает это число
(в первую,вторую или третью). */

const day = 31;

if ((day>=1)&&(day<=10)) {
    console.log("Первая декада");
} else if ((day>=11)&&(day<=20)) {
    console.log("Вторая декада");
} else if ((day>=21)&&(day<=31)) {
    console.log("Третья декада");
}

/* 2. В переменной month лежит какое-то число из интервала от 1 до 12.
Определите в какую пору года попадает этот месяц 
(зима, лето, весна,осень). */

const month = 12;

if ((month==1)||(month==2)||(month==12)) {
    console.log("Зима");
} else if ((month>=3)&&(month<=5)) {
    console.log("Весна");
} else if ((month>=6)&&(month<=8)) {
    console.log("Лето");
} else if ((month>=9)&&(month<=11)) {
    console.log("Осень");
}

/* 3. Дана строка, состоящая из символов, например, 'abcde'.
Проверьте,что первым символом этой строки является буква 'a'. 
Если это так -выведите 'да', в противном случае выведите 'нет'. */

const str = "abcde";

if (str[0]=="a") {
    console.log("Да");
} else {
    console.log("Нет");
}

/* 4. Дана строка с цифрами, например, '12345'. Проверьте, что 
первым символом этой строки является цифра 1, 2 или 3. Если это 
так - выведите'да', в противном случае выведите 'нет'. */

const str_2 = "12345";

if ((str_2[0]=="1")||(str_2[0]=="2")||(str_2[0]=="3")) {
    console.log("Да");
} else {
    console.log("Нет");
}

/* 5. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть 
сложите как числа первый символ строки, второй и третий. */

const str_3 = "123";
const rezult_3 = Number(str_3[0])+Number(str_3[1])+Number(str_3[2]);
console.log(rezult_3);

/* 6. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех 
цифр равняется сумме вторых трех цифр. Если это так - выведите 'да',
впротивном случае выведите 'нет'. */

const str_4 = "123456";
const sum_1 = Number(str_4[0])+Number(str_4[1])+Number(str_4[2]);
const sum_2 = Number(str_4[3])+Number(str_4[4])+Number(str_4[5]);

if (sum_1==sum_2) {
    console.log("Да");
} else {
    console.log("Нет");
}

//Циклы while и for
//Решите эти задачи сначала через цикл while, а затем через цикл for.
console.log("Циклы while и for");

/*1. Выведите столбец чисел от 1 до 100.*/

let i=1;
while(i<=100) {
  console.log(i);
  i++;
}

for (let i=0; i<=100; i++) {console.log(i);}

/* 2. Выведите столбец чисел от 11 до 33. */

let i_2=11;
while(i_2<=33) {
  console.log(i_2);
  i_2++;
}

for (let i_2=11; i_2<=33; i_2++) {console.log(i_2);}

/* 3. Выведите столбец четных чисел в промежутке от 0 до 100. */

let i_3=0;
while(i_3<=100) {
  if (i_3%2==0) {console.log(i_3);}
  i_3++;
}

for (let i_3=0; i_3<=100; i_3++) {
  if (i_3%2==0) {console.log(i_3);}
}

/* 4. С помощью цикла найдите сумму чисел от 1 до 100. */

let i_4=1;
let sum_4=0;
while(i_4<=100) {
  sum_4+=i_4;
  i_4++;
}
console.log(sum_4);

sum_4=0;
for (let i_4=1; i_4<=100; i_4++) {sum_4+=i_4;}
console.log(sum_4);

//Работа с for для массивов
console.log("Работа с for для массивов");

/* 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for
выведите все эти элементы на экран. */

const mass = [1,2,3,4,5];

for (let i=0; i<mass.length; i++)
{
  console.log(mass[i]);
}

/* Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for 
найдите сумму элементов этого массива. Запишите ее в переменную 
result. */

const mass_1 = [1,2,3,4,5];
let result_1 =0;

for (let i=0; i<mass_1.length; i++)
{
  result_1+=mass_1[i];
}
console.log(result_1);

//Задачи общие.
console.log("Задачи общие");

/* 1. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла 
for и оператора if выведите на экран столбец тех элементов массива,
которые больше 3-х, но меньше 10. */

const mass_2 = [2,5,9,15,0,4];

for (let i=0; i<mass_2.length; i++)
{
  if (mass_2[i]>3 && mass_2[i]<10) {
    console.log(mass_2[i]);
  }
}

/* 2. Дан массив с числами. Числа могут быть положительными и 
отрицательными. Найдите сумму положительных элементов массива. */

const mass_3 = [2,-5,9,-15,0,4];
let sum_5=0;

for (let i=0; i<mass_3.length; i++)
{
  if (mass_3[i]>0) {
    sum_5+=mass_3[i];
  }
}
console.log(sum_5);

/* 3. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью 
цикла for и оператора if проверьте, есть ли в массиве элемент со 
значением, равным 4. Если есть - выведите на экран 'Есть!' и 
выйдите из цикла. Если нет - ничего делать не надо. */

const mass_4 = [1,2,5,9,4,13,4,10];

for (let i=0; i<mass_4.length; i++)
{
  if (mass_4[i]==4) {
    console.log("Есть!");
    break;
  }
}

/* 4. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
Выведите на экран только те числа из массива, которые начинаются 
на цифру 1, 2 или 5. */

const mass_5 = [10,20,30,50,235,3000];

for (let i=0; i<mass_5.length; i++)
{
  let sim = String(mass_5[i]);
  if (sim[0]=="1"||sim[0]=="2"||sim[0]=="5") {
    console.log(mass_5[i]);
  }
}

/* 5. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью 
цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.*/

const mass_6 = [1,2,3,4,5,6,7,8,9];
let str_5 ="-";

for (let i=0; i<mass_6.length; i++)
{
  str_5=str_5+mass_6[i]+"-";
}
console.log(str_5);

/* 6. Дано число n=1000. Делите его на 2 столько раз, пока 
результат деления не станет меньше 50. Какое число получится?
Посчитайте количество итераций, необходимых для этого (итерация -
это проход цикла), и запишите его в переменную num. */

let n = 1000;
let num_1=0;

while (n>=50) {
  n/=2;
  num_1++;
}
console.log(n,num_1);