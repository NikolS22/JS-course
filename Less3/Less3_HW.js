//Задание №1. Дайте ответ, что будет в результате выполнения данных ниже примеров. С объяснением, почему это так.

console.log("кот" > "код"); //true, посимвольное сравнение "т">"д"
console.log("2" + 2 * "2"); //24 (string), 2*"2"=2*2=4, затем "2"+4=24 (конкат. строк)
console.log(undefined == null); //true, при нестрогом равенстве == эти значения равны друг другу и не равны никаким другим значениям
console.log(undefined != null); //false, при нестрогом равенстве == эти значения равны друг другу и не равны никаким другим значениям
console.log(null == 0); //false, null== или undefined или null, остальное ложь
console.log(2 > "3"); //false, "3" --> 3, 2<3
console.log(null - false + true); //1 (number), null --> 0, далее булева алгебра 0-0+1=1
console.log(1 / "l"); //NaN, "l"-->NaN --> 1/NaN=NaN
console.log("2" * "3"); //6 (number), "2","3" --> 2,3 соотв., так как ариф. операция "*" --> 2*3=6
console.log(4 + 5 + "O"); //9O (string), 4+5=9, затем 9+"O"=9O (конкат. строк)
console.log("l" + 4 + 5); //l45 (string), конкат. строк
console.log("4" - 2); //2 (number), "4" --> 4, так как ариф. операция "-" --> 4-2=2
console.log("4" - "4x"); //NaN, "4","4x" --> 4,NaN соответ. --> 4-NaN=NaN
console.log("23" == 23); //true, "23"-->23 (number), 23==23
console.log(null == false); //false, null== или undefined или null, остальное ложь
console.log(" -4 " / 0 + 1); //-Infinity (number), " -4 "-->-4 (number) -->-4/0+1=-Inf
console.log(null + 1); //1 (number), null --> 0, --> 0+1=1
console.log(undefined + null); //NaN (number), undefined,null-->NaN,0 соответ. --> NaN+0=NaN
console.log(1 === "1"); //false, разные типы переменных
console.log("2" > 10); //false, "2"-->2 (number), 2<10
console.log(NaN == undefined); //false, undefined== или undefined или null, остальное ложь
