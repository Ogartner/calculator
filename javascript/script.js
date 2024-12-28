// GLOBAL
const display = document.querySelector('.display');
const displayContent = document.querySelector('.display-content');
const numPad = document.querySelectorAll('ul');
const numBtn = document.querySelectorAll('.num');
const operatorBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal-btn');

let num1;
let num2;
let operator;

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

const pressNumBtn = () => {
  numBtn.forEach((element, i) => {
    element.addEventListener('click', (e) => {
      if (i === 9) {
        displayContent.innerHTML += 0;
      } else {
        displayContent.innerHTML += i + 1;
      }
    });
  });
};

const pressOperatorBtn = () => {
  operatorBtn.forEach((element, i) => {
    element.addEventListener('click', (e) => {
      num1 = Number(displayContent.innerHTML);
      setTimeout(() => {
        display.classList.toggle('flash');
      }, 250);
      displayContent.innerHTML = '';
      display.classList.toggle('flash');

      switch (i) {
        case 0:
          operator = '+';
          break;
        case 1:
          operator = '-';
          break;
        case 2:
          operator = '*';
          break;
        case 3:
          operator = '/';
          break;
      }
    });
  });
};

const pressEqualBtn = () => {
  equalBtn.addEventListener('click', () => {
    num2 = Number(displayContent.innerHTML);
    setTimeout(() => {
      display.classList.toggle('flash-b');
    }, 250);
    display.classList.toggle('flash-b');
    num1 = operate(num1, num2, operator);
    displayContent.innerHTML = `${num1}`;
  });
};

const init = () => {
  pressNumBtn();
  pressOperatorBtn();
  pressEqualBtn();
};

init();
