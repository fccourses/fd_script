// const userName = prompt("Enter your name, please");

const sayHelloTo = function (name) {
  const alertText = 'Hello, ' + name;
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

/**
 *
 * @param {number} a - first coef
 * @param {number} b - second coef
 * @param {number} c - third coef
 * @returns { null | number[] } - result
 */
const solveSquareEquation = function (a, b, c) {
  const checkValues = a - b - c;

  if (isNaN(checkValues)) {
    return null;
  }

  const d = b * b - 4 * a * c;

  if (d < 0) {
    return null;
  }

  if (d === 0) {
    const x = -b / (2 * a);
    return [x, x];
  }

  if (d > 0) {
    const dSqrt = d ** (1 / 2);

    const x1 = (-b - dSqrt) / (2 * a);
    const x2 = (-b + dSqrt) / (2 * a);

    return [x1, x2];
  }
};

const result = solveSquareEquation(1, 6, 5);

console.log(result);
