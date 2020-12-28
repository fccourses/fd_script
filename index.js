'use strict';

const num1 = +prompt('first number');
const num2 = +prompt('second number');

// alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2));

function getTemplateDescription() {
  return 'Math operation is:';
}

alert(`${getTemplateDescription()}
${num1} + ${num2} = ${num1 + num2}`);
