const $ = (selector) => document.querySelector(selector); // HELPER

const btn = $('#button');
const modal = $('#modal');
const close = $('#close');

let condition = true;

function showModal() {
  if(condition) {
    modal.style.transform = 'translateX(0px)';
    condition = false;
  }
}

function closeModal() {
  if(!condition) {
    modal.style.transform = 'translateX(-1000px)';
    condition = true;
  }
}
 
btn.addEventListener('click', () => {
  showModal();
}); 

close.addEventListener('click', () => {
  closeModal();
})