const userInput = +prompt('Выберите позицию меню:\n1-Чай\n2-кофе\n3-капучино');

if (isNaN(userInput)) {
} else if (userInput === 1) {
  console.log('Вы выбрали чай');
} else if (userInput === 2) {
  console.log('Вы выбрали кофе');
} else if (userInput === 3) {
  console.log('Вы выбрали Капучино');
} else {
  console.log('Попробуйте ещё раз');
}

console.log('end of script');
