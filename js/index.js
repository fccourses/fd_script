'use strict';

function toUpperCase(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr += str[i].toUpperCase();
  }

  return newStr;
}

function toJadenCase(str) {
  return str
    .split(' ')
    .map((word) => {
      const letterArr = [...word];
      letterArr[0] = letterArr[0].toUpperCase();
      return letterArr.join('');
    })
    .join(' ');
}

// 'test tes ttest' => 'Test Tes Ttest'

/* 
Посчитать кол-во гласных, которые содержаться в строке
Из функции вернуть их кол-во 
Гласными являются «a», «e», «i», «o», «u».
*/
const countVowels = (string) =>
  string
  .split('')
  .filter((char) => ['a', 'e', 'i', 'o', 'u'].includes(char))
  .length;
