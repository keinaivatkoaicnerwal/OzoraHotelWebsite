var swiper1 = new Swiper(".mySwiper1", {
  effect: "fade",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  effect: "slide",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper4 = new Swiper(".mySwiper4", {
  effect: "slide",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2200,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
});

var swiper5 = new Swiper(".mySwiper5", {
  direction: "vertical",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
  },
});


window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.toggle("sticky", window.scrollY > 0);
  } else {
    header.classList.remove("sticky");
  }
});


const navbar = document.getElementById('navbar')
function openSidebar(){
  navbar.classList.add('show')
}
function openSidebar(){
  navbar.classList.remove('show')
}

const nav = document.querySelector(`nav`);
window.addEventListener(`scroll`,function(){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add(`sticky`)
  }
  else{
    nav.classList.remove(`sticky`)
  }
})