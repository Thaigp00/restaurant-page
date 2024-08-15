import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

function cleanContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const navButtons = document.querySelectorAll("nav button");
    navButtons.forEach(button => button.classList.remove("selected"));
}

// cleanContent();
// loadHome();
// loadAbout();