/* const userInput1 = +prompt("Введите число 1:");
const userInput2 = +prompt("Введите число 2:");
 */
const getSumOfTwo = function () {//function expression

  const result = userInput1 + userInput2;

  if (!isNaN(result)) {
    return result;
  }
  return false;
};


const washMachine = function( mode, temperature, rpm, powder, values ){
  //do some stuff
  //return clean values
}


const boxWithCleanClothers = washMachine('soft', 35, 800, 'Percil', 'dirty clothers');
