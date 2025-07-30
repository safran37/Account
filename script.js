/*slider start*/
const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i){
    slides.forEach((slide,idx) => {
        slide.classList.toggle("active", idx === i)
        dots[idx].classList.toggle("active", idx === i)
    })
}

document.getElementById("next").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index)
}
document.getElementById("prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index)
}

dots.forEach(dot => {
    dot.onclick = () => {
        index = parseInt(dot.dataset.index)
        showSlide(index)
    }
})

setInterval(() => {
   index = (index +1) % slides.length 
   showSlide(index)
}, 5000);

showSlide(index)
/*slider end*/

const firstImg = document.querySelector(".slides img")
firstImg.onload = () => {
    document.querySelector(".slides").style.height = firstImg.clientHeight + "px"
}

/* PHONE SLIDER START */
const phoneslides = document.querySelectorAll(".slide")
const phonedots = document.querySelectorAll(".phone-dot")
let phoneIndex = 0;

function showPhoneSlide(i){
    phoneslides.forEach((phone,indexofPhone) =>{
        phone.classList.toggle("active" , indexofPhone === i)
        phonedots[indexofPhone].classList.toggle("active",indexofPhone === i)
    })
}


phonedots.forEach(phoneDot => {
    phoneDot.onclick = () => {
        phoneIndex = parseInt(phoneDot.dataset.index)
        showPhoneSlide(phoneIndex)
    }
})

setInterval(() => {
    phoneIndex = (phoneIndex + 1) % phoneslides.length;
    showPhoneSlide(phoneIndex)
}, 5000);

showPhoneSlide(phoneIndex)
/* PHONE SLIDER END */

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