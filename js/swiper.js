var swiper = new Swiper('.swiper1', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});

var swiper2 = new Swiper('.swiper2', {
  slidesPerView: 3,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
});