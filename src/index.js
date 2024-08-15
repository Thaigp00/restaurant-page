import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const initialPage = "home";
let currentPage = initialPage;

function cleanContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const navButtons = document.querySelectorAll("nav button");
    navButtons.forEach(button => button.classList.remove("selected"));
}

function loadPage(newPage) {
    switch(newPage) {
        case "home":
            cleanContent();
            currentPage = "home";
            loadHome();
            break;
        case "menu":
            cleanContent();
            currentPage = "menu";
            loadMenu();
            break;
        case "about":
            cleanContent();
            currentPage = "about";
            loadAbout();
            break;
        default:
            console.log("Page not found!");
    }
}

function start() {
    loadPage(initialPage);
}

function awaitButtons() {
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(button => button.addEventListener("click", event => {
        const newPage = event.target.id;
        if (newPage !== currentPage) loadPage(newPage);
    }));
}

start();
awaitButtons();