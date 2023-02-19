export const $ = (selector) => document.querySelector(selector); // HELPER 

export const displayNums = (action, numbersDisplay, display, keyNumber) => {
  if (!action) {
    if(numbersDisplay === '0') {
      display.textContent = keyNumber;
    } else {
      display.textContent = numbersDisplay + keyNumber;
    }
  }
}

export const cleanScreen = (action, display) => {
  if (action === 'clear') {
    display.textContent = '0';
  }
}

export const addDecimal = (action, display, numbersDisplay) => {
  if (action === 'decimal') {
    display.textContent = numbersDisplay + '.';
  }
}

export const setStates = (calculator, action, numbersDisplay, display) => {
  
  if (
		action === 'add' ||
		action === 'subtract' ||
		action === 'multiply' ||
		action === 'divide'
	) {
    if (calculator.dataset.state !== 'operator') {
      calculator.dataset.state = 'operator';
      calculator.dataset.operator = action;
      calculator.dataset.firstValue = numbersDisplay;
      display.textContent = '0';    
    }
  }
}

export const calculate = (n1, operator, n2) => {
  let result = '';
  const firstNum = parseFloat(n1);
  const secondNum = parseFloat(n2);

  if (operator === 'add') result = firstNum + secondNum;
  if (operator === 'subtract') result = firstNum - secondNum;
  if (operator === 'multiply') result = firstNum * secondNum;
  if (operator === 'divide') result = firstNum / secondNum;

  return result;
}


export const executeCalculate = (action, calculator, display, numbersDisplay) => {
  const firstValue = calculator.dataset.firstValue;
  const operator = calculator.dataset.operator;
  const secondValue = numbersDisplay;
  
  if (action === 'calculate') { 
    display.textContent = calculate(firstValue, operator, secondValue);
  }
}