'use strict';


/* 
  1. Спрашивать у пользователя пароль до тех пор,
  пока он не введёт правильный пароль,
  1.2 Ограничить число попыток ввода до 5.
*/

let count = 1;

while (count <= MAX_TRY) {
  count++;
  const userPass = prompt('Password: ');

  if (GOOD_PASSWORD === userPass) {
    console.log('Пароль верный');
    break;
  }
}

/* 
  2. Найти факториал числа
 */
