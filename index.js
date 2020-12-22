const userInput = +prompt('Выберите позицию меню:\n1-Чай\n2-кофе\n3-капучино');

switch (userInput) {
  case 1: {
    console.log('чай');
    break;
  }
  case 2: {
    console.log('кофе');
    break;
  }
  case 3: {
    console.log('капучино');
    break;
  }
  default: {
    console.log('Попробуйте ещё раз');
  }
}

console.log('end of script');
