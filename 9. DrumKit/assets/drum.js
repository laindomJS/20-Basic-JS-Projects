export function sound(e) {
  let key = e.key;

  switch (key) {
    case 'a': 
      let boom = new Audio('assets/sounds/boom.wav');
      boom.play();
      break;
    
    case 's': 
      let clap = new Audio('assets/sounds/clap.wav');
      clap.play();
      break;

    case 'd': 
      let hihat = new Audio('assets/sounds/hihat.wav');
      hihat.play();
      break;
    
    case 'f': 
      let kick = new Audio('assets/sounds/kick.wav');
      kick.play();
      break;

    case 'g': 
      let openhat = new Audio('assets/sounds/openhat.wav');
      openhat.play();
      break;
    
    case 'h': 
      let ride = new Audio('assets/sounds/ride.wav');
      ride.play();
      break;

    case 'j': 
      let snare = new Audio('assets/sounds/snare.wav');
      snare.play();
      break;

    case 'k': 
      let tink = new Audio('assets/sounds/tink.wav');
      tink.play();
      break;

    case 'l': 
      let tom = new Audio('assets/sounds/tom.wav');
      tom.play();
      break;
      
    default: 
      return;  
  }
}


export function animation(e) {
  let key = e.target;
  key.style.transform = 'scale(1.2)';

  setTimeout(() => { 
    key.style.transform = '';
  }, 400)
}