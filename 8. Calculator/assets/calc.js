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

export const addFirstValue = (calculator, action, numbersDisplay, display) => {
  
  let firstValue;
  let operator;
  
  if (
		action === 'add' ||
		action === 'subtract' ||
		action === 'multiply' ||
		action === 'divide'
	) {
    if(calculator.dataset.state !== 'operator') {
      calculator.dataset.state = 'operator';
      calculator.dataset.operator = action;
      firstValue = numbersDisplay;
      operator = calculator.dataset.operator;
      display.textContent = '0';    
    }
    return { firstValue, operator }
  }

}