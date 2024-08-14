export default () => {
    const content = document.querySelector("#content");

    const greeting = document.createElement("span");
    greeting.classList.add("greeting");
    greeting.textContent = "Benvenuto a";

    const restaurantName = document.createElement("span");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Luminara";

    const title = document.createElement("h1");
    title.appendChild(greeting);
    title.appendChild(restaurantName);

    const hr = document.createElement("hr");
    const slogan = document.createElement("p");
    slogan.textContent = "Not only a restaurant. An experience.";
    
    content.appendChild(title);
    content.appendChild(hr);
    content.appendChild(slogan);
}


{/* <h1><span class="greeting">Benvenuto a</span> <span class="restaurant-name">Luminara</span></h1>
<hr>
<p>Not only a restaurant. An experience.</p> */}