'use strict';

///////////////////////////////////////
// Modal window
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
let roor = document.getRootNode();
console.log(roor);
let bu = document.getElementsByTagName('button');
console.log(bu);
const modal = document.querySelectorAll('.modal');
console.log(modal[0].classList);
const overlay = document.querySelectorAll('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// console.log(btnCloseModal);
// console.log(btnsOpenModal);

const openModal = function (e) {
  e.preventDefault();

  //console.log(e.preventDefault());
  //e.preventDefault();
  modal[0].classList.remove('hidden');
  overlay[0].classList.remove('hidden');
};

const closeModal = function () {
  modal[0].classList.add('hidden');
  overlay[0].classList.add('hidden');
};
btnsOpenModal.forEach(val => val.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
//for (let i = 0; i < btnsOpenModal.length; i++)  

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
// const mydiv = document.getElementById('section--1');
// mydiv.insertAdjacentHTML('beforebegin', "<h1>vishnu</h1>");
// mydiv.insertAdjacentHTML('afterbegin', "<h1>vishnu</h1>");
// mydiv.insertAdjacentHTML('beforeend', "<h1>vishnu</h1>");
// mydiv.insertAdjacentHTML('afterend', "<h1>vishnu</h1>");
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('.cookie-message');
message.innerHTML = 'we use cookie for improved funcationality and analytices <button class="btn btn--close-cookie">Got it!</button>';
//like this we can add for first child 
header.prepend(message);
header.append(message);
//header.prepend(message.cloneNode(true));//like this we can add for last child   latest change with the append or prepend will work . here prepend comes first it will try to add on first and same element will append last because same element cannot be at same place simulteneously
document.querySelector('.btn--close-cookie').addEventListener('click', () =>
{
  console.log('message ref has been deleted', message);
  message.remove();
})
message.remove();
message.style.width='110%'
console.log(getComputedStyle(message).color);
message.style.backgroundColor = '#37383d';
console.log((message.style.color = 'white'))

//document.querySelector('.vishnu').style.color = '#ffffff';
// document.querySelector('.vishnu').style.backgroundColor = '#37383d';
// document.querySelector('.vishnu').style.textAlign = 'center'
// const bod = document.getElementsByTagName('body');
// //console.log(bod.style.color)  //as i know we cannot access inline styles directly selecting style
// console.log(getComputedStyle(header).color)

//accessing the css variables, accessing the css variables like accessing js variables

//document.documentElement.style.setProperty('--color-primary','orangered')

// //we can access all the attributes of any element if it is standered one  ex:-
// const ref= document.querySelector('.nav__logo');
// console.log(ref.alt);
// console.log(ref.className);
// console.log(ref.src);
// console.log(ref.designer);
// console.log(ref.getAttribute('designer'))

//const vle = document.querySelector('.vijay');
//vle.setAttribute('style','background-color:red')


let scroll = document.querySelector('.btn--scroll-to');
let section1 = document.querySelector('#section--1');

scroll.addEventListener('click', (e) =>
{
  console.log(section1.getBoundingClientRect());
  console.log(scroll.getBoundingClientRect());
  console.log('current scroll at', window.pageXOffset, window.pageYOffset);
})

