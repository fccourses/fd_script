'use strict';

const object = {
  'favorite color': 'red',
  0: 'test value',
  1: 'test value 2',
};

// alert(user.favorite color);

console.log(object[0]);
console.log(object['0']);

const test = '1';

console.log(object[test]);

const strAsKey = '2 * 2';

object[strAsKey] = 2 * 2;

function createMultiplicationTable() {
  const result = {};
  debugger;
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      result[`${i} * ${j}`] = i * j;
    }
  }

  return result;
}


/* 
    Написать функцию:
    Создать объект семья
    Ключём будет имя родстенника
    А значением будет информация о нём
    Объект создавать через prompt
*/
