window.addEventListener("load", () => {
  const copyright = document.querySelector(".copyright");
  if (!copyright) return;

  copyright.textContent = `Copyright © ${new Date().getFullYear()} Obrada Vektorskih Slika`;
});
