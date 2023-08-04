// const btnForward = document.querySelector('button');
// const indicator = document.querySelector('.indicator .line span');
// const indicatorItems = document.querySelector('.indicator p');
// const form = document.querySelector('.form');
// const allForms = document.querySelectorAll('.forms');
// let i = 0;

// allForms[i].classList.add('show')
// indicator.style.width = i;
// indicatorItems[i].classList.add('active');

 


const active = document.querySelector(".active")
const active2 = document.querySelector(".active2");
const active3 = document.querySelector(".active3");
const bonde = document.querySelector(".bonde");
const bonde2 = document.querySelector(".bonde2");
const bonde3 = document.querySelector(".bonde3");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
active.addEventListener("click", () =>{
     bonde.style.display= "none";
     console.log("hgdfdsds")
     bonde2.style.display= "block";
     bonde3.style.display= "none";
})

active2.addEventListener("click", () =>{
     bonde.style.display ="none";
     bonde2.style.display="block";
     bonde3.style.display ="none";
})

active3.addEventListener("click", () =>{
     bonde.style.display = "none";
     bonde2.style.display ="none";
     bonde3.style.display ="block";
})
