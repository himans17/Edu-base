// Bnanner slider 1
$("#banner-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots:false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});


$(function () {
  $("#ChangeToggle").click(function () {
    $("#navbar-hamburger").toggleClass("hidden");
    $("#navbar-close").toggleClass("hidden");
  });
});

// Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    230: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    435: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


