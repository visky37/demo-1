const toggleTheme = document.querySelector(".toggle-theme");
const toggleHamburger = document.querySelector(".toggle-hamburger");
const wMobileMenu = document.querySelector(".w-mobile-menu");
const blankActive = document.querySelector(".blank-active");
const deskTheme = document.querySelector(".label");

toggleTheme.addEventListener("click", function() {
  toggleTheme.classList.toggle("actived");
});

toggleHamburger.addEventListener("click", function() {
  toggleHamburger.classList.toggle("active");
  wMobileMenu.classList.toggle("active");
  blankActive.classList.toggle("active");
  console.log(blankActive);
});

blankActive.addEventListener("click", function() {
  toggleHamburger.classList.remove("active");
  wMobileMenu.classList.remove("active");
  blankActive.classList.remove("active");
}); 

deskTheme.addEventListener("click", function() {
  deskTheme.classList.toggle("activedit");
});
