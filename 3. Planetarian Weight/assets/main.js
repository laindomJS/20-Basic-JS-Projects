const $ = (selector) => document.querySelector(selector); // HELPER

// DOM ELEMENTS
const userWeight = $('#weight');
const userSelection = $('#planets');
const button = $('#btn');
const message = $('#result');
// 

const earthGravity = 9.8;
const planets = {
  'earth': earthGravity,
  'mars' : 3.7,
  'jupiter': 24.7,
  'saturn': 10.4,
}

let weight;
let planet;
let result;

userWeight.addEventListener('input', (evt) => {
  weight = parseInt(evt.target.value);
})

userSelection.addEventListener('change', (evt) => {
  planet = evt.target.value;
})

button.addEventListener('click', () => {
  result = weight * planets[planet]; 
  message.innerHTML = `Your weight in ${planet} is ${result.toLocaleString()}kg`;
})
