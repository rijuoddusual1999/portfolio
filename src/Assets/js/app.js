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
