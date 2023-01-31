const $ = selector => document.querySelector(selector); // HELPER

const btn = $('#random');
const body = document.body;
const colors = ['#c72e2e', '#b6ee5c', '#d8ee5c', '#28d150', '#289cd1', '#7d28d1', '#d1285e', '#40ead1', '#eae440', '#eac240'];

btn.addEventListener('click', () => {
  body.style.backgroundColor = colors[Math.round(Math.random() *10)];
})

