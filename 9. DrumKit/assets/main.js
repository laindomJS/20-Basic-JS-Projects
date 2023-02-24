import { sound, animation } from "./drum.js";

const $ = (selector) => document.querySelectorAll(selector); // HELPER
const buttons = $('.btn');

buttons.forEach(btn => {
  btn.addEventListener('keydown', (e) => {
    sound(e);
    animation(e);
  })
})


