'use strict';

const vocabulary = new Map(); // Ассоциативный массив
vocabulary.set('cat', 'кот');
vocabulary.set('dog', 'собака');
vocabulary.set('search', 'поиск');
vocabulary.set('monkey', 'обезьяна');
vocabulary.set('good', 'хорошо');
vocabulary.set('bad', 'плохо');
vocabulary.set('apple', 'яблоко');
vocabulary.set('structure', 'структура');
vocabulary.set('algorithm', 'алгоритм');
vocabulary.set('tree', 'дерево');
vocabulary.set('graph', 'граф');
vocabulary.set('object', 'объект');
vocabulary.set('table', 'стол');

//=============================
const keysArray = [];
for (const key of vocabulary.keys()) {
  keysArray.push(key);
}
console.log(keysArray);
//======
const valuesArray = [];
for (const value of vocabulary.values()) {
  valuesArray.push(value);
}
console.log(valuesArray);
//=============================
const rusWords = [...vocabulary.values()];
const engWords = [...vocabulary.keys()];
//=============================

/* 
  Напишите функцию, которая проверяет,
 может ли строка быть воссоздана с
 использованием символов другой строки.

 Первый параметр функции - создаваемая строка.
 Второй параметр - используемая строка.

 Функция возвращает Boolean.
*/
/* 
1. Создаёте словарь: 
    буква -ключ,
    кол-во этих букв в строке - значение.
2. Таких словарей 2.
3. Сравнить размер словарей.
4. Сравнить содержание этих словарей.
        get
*/

const compare = (str1, str2) => {
  const mapToStr1 = new Map();
  const mapToStr2 = new Map();

  for (const letter of str1) {
    if (mapToStr1.has(letter)) {
      const value = mapToStr1.get(letter);
      mapToStr1.set(letter, value + 1);
      continue; // переходим на след. итерацию
    }
    mapToStr1.set(letter, 1);
  }

  for (const letter of str2) {
    if (mapToStr2.has(letter)) {
      // проверяем встречалась ли уже буква
      const value = mapToStr2.get(letter);
      mapToStr2.set(letter, value + 1); // буква встретилась ещё один раз
      continue; // переходим на след. итерацию
    }
    mapToStr2.set(letter, 1); // буква встретилась впервые
  }

  if (mapToStr1.size !== mapToStr2.size) {
    return false;
  }

  for (const letter of mapToStr1.keys()) {
    if (mapToStr1.get(letter) !== mapToStr2.get(letter)) {
      return false;
    }
  }
  return true;
};

compare('test', 'sett'); // true
/* compare('love', 'evol'); // true
compare('test', 'lore'); // false
compare('Mom', 'Omo'); // false */

const userInput =
  'cAt mOnkey dOg example trEe table algorithm graph object apple good';

/**
 *
 * @param {string} str
 * @param {string|RegExp} separator
 * @return {string}
 */
const translate = (str, separator = ' ') => {
  return str
    .toLowerCase()
    .split(separator)
    .map((word) => (vocabulary.has(word) ? vocabulary.get(word) : word))
    .join(separator);
};

const user1 = {
  id: 1,
  name: 'John1',
  surName: 'John1',
  age: 18,
};

const user2 = {
  id: 2,
  name: 'Jane',
  surName: 'John2',
  age: 36,
};

const johnMsg = ['str1', 'str2', 'str3'];
const janeMsg = ['1111', 'hello', 'test'];

const mapWithAllMessages = new Map();
mapWithAllMessages.set(user1.id, johnMsg);
mapWithAllMessages.set(user2.id, janeMsg);

const userToMsgs = (userId) => mapWithAllMessages.get(userId);

/*
 1. getMsgFromMap(user) 
 2. getMsgFromMap(userId) 
*/
