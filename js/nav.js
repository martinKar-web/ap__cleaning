const burger = document.querySelector('.burger');
const nav_list = document.querySelector('.nav-list');
const nav_links = document.querySelectorAll('.nav-link');

// burger lines
const burgerTopLine = document.querySelector('.burger__line1')
const burgerMiddleLine = document.querySelector('.burger__line2')
const burgerBottomLine = document.querySelector('.burger__line3')

burger.addEventListener('click', () => {
  nav_list.classList.toggle('active');
  burgerTopLine.classList.toggle('topLine');
  burgerBottomLine.classList.toggle('bottomLine');
})

nav_links.forEach(nav_link => {
  nav_link.addEventListener('click', (e) => {
    nav_list.classList.remove('active');
    console.log('clicked');
  })
})