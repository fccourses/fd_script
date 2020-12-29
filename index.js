'use strict';

const userTel1 = '+380996781243';
const userTel2 = '+380996785245';
const userTel3 = '+427895345234';

const userTelArray = [];

const arrExample = new Array();

/* Создаём прототип для MyArray(тут будет храниться логика) */
function MyArrayProto() {
  /* Уже создан пустой новый объект (this) */
  this.push = function push(item) {
    this[this.length] = item;
    return ++this.length;
  };

  this.pop = function pop() {
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

const arr = new Array();
const arr2 = new Array();

const myArr = new MyArray();
const myArr2 = new MyArray();
