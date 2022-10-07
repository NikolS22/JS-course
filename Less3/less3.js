const name = "Alex";

const nameToNamber = Number(name);

console.log(nameToNamber);

const age = 18;
const ageToString = String(age);
console.log(typeof ageToString);

const nullvalue = null;
console.log(Number(nullvalue));

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean({}));

console.log(2 + 2 + "2" + 3 + 3);

console.log("2" > "3");

//Практика

console.log(5 > 4); //true, оба числа

console.log("ананас" > "яблоко"); //false, сравнивается посимвольно а<я

console.log("2" > "12"); //true, сравнивается посимвольно 2>1

console.log(undefined == null); //true, при нестрогом равенстве == эти значения равны друг другу и не равны никаким другим значениям

console.log(undefined === null); //false, так как === получаются разные типы переменных

console.log(null == "\n0\n"); //false, null== или undefined или null, остальное ложь

console.log(null == +"\n0\n"); //false, null== или undefined или null, остальное ложь

console.log("" + 1 + 0); //10 (string), все преобраз в строку (конкат. строк)

console.log("" - 1 + 0); //-1 (number), "" становятся 0, так как ариф. операция "-" --> 0-1+0=-1

console.log(true+false); //1 (number), булева алгебра one love, таблица истиности 1+0=1

console.log(6/"3"); //2 (number), "3" --> 3, так как ариф. операция "/" --> 6/3=2

console.log("2"*"3"); //6 (number), "2","3" --> 2,3 соотв., так как ариф. операция "*" --> 2*3=6

console.log(4+5+"px"); //9px (string), 4+5=9 (бинарный +), затем 9+"px"=9px (конкат. строк)

console.log(("$"+4+5)); //$45 (string), конкат. строк

console.log("4"-2); //2 (number), "4" --> 4, так как ариф. операция "-" --> 4-2=2

console.log("4px"-2); //NaN (number), так как ариф. операция "-" "4px" --> NaN --> NaN-2=NaN

console.log(7/0); //Infinity (number)

console.log(" -9 " + 5); // -9 5 (string), конкат. строк

console.log(" -9 " - 5); //-14 (number), " -9 " --> -9, так как ариф. операция "-" --> -9-5=-14

console.log(null + 1); //1 (number), null --> 0, --> 0+1=1

console.log(undefined + 1); //NaN (number), undefined-->NaN --> NaN+1=NaN

console.log(" \t \n" - 2); //-2 (number), " \t \n"->""->0 --> 0-2=-2

