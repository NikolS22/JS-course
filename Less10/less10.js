const user = {
  name: "Alex",
};

console.log(user);

const obj = {
  city: "NN",
};

const russian = {
  country: "Russia",
  city: "London",
};

const people = {
  name: "Alex",
  age: 26,
};

console.log(people.city);

const name = "Alex";
const user1 = {
  name,
};

const { name: userName } = user1;
console.log(userName);

function CreateUser(userName, userAge) {
  this.name = userName;
  this.age = userAge;

  this.sayHi = function () {
    console.log(`Привет, меня зовут ${this.name}`);
  };
}

CreateUser.prototype.sayAge = function () {
  console.log(`Мне ${this.age}`);
};

const firstUser = new CreateUser("Alex", 26);
const secondUser = new CreateUser("Tony", 24);
const thirdUser = new CreateUser("Ivan", 15);

console.log(firstUser);
console.log(secondUser);
console.log(thirdUser);

secondUser.sayHi();
secondUser.sayAge();

/* Реализовать функцию конструктор для создания открыток. Функция должна
создавать объект открытки со свойствами from, to и метод show(). Метод должен
возвращать строку в которой будут указаны значения свойств from и to.

Добавить в prototype создаваемого объекта метод заменяющий текущее значение
свойства from на новое переданное значение. */

function CreatePostCard(from, to) {
  this.from = from;
  this.to = to;

  this.show = function () {
    console.log(`Откуда: ${this.from}, куда: ${this.to} `);
  };
}

CreatePostCard.prototype.setFrom = function (newFrom) {
  this.from = newFrom;
};

const firstPostCard = new CreatePostCard("Arzamas", "NN");
console.log(firstPostCard);
firstPostCard.show();
firstPostCard.setFrom("Moscow");
firstPostCard.show();

/* Создайте класс People, он должен содержать свойства name (имя), surname 
(фамилия) и метод getFullName() (возвращает полное имя человека). Создайте класс
Worker который будет наследоваться от класса People. Класс Worker должен
содержать свойства name, surname унаследованные от родительского класса, и
свойства rate (ставка по которой происходит оплата руб/день), day (количество
отработанных дней) и метод getSalary() (возвращает заработную плату сотрудника).

Создать несколько экземпляров класса Worker с различными данными и проверить
корректность работы */

class People {
  constructor(name, surName) {
    this.name = name;
    this.surName = surName;
  }

  getFullName() {
    return `${this.name} : ${this.surName}`;
  }
}

const firstPeople = new People("Alex", "Ivanov");

console.log(firstPeople);

class Worker extends People {
  constructor(name, surName, rate, day) {
    super(name, surName);
    this.rate = rate;
    this.day = day;
  }

  getSallary() {
    return `${this.getFullName()} получил ${this.rate * this.day}`;
  }
}

const firstWorker = new Worker("Alex", "Petrov", 500, 20);

const secondWorker = new Worker("Tony", "Ivanov", 700, 25);

console.log(firstWorker.getSallary());

console.log(secondWorker.getSallary());
console.log(secondWorker);
