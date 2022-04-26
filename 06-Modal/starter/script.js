'use strict';

// variable declaration

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.btn');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//function declaration

const openModal = function () {
  console.log('Open button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  console.log('Modal closed');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// event listner for opening/closing modal with click

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// event listener for closing modal with escape key

document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
  console.log(e.key);
});
