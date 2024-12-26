// GLOBAL
const displayContent = document.querySelector('.display-content');
const numPad = document.querySelectorAll('ul');
const num = document.querySelectorAll('.num');

// Addition
const add = (num1, num2) => {
  return num1 + num2;
};

// Subtraction
const subtraction = (num1, num2) => {
  return num1 - num2;
};

// Multiplikation
const multiply = (num1, num2) => {
  return num1 * num2;
};

// Division
const divide = (num1, num2) => {
  return num1 / num2;
};

// Operator
const operate = (num1, num2, operator) => {
  if (operator === '+') {
    return add(num1, num2);
  }
  if (operator === '-') {
    return subtraction(num1, num2);
  }
  if (operator === '*') {
    return multiply(num1, num2);
  }
  if (operator === '/') {
    return divide(num1, num2);
  }
};

num.forEach((element, i) =>
  element.addEventListener('click', (e) => {
    if (i === 9) {
      displayContent.innerHTML = 0;
    } else {
      displayContent.innerHTML = i + 1;
    }
  })
);

console.log(operate(8, 4, '*'));
