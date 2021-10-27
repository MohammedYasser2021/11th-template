/*  menu bars */
let ulList = document.getElementById("nav-menu-container");
let barMenu = document.querySelector(".bars-menu");

barMenu.addEventListener("click", function(){
    ulList.classList.toggle("active")
})

/* sticky scroll */
let header = document.querySelector("header");
let sticky = header.offsetTop
window.onscroll = function(){
    scroll();
}

function scroll(){
    if(window.scrollY >= sticky){
        document.body.paddingTop = header.offsetHeight;
        header.classList.add("sticky");
    }else{
        document.body.paddingTop = "0";
        header.classList.remove("sticky");
    }
}
/* slider */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n)
}

function showSlides(n){
    let slides = document.querySelectorAll(".slides");
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
  for(let slide of slides){
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

/* accordion */

let societyAccordion = document.querySelectorAll(".society-accordion");

for(let accordion of societyAccordion){
    accordion.addEventListener("click", function(){
        this.classList.toggle("accordion-active");
        let desc = this.nextElementSibling;
        if(desc.style.maxHeight){
            desc.style.maxHeight = null;
        }else{
            desc.style.maxHeight = desc.scrollHeight + "px"
        }
    })
}

