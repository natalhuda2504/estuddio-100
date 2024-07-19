// src/assets/js/general.js

/**
   * Preloader
   */
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectHeader.classList.add('header-scrolled') : selectHeader.classList.remove('header-scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

/**
 * Animation on scroll function and init
 */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

/**
 * Navmenu Scrollspy
 */
// let navmenulinks = document.querySelectorAll('.navmenu a');

// function navmenuScrollspy() {
//   navmenulinks.forEach(navmenulink => {
//     if (!navmenulink.hash) return;
//     let section = document.querySelector(navmenulink.hash);
//     if (!section) return;
//     let position = window.scrollY + 200;
//     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
//       document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
//       navmenulink.classList.add('active');
//     } else {
//       navmenulink.classList.remove('active');
//     }
//   })
// }
// window.addEventListener('load', navmenuScrollspy);
// document.addEventListener('scroll', navmenuScrollspy);
