let mobileMenuIcon = document.querySelector(".toggle-icon");

let nav = document.querySelector(".nav");

mobileMenuIcon.addEventListener("click", () =>
  nav.classList.toggle("nav-mobile")
);
