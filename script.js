function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// JS for toggling menu
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}