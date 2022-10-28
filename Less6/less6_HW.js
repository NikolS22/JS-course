
/* 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str),
которая преобразует строку в массив слов. */

let str = "hello world, Hello";

const stringToarray = (str) => {
  let arr = [];
  let k=0;
  arr[k]="";
  for (let i = 0; i < str.length; i++) {
    if ((str[i] != " ")&&(str[i] != ",")&&(str[i] != ".")) {
      arr[k] += str[i];
    }
    else if ((str[i] == " ")) {
    k++;
    arr[k]="";}
  }
  return arr;
};

console.log(stringToarray(str));

const stringToarray1 = (str) => str.trim().split(" ");

console.log(stringToarray1(str));

/* 2.	Напишите функцию deleteСharacters(str, length), которая возвращает 
подстроку, состоящую из указанного количества символов. */

let length = 11;

const deleteСharacters = (str, length) => {
  return str.substr(0,length);
  /* return str.slice(0,length); */
}

console.log(deleteСharacters(str, length));

/* 3.	Напишите функцию insertDash(str), которая принимает строку str в 
качестве аргумента и вставляет тире (-) между словами. При этом все символы 
строки необходимо перевести в верхний регистр. */

const insertDash = str =>{
  /* return str.trim().toUpperCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-"); */
  let strNew = str;
  let count = str.split(" ").length - 1;
  for (let i=0; i<count; i++)
  {
    strNew = strNew.toUpperCase().replace(" ","-");
  }
  return strNew;
}

console.log(insertDash(str));

/* 4.	Напишите функцию, которая принимает строку в качестве аргумента и 
преобразует регистр первого символа строки из нижнего регистра в верхний. */

const theFirstUpper = str => str[0].toUpperCase() + str.slice(1);

console.log(theFirstUpper(str));

/* 5.	Напишите функцию capitalize(str), которая возвращает строку, в которой 
каждое слово начинается с заглавной буквы. */

const capitalize = str => {
  /* str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()}) */
  let arr = str.trim().split(" ");
  /* let arr = stringToarray(str); */
  /* let arr = stringToarray1(str); */
  for (let i=0; i<arr.length; i++)
  {
    arr[i]=theFirstUpper(arr[i]);
  }
  return arr.join(' ');
}

console.log(capitalize(str));

/* 6.	Напишите функцию changeRegister(str), которая принимает в качестве 
аргумента строку и и заменяет регистр каждого символа на противоположный. 
Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ
оХоТнИк». */

const changeRegister = str =>
{
  let arr=[];
  for (let i=0; i<str.length;i++)
  {
    str[i]===str[i].toUpperCase()?arr.push(str[i].toLowerCase()):arr.push(str[i].toUpperCase());
    /* if (str[i]===str[i].toUpperCase())
    {
      arr.push(str[i].toLowerCase());
    }
    else {
      arr.push(str[i].toUpperCase());
    } */
  }
  return arr.join('');
}

console.log(changeRegister(str));

/* 7.	Напишите функцию removeChar(str), которая возвращает строку, очищенную 
от всех не буквенно-цифровых символов. */

const removeChar = str => {
  let chisla = "1234567890";
  let stroka = [];
  for (let i = 0; i<str.length; i++) {
    if(str[i]==" "||(str[i]!=str[i].toUpperCase()&&str[i]==str[i].toLowerCase()
    ||str[i]==str[i].toUpperCase()&&str[i]!=str[i].toLowerCase()||chisla.includes(str[i])))
    {
      stroka.push(str[i]);
    }
  }
  return stroka.join('');
}

console.log(removeChar(str));

/* 8.	Напишите функцию zeros(num, len), которая дополняет нулями до указаной 
длины числовое значение с дополнительным знаком «+» или «-» в зависимости от 
передаваемого аргумента. */

const num = -15.6;

const zeros = (num, len) => {
  let newNumb = [];
  for (let i = 0; i <= len - num.toString().length; i++) {
    newNumb.push(0);
  }
  if (num.toString()[0] != "-") {
    newNumb[0] = "+";
    newNumb.pop();
    newNumb.push(num.toString().substring());
  } else {
    newNumb[0] = "-";
    newNumb.push(num.toString().substring(1));
  }
  return newNumb.join("");
};

console.log(zeros(num, 7));

/* 9.	Напишите функцию comparison(str1, str2), которая сравнивает строки без 
учёта регистра символов. */

let str1 = "Hello!";
let str2 = "heLLo!";

const comparison = (str1, str2) => {
  if (str1.toUpperCase() === str2.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

console.log(comparison(str1, str2));

/* 10.	Напишите функцию insensitiveSearch(str1, str2), которая осуществляет 
поиск подстроки str2 в строке str1 без учёта регистра символов. */

const str_1 = "HeLlo!";
const str_2 = "ll";

const insensitiveSearch = (str1, str2) => {
  console.log(str1.toUpperCase().includes(str2.toUpperCase()));
}

/* function insensitive_search(str1, str2) {
    let search_str = new RegExp(str2, "ig");
    var result = str1.search(search_str);

    return (result > 0) ? "Соответствует" : "Не соответствует";  
} */

insensitiveSearch(str_1, str_2)

/* 11. Напишите функцию initCap(str), которая преобразует стиль написания 
составных слов строки в CamelCase, при котором несколько слов пишутся слитно 
без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.*/

const initCap = (str) => {
  return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
    return m.toUpperCase().replace(/\s+/g, "");
  });
};

