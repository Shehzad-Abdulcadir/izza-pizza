// Mobile Nav
const mainNav = document.getElementById('js-menu');
const navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('d-block');
});

// Sticky on scroll
let scrollpos = window.scrollY;
const header = document.getElementById('js-header');
const headerHeight = header.offsetHeight;

const addClassOnScroll = () => header.classList.add('sticky');
const removeClassOnScroll = () => header.classList.remove('sticky');

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= headerHeight) {
    addClassOnScroll();
  } else {
    removeClassOnScroll();
  }
});
