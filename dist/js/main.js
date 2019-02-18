// select dom items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const background = document.querySelector(".blur");
const job = document.querySelectorAll(".job");
const p_btn = document.querySelectorAll(".btn-light");
const about = document.querySelector(".about");
const red_btn = document.querySelectorAll(".red-btn");
let p;
// initial state
let showMenu = false;
let showPrj = false;

menuBtn.addEventListener("click", toggleMenu);

red_btn.forEach(item => item.addEventListener("click", prj_close));

//p_btn.forEach(item => item.addEventListener("click", prj_view(this.id)));
p_btn.forEach(function(elem) {
  elem.addEventListener("click", function() {
    prj_view(elem.id);
  });
  console.log(elem.id);
});
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

function prj_view(e) {
  var pclass = "." + e;
  console.log(pclass);
  p = document.querySelector(pclass);

  if (!showPrj) {
    p.classList.add("show");
    background.classList.add("blurnow_ext");
    showPrj = true;
  }
}
function prj_close() {
  if (showPrj) {
    p.classList.remove("show");
    background.classList.remove("blurnow_ext");
    showPrj = false;
  }
}

function itsin() {
  background.classList.add("darken");
}
function itsout() {
  background.classList.remove("darken");
}
