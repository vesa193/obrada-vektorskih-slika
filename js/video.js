const base = window.location.pathname.split("/video.html")[0];
const wrapperIframe = document.querySelector(".wrapper-iframe");
const containerIframe = document.querySelector(".container-iframe");
const spinner = new Image();

window.addEventListener("DOMContentLoaded", () => {
  spinner.classList.add("mx-auto");
  spinner.src = `${base}/assets/img/spinner.gif`;
  wrapperIframe.insertAdjacentElement("afterbegin", spinner);
});

window.addEventListener("load", () => {
  containerIframe.classList.remove("d-none");
  containerIframe.classList.add("d-block");
  wrapperIframe.removeChild(spinner);
});
