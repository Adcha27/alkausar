const navbar = document.querySelector(".fixed-top");
window.onscroll = () => {
  if (window.scrollY = 0) {
    navbar.classList.add("scroll-nav-active");
  } else {
    navbar.classList.add("scroll-nav-active");
  }
};
