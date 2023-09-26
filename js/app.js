// const bar = document.querySelector("menu > button");
// const close = document.querySelector(".close > button");
const body = document.querySelector("body");
const menu = document.querySelector(".menu-list");
const menuLInks = document.querySelectorAll(".menu-list > ul > li");
const video = document.querySelector(".dev-img > video");

function openMenu() {
  menu.classList.add("show-menu");
  body.style.overflow = "hidden";
}
function closeMenu() {
  menu.classList.remove("show-menu");
  body.style.overflow = "scroll";
}

for (let i = 0; i < menuLInks.length; i++) {
  menuLInks[i].addEventListener("click", closeMenu);
}
