'use strict';

/* Создаём прототип для MyArray(тут будет храниться логика) */
function MyArrayProto() {
  /* Уже создан пустой новый объект (this) */
  this.push = function push(item) {
    this[this.length] = item;
    return ++this.length;
  };

  this.pop = function pop() {
    if (this.length <= 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };
}

/* Создаем MyArray */
function MyArray() {
  this.length = 0;
}
MyArray.prototype = new MyArrayProto(); // создаём связь между объектами(Наследование)

const myArr = new MyArray();
const userPhones = new MyArray();

// this - ссылка на объект, который вызывает метод.

const arr = new Array();
