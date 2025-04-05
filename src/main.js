import '/styles/style.css'
import '/styles/header.css'
import '/styles/hero.css'
import '/styles/product.css'
import '/styles/about.css'
import '/styles/contact.css'
import '/styles/footer.css'
import '/styles/mobile-nav.css'

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling Down - Hide Header
        header.classList.add("hidden-header");
    } else {
        // Scrolling Up - Show Header
        header.classList.remove("hidden-header");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

function smoothScroll(target, duration) {
    let targetElement = document.querySelector(target);
    let targetPosition = targetElement.offsetTop;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute("href"), 800);
    });
});