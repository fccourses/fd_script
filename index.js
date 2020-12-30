'use strict';

function User(firstName, lastName, age, isMale) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
}

function UserPrototype() {
  this.toString = function toString() {
    return `${this.firstName} ${this.lastName}`;
  };

  this.sayHello = function sayHello() {
    return `User: ${this.firstName} says "Hello!"`;
  };
  /* 
  Написать метод say, который принимает строку и вызвращает
    строку. Формат возвращаемой строки:
    `<Полное имя пользователя> says:
    "<содержимое принятой строки>"`
  */
  this.say = function say(string) {
    debugger;
    if (string) {
      return `${this.firstName} ${this.lastName} says:\n${string}`;
    }
  };
}
User.prototype = new UserPrototype();

const u1 = new User('Test', 'Testovich', 18, true);
const u2 = new User('Vlad', 'Testovich', 28, true);

u1.sayHello();
u2.sayHello();
