import { displayNums, cleanScreen, addDecimal, setStates, $ } from './calc.js';

const calculator = $('.calculator');
const keys = calculator.querySelector('.buttons__grid');
const display = $('#display');

keys.addEventListener('click', (evt) => {
	const key = evt.target;
	const keyContent = key.textContent;
	const keyAction = key.dataset.action;
	const numbersDisplay = display.textContent;

	displayNums(keyAction, numbersDisplay, display, keyContent);
	cleanScreen(keyAction, display);
	addDecimal(keyAction, display, numbersDisplay);
  setStates(calculator, keyAction, numbersDisplay, display);


  if (keyAction === 'calculate') {
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const secondValue = numbersDisplay;

    if (operator === 'add') {
      console.log(parseFloat(firstValue) + parseFloat(secondValue));
    }
  }
  

})
