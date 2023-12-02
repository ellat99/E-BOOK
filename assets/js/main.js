/*=============== SEARCH ===============*/
const searchButton = document.getElementById("search-button");
const searchClose = document.getElementById("search-close");
const searchContent = document.getElementById("search-content");

if (searchButton && searchClose && searchContent) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });

  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

const loginButton = document.getElementById("login-button");
const loginContent = document.getElementById("login-content");
const loginClose = document.getElementById("login-close");
const loginForm = document.querySelector(".login__form");

if (loginButton && loginContent && loginClose && loginForm) {
  loginButton.addEventListener("click", () => {
    loginContent.classList.add("show-login");
  });

  loginClose.addEventListener("click", () => {
    loginContent.classList.remove("show-login");
  });

  loginForm.addEventListener("submit", (event) => {
    // Opriți acțiunea implicită de submit pentru a preveni reincarcarea paginii
    event.preventDefault();
    // Aici puteți adăuga logica pentru autentificare
  });
}

///////////////////////add shadow header/////////////////////////
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

///////////////////////home swiper/////////////////////////

let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});
/**featured swiper */

///////////////////////home swiper/////////////////////////

let swiperFeatured = new Swiper(".featured__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});
/*=====================NEW SWIPER=====================================*/
let swiperNew = new Swiper(".new__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});
/**=============================TESTIMONIAL SWIPER============================ */

let swipertESTIMONIAL = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});
