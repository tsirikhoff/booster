const swiper = new Swiper(".swiper", {
  // Optional parameters
  spaceBetween: 20,
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  // slidesPerGroup: 4,
  // breakpoints: {
  //   // when window width is >= 320px
  //   600: {
  //     slidesPerView: 3,
  //     // spaceBetween: 20,
  //   },
  //   1320: {
  //     slidesPerView: 4,
  //     // spaceBetween: 20,
  //   },
  // },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  // And if we need scrollbar
});

let card = document.querySelector(".top__button");
card.addEventListener("click", function () {
  console.log("from Js");
});
