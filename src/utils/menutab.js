const header = document.querySelector('.header1');
const menuToggle = document.getElementById('header__bars');
const mobileNav = document.querySelector('.mobile-nav');

let lastScrollTop = 0;


window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {

    header.style.top = "-100px";
  } else {

    header.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});