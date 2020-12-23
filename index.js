const getUserInput = function () {
  const userInput = prompt('Чтото введите:');

  /*   if (userInput) {
    return userInput;
  }
  return 'Вы ничего не ввели'; */
  return userInput ? userInput : 'Вы ничего не ввели';
};

const result = getUserInput();

console.log(result);
