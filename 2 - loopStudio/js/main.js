const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const dateNow = document.getElementById("date-now");
const date = new Date();
const year = date.getFullYear();
dateNow.textContent = year;


btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
