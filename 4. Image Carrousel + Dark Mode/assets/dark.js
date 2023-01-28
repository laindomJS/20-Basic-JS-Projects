const btnToggle = $('#darkBtn');
const preferDarkScheme = window.matchMedia('(prefers-color-scheme:dark)');

btnToggle.addEventListener('click', () => {
  if(preferDarkScheme.matches) {
    document.body.classList.toggle('light-theme');
  } else {
    document.body.classList.toggle('dark-theme');
  }
})