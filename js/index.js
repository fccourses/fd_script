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
