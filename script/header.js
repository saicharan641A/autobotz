// <!-- Header Scroll Effect -->

function adjustBodyPadding() {
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;
  document.body.style.paddingTop = headerHeight + "px";
}

// Adjust body padding on load + resize
window.addEventListener("load", adjustBodyPadding);
window.addEventListener("resize", adjustBodyPadding);

// Shrink header on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    // scrolled down
    header.classList.add("shrink");
  } else {
    // back to top
    header.classList.remove("shrink");
  }

  // Recalculate padding (since height changes on shrink)
  adjustBodyPadding();
});
