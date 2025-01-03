// GLOBAL
const display = document.querySelector('.display');
const displayContent = document.querySelector('.display-content');
const numPad = document.querySelectorAll('ul');
const numBtn = document.querySelectorAll('.num');
const operatorBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal-btn');
const clearBtn = document.querySelector('.clear-btn');

let temp;
let num;
let num1;
let num2;
let operator;
let numList = [];

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
      if (displayContent.innerHTML.length === 11) {
        return;
      } else if (i === 9) {
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
      numList.push(Number(displayContent.innerHTML));
      console.log(numList.length);
      if (numList.length === 2) {
        setTimeout(() => {
          display.classList.toggle('flash-operator');
        }, 250);
        console.log(operator);
        num1 = operate(numList[0], numList[1], operator);
        displayContent.innerHTML = num1;
        numList.pop();
        numList[0] = num1;
        console.log(num1);
        display.classList.toggle('flash-operator');
      } else {
        num1 = numList[0];
        setTimeout(() => {
          display.classList.toggle('flash-operator');
        }, 250);
        display.classList.toggle('flash-operator');
      }
      displayContent.innerHTML = '';

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
      display.classList.toggle('flash-equal');
    }, 250);
    display.classList.toggle('flash-equal');
    num = operate(num1, num2, operator);
    if (num === Infinity) {
      displayContent.innerHTML = 'Infinity';
      numList.pop();
    } else if (num > 99999999999) {
      num = 99999999999;
      displayContent.innerHTML = Math.round(num * 100) / 100;
      numList.pop();
    } else if (num < -99999999999) {
      num = -99999999999;
      displayContent.innerHTML = Math.round(num * 100) / 100;
      numList.pop();
    } else {
      displayContent.innerHTML = Math.round(num * 100) / 100;
      numList.pop();
    }
  });
};

const pressClearBtn = () => {
  clearBtn.addEventListener('click', () => {
    setTimeout(() => {
      display.classList.toggle('flash-clear');
    }, 150);
    display.classList.toggle('flash-clear');
    displayContent.innerHTML = '';
    num1 = 0;
    numList.pop();
  });
};

const init = () => {
  pressNumBtn();
  pressOperatorBtn();
  pressEqualBtn();
  pressClearBtn();
};

init();
