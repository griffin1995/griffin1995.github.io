// // import Swiper JS
// import Swiper from 'swiper';
import Swiper from "swiper";
// // import Swiper styles
// import 'swiper/css';
// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

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