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