console.log(initCap(str));

/* 12. Напишите функцию initSnake(str), которая преобразует стиль написания 
составных слов строки из CamelCase в snake_case, при котором несколько слов 
разделяются символом подчеркивания (_), причём каждое слово пишется с 
маленькой буквы. */

let strS = "HelloWorldHello";

const initSnake = (str) => {
  str = str.replace(/[A-Z]/g, function (letter) {
    return "_" + letter.toLowerCase();
  });
  return str.replace(/^_/, "");
};

console.log(initSnake(strS));

/* 13.	Напишите функцию repeatStr(str, n), которая возвращает строку 
повторяемую определённое количество раз. */

str = "Hello world.";

const repeatStr = (str, n) => {
  let newStr = str;
  for (let i = 0; i < n-1; i++) {
    newStr += " " + str;
  }
  return newStr;
};

console.log(repeatStr(str, 5));

/* 14.	Напишите функцию path(pathname), которая возвращает имя файла 
(подстрока после последнего символа "\" ) из полного пути к файлу. */

const pathname = "C:\\Users\\Admin\\Desktop\\111\\less6-HW.js";

const path = (pathname) => {
  let pos = pathname.indexOf("\\");
  while (pos != -1) {
    if (pathname.indexOf("\\", pos + 1) == -1) {
      break;
    }
    pos = pathname.indexOf("\\", pos + 1);
  }
  return pathname.slice(pos + 1);
};

console.log(path(pathname));

/*15.	Создайте метод объекта String endsWith(), который сравнивает подстроку
str1 с окончанием исходной строки str и определяет заканчивается ли строка 
символами подстроки. */

str1 = "ld.";

String.prototype.endsWith = function (str1) {
  if (str1.length < this.length) {
    if (str1 === str.slice(this.length - str1.length)) {
      return true;
    } else {
      return false;
    }
  } else {
    console.log("Ошибка в длинне строк");
  }
};

console.log(str.endsWith(str1));

/* 16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть 
строки, расположенную после или до указанного символа char в зависимости от 
параметра pos. */

const getSubstr = (str, char, pos) => {
  if (str.includes(char) === true ) {
    if (pos==="до") {
      return str.slice(0,str.indexOf(char));
    }
    else {
      return str.slice(str.indexOf(char)+1);
    }
  }
  else {
    return "Символ отсутствует в строке"
  }
}

console.log(getSubstr(str, " ", "до"));

/* 17. Напишите функцию insert(str, substr, pos), которая вставляет подстроку 
substr в указанную позицию pos строки str. По умолчанию подстрока вставляется
в начало строки. */

const insert = (str, substr, pos = 0) => {
  return str.slice(0, pos) + substr + str.slice(pos);
};

console.log(insert(str," big", 5));

/* 18. Напишите функцию limitStr(str, n, symb), которая обрезает строку, 
если она длиннее указанного количества символов n. Усеченная строка должна
заканчиваться троеточием «...» (если не задан параметр symb) или заданным
символом symb. */

const limitStr = (str, n, symb="...") => {
  if (!n) return str;
  return str.slice(0,n-symb.length)+symb;
}

console.log(limitStr(str,6,"!"));

/* 19. Напишите функцию count(str, stringsearch), которая возвращает 
количество символов stringsearch в строке str. */

const count = (str, stringsearch) => {
  return str.split(stringsearch).length - 1;
};

console.log(count(str,"l"));

/* 20. Напишите функцию strip(str), которая удаляет все лишние пробелы из 
строки str. */

str = "     Hello  big      world.    ";

const strip = (str) => {
  return str
    .replace(/\s+/g, " ") // заменить длинные пробелы одним
    .replace(/^\s/, "") // удалить пробелы в начале строки
    .replace(/\s$/, ""); // удалить пробелы в конце строки
}

console.log(strip(str));

/* 21. Напишите функцию cutString(str, n), которая удаляет лишние слова из
строки str, оставив в ней n слов. */

str = "Hello big world. Hello big world."

const cutString = (str, n) => str.split(" ").splice(0, n).join(" ");
/* {
  let strNew = str.split(" ");
  console.log(strNew);
  while (strNew.length > n) {
    strNew.pop();
  }
  return strNew.join(" ");
}; */

console.log (cutString(str, 3));

/* 22. Напишите функцию findWord(word, str), которая проверяет, существует ли
в строке str слова word. */

const findWord = (word, str) => str.includes(word);

console.log(findWord("Hello", str));




