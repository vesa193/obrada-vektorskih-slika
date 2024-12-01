const background = document.querySelector(".banner-image");
const navbarTop = document.querySelector(".navbar-top");
const navbarCollapse = navbarTop.querySelector(".navbar-collapse");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY; // How far the page is scrolled
  const screenWidth = window.innerWidth;

  if (screenWidth < 992) {
    if (background?.style) {
      background.style.backgroundSize = `cover`;
    }
  } else {
    if (background) {
      if (scrollPosition < 1) {
        background.style.backgroundSize = `${100}%`;
        return;
      }

      const zoomLevel = Math.max(100, 100 + scrollPosition / 20); // Adjust zoom-out logic
      background.style.backgroundSize = `${zoomLevel}%`;
    }
  }

  // App navbar effect
  if (scrollPosition > 1) {
    navbarTop.classList.remove("sticky-top");
    navbarTop.classList.add("fixed-top");
    return;
  }

  if (scrollPosition < 1) {
    navbarTop.classList.remove("fixed-top");
    navbarTop.classList.add("sticky-top");
  }
});
