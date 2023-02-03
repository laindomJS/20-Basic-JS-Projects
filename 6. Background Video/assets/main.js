const $ = (selector) => document.querySelector(selector); // HELPER

const btn = $('#playPause');
const video = $('#vid');

btn.addEventListener('click', () => {
  if(video.paused) {
    video.play();
    btn.innerHTML = 'Pause';
  } else {
    video.pause();
    btn.innerHTML = 'Play';
  }
})

