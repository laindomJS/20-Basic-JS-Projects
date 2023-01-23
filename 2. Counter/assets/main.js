const $ = (selector) => document.querySelector(selector); // HELPER

let count = 0;

const counter = $('#count');
const decrease = $('#decrease');
const reset = $('#reset');
const increase = $('#increase');

decrease.addEventListener('click', () => {
  count--;
  counter.innerHTML = count;
})

reset.addEventListener('click', () => {
  count = 0;
  counter.innerHTML = count;
})

increase.addEventListener('click', () => {
  count++;
  counter.innerHTML = count;
})