
const getSumOfTwo = function (value1, value2) {
  //function expression

  const num1 = +value1;
  const num2 = +value2;

  const result = num1 + num2;


  if (!isNaN(result)) {
    return result;
  }
  return false;
};

console.log(num1); // error

const result = getSumOfTwo(12, 22);
console.log(result);


