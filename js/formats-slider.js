const swiper = new Swiper(".swiper-container", {
  loop: true,
  sliderPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".pagination",
    type: "bullets",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".carousel-button__next",
    prevEl: ".carousel-button__prev",
  },
});
