// const userName = prompt("Enter your name, please");

const sayHelloTo = function (name) {
  const alertText = "Hello, " + name;
  alert(alertText);
};

// const res = sayHelloTo(userName);

/* 
  1. Функция, которая вернёт максимальное значение из 2. 
      Значения брать у пользователя.
  2. Функция, которая вернёт минимальное значение из 2.
      Значения брать у пользователя.

  3. Функция, которая определяет чётность числа.

  (*4. Которая решает квадратные уравнения)
*/

const getMax = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
};

const getMin = function (num1, num2) {
  if (num1 < num2) {
    return num1;
  }
  return num2;
};

const isEven = function (num) {
  return num % 2 === 0;
};
