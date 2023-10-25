var swiper = new Swiper(".card_slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: "false",
      pauseOnMouseEnter: "true",
    },
    slidesPerGroup: 1,
    loop: "true",
    loopFillGroupWithBlank: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 2,
      },
    },
  });
  
  swiper.destroy(true, true);
  swiper = new Swiper(".card_slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: "false",
      pauseOnMouseEnter: "true",
    },
    slidesPerGroup: 1,
    loop: "true",
    loopFillGroupWithBlank: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 2,
      },
    },
  });