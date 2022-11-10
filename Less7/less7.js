
/* Написать функцию, которая будет принимать массив чисел, содержащий целые
положительные и целые отрицательные числа, и в качестве результата работы
функции возвращать сумму четных положительных элементов переданного
массива. */

const arr_1 = [1, -2, -3, 4, -5, 6, -7, 8, 9];

const sum = (arr) => {
  let result = arr.reduce((pre, cur) => {
    if (cur % 2 == 0 && cur > 0) {
      return pre + cur;
    }
    return pre;
  }, 0);
  return result;
};  

  const positiveEvenSum = (arr) =>
    arr.filter((el) => el > 0 && el % 2 === 0).reduce((prev, cur) => prev + cur);

console.log(sum(arr_1));
console.log(positiveEvenSum(arr_1));

/* Написать функцию, которая будет принимать массив чисел, и будет убирать
повторяющиеся значения из переданного массива, в качестве результата
возвращать новый массив с уникальными значениями из исходного. */

const arr_2 = [1,1,1,6,2,2,3,4,5,5,6,6,6];

const arr_not_repriz = (arr) => {
  let arrNew = arr.filter((el, id) => arr.indexOf(el) === id);
  return arrNew;
  }

console.log(arr_not_repriz(arr_2));

function uniqArrItem(itemArray) {
  const result = [];
  for (let i = 0; i < itemArray.length; i += 1) {
    if (!result.includes(itemArray[i])) {
      result.push(itemArray[i]);
    }
  }
  return result;
}

/* const uniqArrItem = (arr) =>
  arr.filter((el, i, array) => !array.includes(el, i + 1));
}
 */

console.log(uniqArrItem(arr_2));

/* Написать функцию которая будет принимать два массива, и будет сравнивать
их, если они идентичны (элементы совпадают по значению и по индексу) то
функция возвращает true, в противном случае false. */

const arr_3 = [1,2,3];
const arr_4=[1,2,3];

const twoArr = (arr1, arr2) => arr1.length === arr2.length && arr1.every((e, ind) => e === arr2[ind]);

console.log(twoArr(arr_3,arr_4));

const compareArray = (arr1, arr2) => {
  const str1 = arr1.toString();
  const str2 = arr2.toString();

  if (str1.length === str2.length) {
    return str1 === str2;
  }
  return false;
};

console.log(compareArray(arr_3,arr_4));


//

const multiArr = [1, 2, [3, 4, 5, [6, 7, 8]], 9, 10, [11, 12, [13, 14, [15]]]];

console.log(multiArr.toString().split(',').map((el)=>+el));

console.log(multiArr.flat(Infinity));

const thirdTry = (arr) => {
  let haveArr = false;

  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      haveArr = true;
    }
  }

  if (haveArr) {
    return thirdTry(arr.flat());
  }
return arr;
};

console.log(thirdTry(multiArr));