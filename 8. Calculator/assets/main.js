const $ = selector => document.querySelector(selector); // HELPER

const calculator = $('.calculator');
const keys = calculator.querySelector('.buttons__grid');
const display = $('#display');


keys.addEventListener('click', (e) => {

  if(e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyPressed = key.textContent;
    const screenNumbers = display.textContent;

    if(!action) {
      if(screenNumbers === '0') {
        display.textContent = keyPressed;
      } else {
        display.textContent = screenNumbers + keyPressed;
      }
    }

    if(action === 'clear') {
      display.textContent = '0';
    }

    if(action === 'decimal') {
      console.log('decimal!')
    }

    if(action === 'calculate') {
      console.log('calculate!');
    }

    if
    (action === 'add' || 
      action === 'subtract' || 
      action === 'multiply' || 
      action === 'divide') {
        console.log('operator!')
    }

  } else {
    alert('You not touch a button!')
  }

})