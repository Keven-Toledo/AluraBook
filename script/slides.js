const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  slidesPerView: 3,
  loop: 'True',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});