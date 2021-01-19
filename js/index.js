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

/* 
String: split, toLowerCase
Array: join, map
Map: get, has
*/

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
