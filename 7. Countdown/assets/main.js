const $ = selector => document.querySelector(selector); // HELPER

const $days = $('#days');
const $hours = $('#hours');
const $minutes = $('#minutes');
const $seconds = $('#seconds');
const $message = $('#message');

const finalDate = new Date('12 25, 2023 00:00:00').getTime();

let interval = setInterval(function(){
    const actualDate = new Date().getTime();
    let distance = finalDate - actualDate;

    //CALCULATE DAYS, HOUR, MINUTES & SECONDS
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    if(distance < 0){
      clearInterval(interval);
      $message.style.transform = 'translateY(0)';
    }
}, 1000);

