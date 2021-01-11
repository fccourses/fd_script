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
function countVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return string.split('').filter((char) => vowels.includes(char)).length;
}
