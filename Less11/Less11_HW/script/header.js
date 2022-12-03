/* Практика #1
Создание To Do List, необходимо средствами JS создать страницу на которой будут
элементы:

● header содержащий заголовок страницы
● контейнер с контентом страницы */

//Построение header
export const createHeader = function () {
  const header = document.createElement("header");
  header.className = "header_style";
  header.textContent = "To do list";
  document.body.append(header);
};

//Создание контейнера для контента
export const createContant = function () {
  const main_div = document.createElement("div");
  main_div.className = "wrapper";
  document.body.append(main_div);
};
