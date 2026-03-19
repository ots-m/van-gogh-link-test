const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");

burger.onclick = () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
};

closeBtn.onclick = () => {
  burger.classList.remove("active");
  menu.classList.remove("active");
};
