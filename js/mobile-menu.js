const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBtnOpen = document.querySelector(".js-menu-btn-open");
const mobileMenuBtnClose = document.querySelector(".js-menu-btn-close");

const toggleMobileMenu = () => mobileMenu.classList.toggle("is-open");

mobileMenuBtnOpen.addEventListener("click", toggleMobileMenu);
mobileMenuBtnClose.addEventListener("click", toggleMobileMenu);
