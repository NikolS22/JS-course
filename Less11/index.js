// console.log("script init");

// const addButton = document.getElementById("add_button")
// addButton.textContent = 'Создать новый элемент'
// console.log(addButton);

// const buttonsCol = document.getElementsByTagName("button");
// console.log(buttonsCol);
// console.log(buttonsCol[0]);

// /* const listItem = document.querySelector("Li + .active");
// console.log(listItem); */

// const listItems = document.querySelectorAll(".list_item");
// console.log(listItems);

// const header = document.querySelector("header");
// header.innerHTML = "<h3> New header </h3>"
// console.log(header.innerHTML);

// const footer = document.querySelector("footer");
// //footer.outerHTML = "<div><p> New footer </p></div>"
// console.log(footer.outerHTML);

/* const addButton = document.getElementById("add_button")
addButton.style.color = "red";
addButton.style.width = "400px";

const list = document.querySelector("ul");

list.classList.add("active");

list.classList.toggle("active");

console.log(list.className); */

/* const newListItem = document.createElement('li')

newListItem.className = "list_item";
newListItem.textContent = "New element"

const list = document.querySelector("ul");
list.append(newListItem) */

/* const themeBtn = document.getElementById("theme_button")

const first = function () {
    console.log("Hello world");
}
themeBtn.addEventListener("click",first) */

const themeBtn = document.getElementById("theme_button");

const themeToggle = function () {
  const body = document.body;

  body.classList.toggle("light_theme")

  if (body.classList.contains("light_theme;")) {
    themeBtn.textContent = "Темная тема";
  } else {
    themeBtn.textContent = "Светлая тема";
  }
};

themeBtn.addEventListener("click", themeToggle);

const content = document.querySelector(".content");

content.addEventListener("click", (even) =>
  console.log(even.target, even.currentTarget)
);

const list = document.querySelector(".list");

list.addEventListener("click", () => console.log("list"));

const listItems = document.querySelectorAll(".list_item");

for (let item of listItems) {
  item.addEventListener("click", (even) => even.stopPropagation());
}

