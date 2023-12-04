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

/**================================== SHOW SCROLL UP====================================================== */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/**=====================================SCROLL SECTIONS ACTIVE LINK================================ */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*====================DARK LIGHT THEME=================================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/**============================SCROLL REVEAL ANIMATION================================================= */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true, //aniamtions repeat
});

sr.reveal(
  `.home__data, .featured__container, .new__container, .join__data, .testimonial__container, .footer`
);
sr.reveal(`.home__images`, { delay: 600 });
sr.reveal(`.service__card`, { interval: 100 });
sr.reveal(`.discount__data`, { origin: `left` });
sr.reveal(`.discount__images`, { origin: `right` });
