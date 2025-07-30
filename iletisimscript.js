/* sticky menu */
const menu = document.querySelector("nav");
const menuOffSet = menu.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY >= menuOffSet) {
    menu.classList.add("fixed");
  } else {
    menu.classList.remove("fixed");
  }
});

const hamburger = document.querySelector(".hamburger")
const menuLinks = document.querySelector(".menu-links")
hamburger.addEventListener("click",() => {
    menuLinks.classList.toggle("active")
})

/* button to top */
const square = document.querySelector(".square")

window.addEventListener("scroll",() => {
    const scrollY = window.scrollY
    const halfWindow = window.innerHeight / 2;

    if(scrollY > halfWindow){
        square.classList.add("show")
    }
    else{
        square.classList.remove("show")
    }
})

square.addEventListener("click",() => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})