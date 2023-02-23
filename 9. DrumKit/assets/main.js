import { sound } from "./drum.js";

const $ = (selector) => document.querySelectorAll(selector); // HELPER
const buttons = $('button');

buttons.forEach(btn => {
  btn.addEventListener('keydown', (e) => {
    sound(e);
  });
})


