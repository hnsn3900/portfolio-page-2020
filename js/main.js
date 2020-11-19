// VARIABLES
let header = document.querySelector(".page-header");
let headerNav = document.querySelector(".header-nav");
let headerNavBtn = document.querySelector(".header-nav-btn");

// EVENT LISTENER
headerNavBtn.addEventListener(
  "click",
  toggleMenu.bind(null, headerNav, header)
);
headerNavBtn.addEventListener("click", toggleMenuIcon.bind(headerNavBtn));

// FUNCTIONS
function toggleMenuIcon() {
  this.classList.toggle("toggleMenuIcon");
}

function toggleMenu(menu, menuContainer) {
  if (menu.classList.contains("expandMenu")) {
    menu.classList.replace("expandMenu", "retractMenu");
    menuContainer.classList.replace("expandHeader", "retractHeader");
  } else {
    menu.classList.remove("retractMenu");
    menuContainer.classList.remove("retractHeader");
    menuContainer.classList.add("expandHeader");
    menu.classList.add("expandMenu");
  }
} // eof()
