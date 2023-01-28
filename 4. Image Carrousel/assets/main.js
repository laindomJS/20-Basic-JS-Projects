const $ = (selector) => document.querySelector(selector); // HELPER

const btnPrev = $('#btnPrev');
const btnNext = $('#btnNext');
const track = $('#track');
const slickList = $('#slickList');
const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

btnPrev.addEventListener('click', () => move(1));
btnNext.addEventListener('click', () => move(2));

function move(value) {
  const trackWidth = track.offsetWidth;
  const listWidth = slickList.offsetWidth;

  track.style.left == "" 
  ? leftPosition = track.style.left = 0
  : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1)

  if(leftPosition < (trackWidth - listWidth) && value == 2) {
    track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
  } else if (leftPosition > 0 && value == 1) {
    track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
  }
}