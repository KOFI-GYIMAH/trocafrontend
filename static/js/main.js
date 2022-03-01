(function () {
  "use strict";

  //  PreLoader
  window.onload = function () {
    window.setTimeout(fadeout, 200);
  }

  function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
  }

  // Sticky NavBar
  window.onscroll = function () {
    let header_navbar = document.querySelector(".navbar-area");
    let sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
    }
    else {
      header_navbar.classList.remove("sticky");
    }

    // Show/Hide Back-To-Top Button
    let backToTop = document.querySelector(".scroll-top");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTop.style.display = "flex";
    }
    else {
      backToTop.style.display = "none";
    }
  };

  // Mobile Menu Btn
  let navbarToggler = document.querySelector(".mobile-menu-btn");

  navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle("active");
  });
    
  // Activate WOW JS
  new WOW().init();
})();

