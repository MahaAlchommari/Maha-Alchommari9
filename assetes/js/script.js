const nav = document.querySelector(".ma-list");
const hamburger = document.querySelector(".ma-hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("ma-ul--open");
  hamburger.classList.toggle("ma-hamburger--open");
});
