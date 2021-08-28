let swiper = new Swiper('.hero__slide', {
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },
  autoplay: {
        delay: 4000,
        disableOnInteraction: true,
  },
  loop: true,
  effect: "slide",
  speed: 1500,
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
  breakpoints: {
    // when window width is >= 480px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    20: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  }
});