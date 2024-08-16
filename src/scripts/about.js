import "./../styles/about.css";

export default () => {
    const content = document.querySelector("#content");
    const button = document.querySelector("nav button#about")
    button.classList.add("selected");

    const aboutWrapper = document.createElement("div");
    aboutWrapper.classList.add("about-wrapper");

    const sloganStart = document.createElement("h1");
    sloganStart.classList.add("slogan-start");
    sloganStart.textContent = "We offer what you deserve.";

    const sloganEnd = document.createElement("h1");
    sloganEnd.classList.add("slogan-end");
    sloganEnd.textContent = "The way you deserve.";

    const history = document.createElement("p");
    history.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsum voluptas ratione, aliquam saepe error esse perspiciatis atque ad ipsa maiores temporibus voluptates ab at repellendus, vel quasi ex sed.";

    aboutWrapper.appendChild(sloganStart);
    aboutWrapper.appendChild(history);
    aboutWrapper.appendChild(sloganEnd);
    content.appendChild(aboutWrapper);
};