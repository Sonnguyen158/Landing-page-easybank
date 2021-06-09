const btnHumburger = document.querySelector('#btnHumburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElement = document.querySelectorAll('.has-fade');

btnHumburger.addEventListener('click', function() {
  if(header.classList.contains('open')) { //Close omenu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElement.forEach(function(element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  }
  else {  //Open menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElement.forEach(function(element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
})
