// DOM-элементы
const header = document.querySelector(".header");
const headerContent = document.querySelector(".header__content");
const headerNavigationList = document.querySelector(".nav__list");
const headerNavigation = document.querySelector(".header__nav");
const headerContainer = document.querySelector(".header__container");
const headerNavigationLinks = document.querySelectorAll("a[data-display='mobile']");
const listLinks = headerNavigationList.querySelectorAll(".nav__item a");

// Функции
function navgiation() {
  let object = {
    change() {
      if (document.documentElement.clientWidth > 767) {
          headerContent.classList.remove("header__background");
          header.classList.add("header__background");
          headerNavigation.appendChild(headerNavigationList);
          
          for(let i = 0; i < listLinks.length; i++) {
            listLinks[i].classList.add("semi-bold");
            listLinks[i].classList.remove("regular");
          }          
      } else {
        header.classList.remove("header__background");
        headerContent.classList.add("header__background");
        headerNavigationList.parentElement.removeChild(headerNavigationList);
        headerContainer.appendChild(headerNavigationList);

        for(let i = 0; i < listLinks.length; i++) {
          listLinks[i].classList.remove("semi-bold");
          listLinks[i].classList.add("regular");
        }
      }
    }
  }

  return object;
}

// События
let navigationObject = navgiation();
navigationObject.change();
window.addEventListener("resize", navigationObject.change.bind(navigationObject));