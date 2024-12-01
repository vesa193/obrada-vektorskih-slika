window.addEventListener("load", () => {
  const navItem = document.querySelectorAll(".nav-item");
  const copyright = document.querySelector(".copyright");
  if (!copyright) return;

  copyright.textContent = `Copyright © ${new Date().getFullYear()} Obrada Vektorskih Slika`;

  navItem.forEach((item) => {
    item.classList.contains("active")
      ? (item.style.pointerEvents = "none")
      : "";
  });
});
