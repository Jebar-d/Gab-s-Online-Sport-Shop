export default function mobileNav() {
    const headerBtn = document.querySelector('.header__bars') || document.getElementById('menu-toggle');
    const mobileNavMenu = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  
    if (!headerBtn || !mobileNavMenu) return;
  
    let isMobileNavOpen = false;
  
    headerBtn.addEventListener('click', () => {
      isMobileNavOpen = !isMobileNavOpen;
      if (isMobileNavOpen) {
        mobileNavMenu.classList.add('active');
        document.body.style.overflowY = 'hidden';
      } else {
        mobileNavMenu.classList.remove('active');
        document.body.style.overflowY = 'auto';
      }
    });
  
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        isMobileNavOpen = false;
        mobileNavMenu.classList.remove('active');
        document.body.style.overflowY = 'auto';
      });
    });
  }