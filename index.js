'use strict';

const obj1 = {
  test: 'test',
};

const obj2 = {
  test: 'test',
};

const link1 = obj1;

const t1 = 'str';
const t2 = 'str';
console.log(t1 === t2);

console.log(link1 === obj1); //true
console.log(link1 === obj2); //false

link1.test2 = 'str';
console.log(link1);
console.log(obj1);
