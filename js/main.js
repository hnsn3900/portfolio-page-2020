// VARIABLES
let header = document.querySelector(".page-header");
let headerNav = document.querySelector(".header-nav");
let headerNavBtn = document.querySelector(".header-nav-btn");

// EVENT LISTENER
headerNavBtn.addEventListener(
  "click",
  toggleAccordionMenu.bind(headerNavBtn, headerNav, header)
);

headerNavBtn.addEventListener("click", toggleMenuIcon.bind(headerNavBtn));

// FUNCTIONS
function toggleMenuIcon() {
  this.classList.toggle("toggleMenuIcon");
}

function toggleAccordionMenu(menu, menuParent) {
  const menuItems = menu.children[0].children.length; // Represents list items in unordered list element
  const parentHeight = menuParent.clientHeight;
  console.log("menuItems, parentHeight:", menuItems, parentHeight);

  if (menu.clientHeight >= parentHeight) {
    // Vertically transform menu from hidden overflow position. Expand height of menu's parent.
    menu.style.transform = `translateY( ${parentHeight * menuItems}px)`;
    menuParent.style.height = `${parentHeight * (menuItems + 1)}px`;
    menu.style.transition = `transform 1s ease-in-out`;
    menuParent.style.transition = `height 1s ease-in-out`;
    menu.classList.add("menuOpened");
  } else {
    // Vertically transform menu to hidden overflow position. Shrink height of menu's parent.
    menu.style.transform = `translateY(0px)`;
    menuParent.style.height = `${parentHeight / (menuItems + 1)}px`;
    menu.style.transition = `transform 0.8s ease-in-out`;
    menuParent.style.transition = `height 0.8s ease-in-out`;
  }
}
