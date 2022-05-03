var swiper = new Swiper(".mySwiper", {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoHeight: false,
    speed: 800,
    preloadImages: false,
    lazy: true,
    loop: true,
    slidesPerView: 3,
    centeredSlidesBounds: true,
  });