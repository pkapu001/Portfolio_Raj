// select dom items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const background = document.querySelector(".blur");
const job = document.querySelectorAll(".job");
const about = document.querySelector(".about");

// initial state
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
//job.addEventListener("mouseover", itsin);
//job.addEventListener("mouseout", itsout);

job.forEach(item => item.addEventListener("mouseover", itsin));
job.forEach(item => item.addEventListener("mouseout", itsout));

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    background.classList.add("blurnow");
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    background.classList.remove("blurnow");
    showMenu = false;
  }
}

function itsin() {
  background.classList.add("darken");
}
function itsout() {
  background.classList.remove("darken");
}
