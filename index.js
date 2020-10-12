// let heroImage = document.getElementById("hero-img");
let heading = document.getElementById("heading");
let subHeading = document.getElementById("sub-heading");
let navList = document.getElementById("nav-list");
let nav = document.getElementById("nav");
let navLink = document.getElementsByClassName("nav-link");
let navTop = document.getElementsByClassName("nav-top");
let mainScroll = document.getElementById("main-scroll");
let ubachHidden = document.getElementById("ubach-hidden");
let showUbach = document.getElementById("full-hidden-ubach");
let eschweilerHidden = document.getElementById("eschweiler-hidden");
let showEschweiler = document.getElementById("full-hidden-eschweiler");
let responsiveNav = document.getElementById("burger");
let offset = nav.offsetTop;

nav.addEventListener("click", function () {
  nav.classList.toggle("nav-top-responsive");
});

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  heading.style.top = value * 0.4 + "px";
  heading.style.opacity = 1 - value / 500;
  subHeading.style.top = value * 0.01 + "px";
  subHeading.style.opacity = 1 - value / 500;

  if (
    document.body.scrollTop > 160 ||
    document.documentElement.scrollTop > 160
  ) {
    mainScroll.classList.add("main-scroll");
    navList.classList.add("scrolling-active");
  } else {
    mainScroll.classList.remove("main-scroll");
    navList.classList.remove("scrolling-active");
  }

  if (window.pageYOffset > offset) {
    nav.classList.remove("nav-bottom");
    nav.classList.add("nav-top");
    navList.classList.add("nav-ul-top");
    for (var i = 0; i < navLink.length; i++) {
      navLink[i].classList.add("nav-link-top");
    }
  } else {
    nav.classList.add("nav-bottom");
    nav.classList.remove("nav-top");
    navList.classList.remove("nav-ul-top");
    for (var i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove("nav-link-top");
    }
  }
});
