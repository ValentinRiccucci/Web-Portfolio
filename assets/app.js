import './stimulus_bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

// import './JS/ASCII.js'
// import './JS/Animations.js'

const chars = "!@#$%^&*";



let last = 0;
document.addEventListener("mousemove", (e) => {


    const now = Date.now();
    if(now - last < 60) return;

    last = now;

    const span = document.createElement("span");
    span.classList.add("ascii-char");

    span.textContent = chars[Math.floor(Math.random() * chars.length)];

    span.style.left = e.pageX + "px";
    span.style.top = e.pageY + "px";

    document.body.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 1000);

});
