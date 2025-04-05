const header = document.querySelector('.header1');
const menuToggle = document.getElementById('header__bars');
const mobileNav = document.querySelector('.mobile-nav');

let lastScrollTop = 0;

// Show/hide header on scroll
window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll down
    header.style.top = "-100px";
  } else {
    // Scroll up
    header.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Toggle mobile nav
menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});