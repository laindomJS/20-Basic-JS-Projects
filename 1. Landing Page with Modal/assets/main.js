const $ = (selector) => document.querySelector(selector); // HELPER

const btnOpen = $('#button');
const modal = $('#modal');
const btnClose = $('#close');

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
 
btnOpen.addEventListener('click', () => {
  showModal();
}); 

btnClose.addEventListener('click', () => {
  closeModal();
})