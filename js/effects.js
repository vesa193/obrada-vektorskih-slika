const background = document.querySelector(".banner-image");
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY; // How far the page is scrolled
  if (background) {
    if (scrollPosition < 1) {
      background.style.backgroundSize = `${100}%`;
      return;
    }

    const zoomLevel = Math.max(100, 100 + scrollPosition / 20); // Adjust zoom-out logic
    background.style.backgroundSize = `${zoomLevel}%`;
  }

  if (scrollPosition > 1) {
    navbar.classList.remove("sticky-top");
    navbar.classList.add("fixed-top");
    return;
  }

  if (scrollPosition <= 1) {
    navbar.classList.remove("fixed-top");
    navbar.classList.add("sticky-top");
  }
});
