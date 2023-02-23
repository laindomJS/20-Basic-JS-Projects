import { $, displayNums, cleanScreen, addDecimal, setStates, executeCalculate } from './calc.js';

const calculator = $('.calculator');
const keys = calculator.querySelector('.buttons__grid');
const display = $('#display');

keys.addEventListener('click', (evt) => {
	const key = evt.target;
	const keyContent = key.textContent;
	const keyAction = key.dataset.action;
	const numbersDisplay = display.textContent;

	displayNums(keyAction, numbersDisplay, display, keyContent);
	cleanScreen(keyAction, display, calculator);
	addDecimal(keyAction, display, numbersDisplay);
  setStates(calculator, keyAction, numbersDisplay, display);
  executeCalculate(keyAction, calculator, display, numbersDisplay);
})
