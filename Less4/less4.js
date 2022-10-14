/* С помощью условных операторов вывести на экран длину наибольшего отрезка
из трех данных (все отрезки разной длины) */

const size_1=1;
const size_2=2;
const size_3=3;

if (size_1>size_2) {
    size_1>size_3?console.log(`Max: ${size_1}`):console.log(`Max: ${size_3}`);
    /*if (size_1>size_3) {
        console.log(`Max: ${size_1}`);
    }
    else {
        console.log(`Max: ${size_3}`);
    }*/
}
else {
    size_2>size_3?console.log(`Max: ${size_2}`):console.log(`Max: ${size_3}`);
    /*if (size_2>size_3) {
        console.log(`Max: ${size_2}`);
    }
    else {
        console.log(`Max: ${size_3}`);
    }*/
}

if((size_1>size_2)&&( size_1>size_3)) {
    console.log(`Max: ${size_1}`);
}
else if ((size_2>size_3)) {
    console.log(`Max: ${size_2}`);
}
else {
    console.log(`Max: ${size_3}`);
}


/* С помощью конструкции switch и переменной, хранящей роль пользователя
(admin, manager, user …), выводить на экран информацию о пользователе
(информацию любого типа, роль, дату рождения, любимый напиток и тд). 
 */

const roleOfUser = "manager";

switch(roleOfUser){
case "admin":
    console.log('Role is admin');
    break;
case "manager":
    console.log('Role is manager');
    break;
case "user":
    console.log('Role is user');
    break;
default:
    console.log('I do not know who you are');
    break;
}

const var_1 = null || 0 || "" || undefined; //undefined
const var_2 = "яблоко" && true && null && 1; //null
const var_3 = 0 || true && "false" || null; //false (string)
const var_4 = 0 && true || "false" && null; //null
const var_5 = !0 && !!1; //true
const var_6 = !(null || !"апельсин" && true);//true (boolean)

/* Реализовать систему рекомендаций для пользователя опираясь на значение
переменной, хранящей значение температуры в градусах Цельсия.
- ниже либо равна -30: “Оставайтесь дома!”;
- от -30 до -10 включительно: “Сегодня холодно”;
- от -10 до +5 включительно: “Не холодно”;
- от +5 до +15 включительно: “Тепло”;
- от +15 до +25 включительно: “Очень тепло”;
- от +25 до +35: “Жарко”;
- выше либо равно +35: “Пекло!”; */

const temp = 35;

if (temp<=-30) {
    console.log("Оставайтесь дома!");
} else if ((temp>-30)&&(temp<=-10)) {
    console.log("Сегодня холодно");
}else if ((temp>-10)&&(temp<=5)) {
    console.log("Не холодно");
}else if ((temp>5)&&(temp<=15)) {
    console.log("Тепло");
}else if ((temp>15)&&(temp<=25)) {
    console.log("Очень тепло");
}else if ((temp>25)&&(temp<35)) {
    console.log("Жарко");
}else if (temp>=35) {
    console.log("Пекло!");
}

//Решить следующие задачи с использованием циклов while и for.

//Вывести в консоль заданную строку N раз. 

let N = 2;
while (N > 0) {
    console.log("Заданная строка");
    N--;
}

N = 2;

for (let i=0; i<N; i++)
{
    console.log("Заданная строка");
}
 
/* Ежедневно количество доступных автомобилей в салоне уменьшается
в два раза. Выяснить, на какой день продаж, количество доступных к 
покупке авто станет меньше M, если известно, что в первый день продаж 
всего было N автомобилей. */

let N_1 = 10;
let M = 4;
let day = 0;

while (N_1 > M) {
    day++;
    N_1/=2;
}
console.log(day);

N_1 = 10;
M = 4;
day = 0;

for (; day<N_1; day++)
{
    if (N_1<M) { break;}
    N_1/=2;
} 
console.log(day);
 
/* Проанализировав временной промежуток начиная с 1800 и до 2022
года найти и вывести в консоль:
- Год первого полета человека в космос (1961) и количество итераций 
которое потребовалось для поиска.
- Количество високосных годов (%4==0) принадлежащих данному отрезку и 
количество итераций которое потребовалось для поиска.  */

let year=1800;
let n=0;

while (year<=2022) {
    n++;
    year++;
    if (year==1961) {
        break;
    }
}
console.log(n);

year=1800;
n=0;
let kol=0;
while (year<=2022) {
    if (year%4==0) {
        break;
    }
    year++;
    n++;
}
 while (year<=2022) {
    year+=4;
    n++;
    kol++;
    } 
console.log(n,kol);

let i=0;
for (year=1800; year<=2022; year++)
{
    if (year==1961) {
        break;
    }
    i++;
}
console.log(i);

i=0;
kol=0;
for (year=1800; year<=2022; year++)
{
    if (year%4==0) {
        break;
    }
    i++;
}
for (; year<=2022; year+=4)
{
    kol++;
    i++;
}
console.log(kol,i);