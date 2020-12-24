'use strict';

/* 
  1. Спрашивать у пользователя пароль до тех пор,
  пока он не введёт правильный пароль,
  1.2 Ограничить число попыток ввода до 5.
*/

/* let count = 1;
while (count <= MAX_TRY) {
  count++;
  const userPass = prompt('Password: ');

  if (GOOD_PASSWORD === userPass) {
    console.log('Пароль верный');
    break;
  }
} */
/*       начало;        условие;        шаг */
/* for (let count = 1; count <= MAX_TRY; count++) {
  const userPass = prompt('Password: ');

  if (GOOD_PASSWORD === userPass) {
    console.log('Пароль верный');
    break;
  }
} */

/* 
  2. Найти факториал числа
*/

function factorial(number) {
  if (number < 0 || typeof number === 'undefined') {
    return null;
  }

  if (number === 0) {
    return 1;
  }

  if (number >= MAX_SAFE_FACTORIAL) {
    return false;
  }

  let result = 1n;

  for (let i = 1; i <= number; i++) {
    result *= BigInt(i); //convert to BigInt
  }

  return result;
}

/* 
  3. Функция возведения числа в степень. Использовать цикл.
*/

function power(base, powerNumber) {
  if (powerNumber < 0) { // case for negative power
    return 1 / power(base, -powerNumber);
  }

  if (powerNumber === 0) {
    return 1;
  }
  if (powerNumber === 1) {
    return base;
  }

  let result = 1; // Отдельная переменная, в которую помещаем результат работы

  for (let i = 0; i < powerNumber; ++i) {
    result *= base;
  }
  return result;
}
