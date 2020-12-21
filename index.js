const userInput1 = prompt("Введите число 1:");
const userInput2 = prompt("Введите число 2:");

const userNumber1 = +userInput1;
const userNumber2 = +userInput2;

const result = userNumber1 + userNumber2;

const verdict = isNaN(result);

if (verdict) {
  alert("Вы ввели не числа");
} else {
  alert(result);
}
