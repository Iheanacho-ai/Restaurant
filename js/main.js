let toggleNavStatus = true;
let container = document.querySelector(".mobile-side-bar");
let overlay = document.querySelector("#overlay");
let anchor = document.querySelectorAll(".anchor");
let icon = document.querySelectorAll(".icon-mobile");
console.log(icon);

let toggleNav = function(){
    if (toggleNavStatus === true) {
        container.style.width = "272px";

        for (let i = 0; i < anchor.length; i++) {
        anchor[i].style.opacity = "1";
            
        }
        
        overlay.style.display = "block";
        icon[0].style.display = "block";

        toggleNavStatus = false;
    }
     else if (toggleNavStatus === false) {
        container.style.width = "0px";

        for (let i = 0; i < anchor.length; i++) {
            anchor[i].style.opacity = "0";
            
        }
        overlay.style.display = "none";
        icon[0].style.display = "none";

        toggleNavStatus = true;
   }
    
    

}

  
// carousel 

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})