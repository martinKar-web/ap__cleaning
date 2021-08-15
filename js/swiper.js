let swiper = new Swiper('.hero__slide', {
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },
  autoplay: {
        delay: 2500,
        disableOnInteraction: true,
  },
  loop:true,
});

let swiper__2 = new Swiper('.services__slide', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  loop: true,
});