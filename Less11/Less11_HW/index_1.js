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

import * as Create from "./script/index_scr.js"

//вызовы

Create.head.createHeader();
Create.head.createContant();
Create.cont.createAdd();
Create.cont.createList();
Create.cont.createLi("Создать header содержащий заголовок страницы");
Create.cont.createLi("Создать контейнер с контентом страницы");
Create.cont.createLi("Создать поле ввода input");
Create.cont.createLi("Создать список элементов (число элементов > 1)");
Create.cont.createLi("Создать кнопку добавления To Do");
Create.cont.cleanList();
