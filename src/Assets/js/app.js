// Import GSAP library
import gsap from "gsap";

// Select DOM elements
const bar = document.querySelector(".loader_bar--inner");
const countnum = document.querySelector(".loader_counter--number-counter");
const count = document.querySelector(".loader");
let c = 0;

// Set interval to update loading bar and counter
let barinterval = setInterval(() => {
    c = c + 2;
    bar.style.width = c + "%";
    countnum.innerText = c + "%";

    // When loading reaches 100%
    if (c === 100) {
        clearInterval(barinterval);

        // Animations using GSAP library
        gsap.to(".loader_bar, .loader_counter", {
            duration: 5,
            rotate: "90deg",
            left: "1000%",
        });
        gsap.to(".loader_text", {
            duration: 2,
            opacity: 0,
        });
        gsap.to(".loader_svg", {
            duration: 3,
            opacity: 1,
            scale: 0.8,
        });
        gsap.to(".loader", {
            duration: 6,
            opacity: 1,
            background: "transparent",
        });
        gsap.to(".header", {
            duration: 4,
            opacity: 1,
            delay: 3,
        });
    }
}, 22);



let bg = document.getElementById('svg_box');
let count_svg = 20;
for(let i = 0; i < count_svg ; i++){
    let glitchbox = document.createElement('div');
        glitchbox.className ='box';
        bg.appendChild(glitchbox);
}


setInterval(function(){
let glitch = document.getElementsByClassName('box');
for(let i = 0; i < glitch.length(); i++ ){
    glitch[i].style.left = Math.floor(Math.random()*100) +'vw';
    glitch[i].style.top = Math.floor(Math.random()*100) +'vh';
    glitch[i].style.width = Math.floor(Math.random()*400) +'px';
    glitch[i].style.height = Math.floor(Math.random()*100) +'px';
    glitch[i].style.backgound_position = Math.floor(Math.random()*50) +'px';
}
},200)
