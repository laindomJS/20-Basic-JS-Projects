const $ = (selector) => document.querySelector(selector); // HELPER

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


// DOM ELEMENTS
const userWeight = $('#weight');
const userSelection = $('#planets');
const button = $('#btn');
const message = $('#result');
// DOM ELEMENTS


// EVENTS LISTENERS 
userWeight.addEventListener('input', (evt) =>  weight = parseInt(evt.target.value));
userSelection.addEventListener('change', (evt) => planet = evt.target.value);

button.addEventListener('click', () => {
  if(planet === undefined || weight === undefined) {
    message.innerHTML = 'Not specified planet or weight';
  } else {
    result = weight * planets[planet];   
    message.innerHTML = `Your weight in ${planet} is ${result.toLocaleString()}kg`;
  }
})
// EVENT LISTENERS


