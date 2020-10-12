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

function initMap() {
  // The location of Ubach
  var ubach = { lat: 50.924903, lng: 6.101769 };
  // The map, centered at Ubach
  var map = new google.maps.Map(document.getElementById("map-ubach"), {
    zoom: 16,
    center: ubach,
  });
  // The marker, positioned at Eschweiler
  var marker = new google.maps.Marker({ position: ubach, map: map });
  // The location of Eschweiler
  var eschweiler = { lat: 50.822623, lng: 6.24575 };
  // The map, centered at Eschweiler
  var map = new google.maps.Map(document.getElementById("map-eschweiler"), {
    zoom: 16,
    center: eschweiler,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: eschweiler, map: map });

  // The location of Eschweiler
  var julich = { lat: 50.921144, lng: 6.356142 };
  // The map, centered at Eschweiler
  var map = new google.maps.Map(document.getElementById("map-julich"), {
    zoom: 16,
    center: julich,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: julich,
    map: map,
  });
}
