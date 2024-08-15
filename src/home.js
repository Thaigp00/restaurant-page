export default () => {
    const content = document.querySelector("#content");
    const button = document.querySelector("nav button.home")
    button.classList.add("selected");

    const greeting = document.createElement("span");
    greeting.classList.add("greeting");
    greeting.textContent = "Benvenuto a";

    const restaurantName = document.createElement("span");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Luminara";

    const title = document.createElement("h1");
    title.classList.add("title");
    title.appendChild(greeting);
    title.appendChild(restaurantName);

    const hr = document.createElement("hr");
    const slogan = document.createElement("p");
    slogan.classList.add("slogan");
    slogan.textContent = "Not only a restaurant. An experience.";
    
    content.appendChild(title);
    content.appendChild(hr);
    content.appendChild(slogan);
};