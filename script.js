
/* ================= HERO SLIDER ================= */

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlides(){

slides.forEach((slide)=>{
slide.classList.remove("active");
});

index++;

if(index > slides.length){
index = 1;
}

slides[index-1].classList.add("active");

}

setInterval(showSlides,3000);



/* ================= TESTIMONIAL SLIDER ================= */

let testimonials = document.querySelectorAll(".testimonial");
let tIndex = 0;

function showTestimonials(){

testimonials.forEach((t)=>{
t.classList.remove("active");
});

tIndex++;

if(tIndex > testimonials.length){
tIndex = 1;
}

testimonials[tIndex-1].classList.add("active");

}

setInterval(showTestimonials,4000);



/* ================= APPOINTMENT FORM ================= */

const form = document.querySelector("form");

if(form){
form.addEventListener("submit", function(){
alert("Appointment request submitted successfully!");
});
}

document.addEventListener("DOMContentLoaded", function(){ const toggle = document.getElementById("menu-toggle"); const nav = document.getElementById("nav-menu"); if(toggle && nav){ toggle.addEventListener("click", function(){ nav.classList.toggle("active"); }); } });