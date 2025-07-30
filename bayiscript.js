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
const form = document.querySelector("#myForm");
let formValid = true;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input[required],textarea[required]")
  const final = form.querySelector(".final")

  inputs.forEach(input => {
    const errorSpan = input.nextElementSibling;

    if(!input.value.trim()){
      input.classList.add("show-error")
      errorSpan.style.display="block"
      final.style.display="block"
      formValid = false;
    }
    else{
      input.classList.remove("show-error");
      errorSpan.style.display="none"
      final.style.display="none"
    }
  })
})

const firmaPhone = document.querySelector("#firmaphone");

firmaPhone.addEventListener("input",function () {
  this.value = this.value.replace(/[^0-9]/g, "");
})

const yetkiliPhone = document.querySelector("#yetkiliphone")
yetkiliPhone.addEventListener("input",function () {
  this.value = this.value.replace(/[^0-9]/g, "");
})