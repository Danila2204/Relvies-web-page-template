// DOM-элементы
const headerNavigationList = document.querySelector(".nav__list");
const headerNavigation = document.querySelector(".header__nav");
const headerContainer = document.querySelector(".header__container");
const headerNavigationLinks = document.querySelectorAll("a[data-display='mobile']");
const listLinks = headerNavigationList.querySelectorAll(".nav__item a");

// Функции
function navgiation() {
  let object = {
    remove: false,
    change() {``
      if (innerWidth > 420) {
        if (this.remove) {
          headerNavigation.appendChild(headerNavigationList);
          
          for(let i = 0; i < listLinks.length; i++) {
            listLinks[i].classList.add("semi-bold");
            listLinks[i].classList.remove("regular");
          }

          this.remove = false;
        }
        for (let i = 0; i < headerNavigationLinks.length; i++) {
          headerNavigationLinks[i].classList.add("d-none");
        }
      } else {
        if (!this.remove) {
          headerNavigationList.parentElement.removeChild(headerNavigationList);
          headerContainer.appendChild(headerNavigationList);
          for(let i = 0; i < listLinks.length; i++) {
            listLinks[i].classList.remove("semi-bold");
            listLinks[i].classList.add("regular");
          }

          this.remove = true;
        }
        for (let i = 0; i < headerNavigationLinks.length; i++) {
          headerNavigationLinks[i].classList.remove("d-none");
        }
      }
    }
  }

  return object;
}

// События
let navigationObject = navgiation();
window.addEventListener("resize", navigationObject.change.bind(navigationObject));