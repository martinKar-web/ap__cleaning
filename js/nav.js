//const burger = document.querySelector('.burger');
const nav_list = document.querySelector('.nav-list');
const nav_links = document.querySelectorAll('.nav-link');

//burger.addEventListener('click', () => {
//  nav_list.classList.toggle('active');
//  burgerTopLine.classList.toggle('topLine');
//  burgerBottomLine.classList.toggle('bottomLine');
//})

//* Hide navigation when link is clicked
nav_links.forEach(nav_link => {
  nav_link.addEventListener('click', (e) => {
    nav_list.classList.remove('active');
    console.log('clicked');
  })
})

// burger animation
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {

    menuBtn.classList.add('open');
    menuOpen = true;
    nav_list.classList.add('active');

  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    nav_list.classList.remove('active');
  }
});