/* Практика #1
Создание To Do List, необходимо средствами JS создать страницу на которой будут
элементы:

● поле ввода input
● список элементов (число элементов > 1)
● кнопка добавления To Do */

//Создание области ввода
export const createAdd = function () {
  const div = document.createElement("div");
  div.id="vvod"
  div.className = "list_style_vvod";
  const mainDiv = document.getElementById("mDiv")
  mainDiv.append(div);

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
  const btnInp = document.querySelector("input");
  btnInp.placeholder = "Введите новую задачу";

  div2.append(btn);

  //Кнопка добавить новую запись в список
  const getAdd = function () {
    const inputText = btnInp.value;
    if (inputText) {
      createLi(inputText);
      btnInp.value = "";
    }
  };

  btn.addEventListener("click", getAdd);
};

//Добавление списка
export const createList = function () {
  const ul = document.createElement("ul");
  ul.className = "ul_style";
  const mainDiv = document.getElementById("mDiv")
  mainDiv.append(ul);
};

//Добавление элементов списка
export const createLi = function (textLi) {
  //добавление строки списка
  const div = document.createElement("div");
  div.className = "list_style divList";
  const mainDiv = document.getElementById("mDiv")
  mainDiv.append(div);

  //добавление элемента списка
  const div1 = document.createElement("div");
  div.append(div1);

  const li = document.createElement("li");
  li.className = "li_style";
  li.textContent = `     ${textLi}`;

  const imgDo = document.createElement("img");

  imgDo.src = "./pic/un_ok.jpg";
  imgDo.className = "img_style";

  //отметка о выполнении

  const getOk = function () {
    li.classList.toggle("li_ok");

    if (li.classList.contains("li_ok")) {
      this.src = "./pic/ok.jpg";
    } else {
      this.src = "./pic/un_ok.jpg";
    }
  };

  imgDo.addEventListener("click", getOk);

  //добавление кнопки удалить
  const div2 = document.createElement("div");
  div.append(div2);

  const imgDel = document.createElement("img");
  imgDel.src = "./pic/delete.jpg";
  imgDel.className = "img_style";

  div1.append(li);
  li.prepend(imgDo);
  div2.append(imgDel);

  //удаление пункта списка
  const del = function () {
    div.className = "not_display";
  };

  imgDel.addEventListener("click", del);
};

//очистка списка
export const cleanList = function () {
  const clean = document.createElement("button");
  clean.textContent="Очистить список";
  clean.className="clean_list"
  const div = document.getElementById("vvod");
  div.after(clean);

  const cleanListTab = function () {
    let liList = document.getElementsByClassName("divList")
    for (let strList of liList) {
      strList.classList.add("not_display")
    }
  };

  clean.addEventListener("click", cleanListTab);

}

