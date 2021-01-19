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

const userInput = 'cAt mOnkey dOg example trEe table algorithm graph object apple good';

/* 
String: split, toLowerCase
Array: join, map
Map: get, has
*/

const translate = (str) => {

  const lowerStr = str.toLowerCase();
  const wordsArray = lowerStr.split(' ');

  const russianWordsArray = wordsArray.map((word) => {
    if(vocabulary.has(word)){
      const translatedWord = vocabulary.get(word);
      return translatedWord;
    }
    return word
  })
  const russianStr = russianWordsArray.join(' ');
  return russianStr;
};
