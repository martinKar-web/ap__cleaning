const burger = document.querySelector('.burger');
const nav_list = document.querySelector('.nav-list');
const nav_links = document.querySelectorAll('.nav-link');

console.log(nav_links);

burger.addEventListener('click', () => {
  nav_list.classList.toggle('active');
})

nav_links.forEach(nav_link => {
  nav_link.addEventListener('click', (e) => {
    nav_list.classList.remove('active');
    console.log('clicked');
  })
})