/* Практика #1
Создание To Do List, необходимо средствами JS создать страницу на которой будут
элементы:

● header содержащий заголовок страницы
● контейнер с контентом страницы
● поле ввода input
● список элементов (число элементов > 1)
● кнопка добавления To Do.

Практика #2
Используя наработки первого задания, добавить возможность добавления To Do в
список с помощью поля ввода input и кнопки создания нового To Do. */

//Построение header
const createHeader = function () {
  const header = document.createElement("header");
  header.className = "header_style";
  header.textContent = "To do list";

  document.body.append(header);
};

//Создание контейнера для контента
const createContant = function () {
  const main_div = document.createElement("div");
  main_div.className = "wrapper";
  document.body.append(main_div);
};

//Создание области ввода
const createAdd = function () {
  const div = document.createElement("div");
  div.className = "list_style";
  const main_div = document.querySelector("div");
  main_div.append(div);

  //Добавление окна ввода
  const div1 = document.createElement("div");
  div.append(div1);
  const inp = document.createElement("input");
  inp.className = "input_style";
  inp.type = "text";
  div1.append(inp);

  //Добавление кнопки ввода
  const div2 = document.createElement("div");
  div.append(div2);

  const btn = document.createElement("img");
  btn.className = "img_style";
  btn.src = "./pic/add.jpg";
  const btn_inp = document.querySelector("input");
  btn_inp.placeholder = "Введите новую задачу";

  div2.append(btn);

  //Кнопка добавить новую запись в список
  const get_add = function () {
    const input_text = btn_inp.value;
    if (input_text) {
      createLi(input_text);
      btn_inp.value = "";
    }
  };

  btn.addEventListener("click", get_add);
};

//Добавление списка
const createList = function () {
  const ul = document.createElement("ul");
  ul.className = "ul_style";
  const main_div = document.querySelector("div");
  main_div.append(ul);
};

//Добавление элементов списка
const createLi = function (text_li) {
  //добавление строки списка
  const div = document.createElement("div");
  div.className = "list_style";
  const main_div = document.querySelector("div");
  main_div.append(div);

  //добавление элемента списка
  const div1 = document.createElement("div");
  div.append(div1);

  const li = document.createElement("li");
  li.className = "li_style";
  li.textContent = "    " + text_li;

  const img_do = document.createElement("img");

  img_do.src = "./pic/un_ok.jpg";
  img_do.className = "img_style";

  //отметка о выполнении

  const get_ok = function () {
    li.classList.toggle("li_ok");

    if (li.classList.contains("li_ok")) {
      img_do.src = "./pic/ok.jpg";
    } else {
      img_do.src = "./pic/un_ok.jpg";
    }
  };

  img_do.addEventListener("click", get_ok);

  //добавление кнопки удалить
  const div2 = document.createElement("div");
  div.append(div2);

  const img_del = document.createElement("img");
  img_del.src = "./pic/delete.jpg";
  img_del.className = "img_style";

  div1.append(li);
  li.prepend(img_do);
  div2.append(img_del);

  //удаление пункта списка
  const del = function () {
    div.className = "not_display";
  };

  img_del.addEventListener("click", del);
};

//вызовы
createHeader();
createContant();
createAdd();
createList();
createLi("Создать header содержащий заголовок страницы");
createLi("Создать контейнер с контентом страницы");
createLi("Создать поле ввода input");
createLi("Создать список элементов (число элементов > 1)");
createLi("Создать кнопку добавления To Do");
