// scripts/navbar.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle the menu when hamburger is clicked
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("nav-active");
  });

  // Close the menu when a nav link is clicked
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("nav-active");
    });
  });
});
