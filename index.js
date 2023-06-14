// function startSlideshow() {
//     const slides = document.querySelectorAll(".slideshow .slide");
//     let currentIndex = 0;
//     function showSlide(index) {
//       slides.forEach((slide, i) => {
//         if (i === index) {
//           slide.classList.add("active");
//         } else {
//           slide.classList.remove("active");
//         }
//       });
//     }
//     function nextSlide() {
//       currentIndex = (currentIndex + 1) % slides.length;
//       showSlide(currentIndex);
//     }
//     setInterval(nextSlide, 3000);
//   }
//   startSlideshow();
  // active part
  
// --------------------------------------------------------------------

// ---js scrolling animation -----
 window.addEventListener("load", function(){
    AOS.init();
 })
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    }
});

const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add(active);


    }

})
// -----------------rating-------------------

// const stars = document.querySelectorAll(".star");
// const result = document.getElementsByClassName("result");

// for (let i = 0; i < stars.length; i++) {
//   stars[i].addEventListener("click", function() {
//     for (let j = 0; j < stars.length; j++) {
//       stars[j].classList.remove("active");
//     }
//     this.classList.add("active");
//     result.innerHTML = "You rated this picture " + this.getAttribute("data-rating") + " stars.";
//   });
// }
// profuct khadijaa------------
