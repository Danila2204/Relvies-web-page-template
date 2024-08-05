// DOM-элементы
const contactsCards = document.querySelectorAll(".contacts__content-card");

// События
contactsCards.forEach(value => {  
  value.addEventListener("mouseover", () => {
    value.querySelectorAll("svg * > path, svg path").forEach(value => {
      value.setAttribute("fill", "#fff");
    })
  })

  value.addEventListener("mouseleave", () => {
    value.querySelectorAll("svg * > path, svg path").forEach(value => {
      value.setAttribute("fill", "#0D5C63");
    })
  })
})