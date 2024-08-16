import "./../styles/menu.css";

const menu = [
    {name: "Filet Mignon", id: "filet-mignon", url: "./assets/img/dishes/filet-mignon.webp"},
    {name: "Lobster", id: "lobster", url: "./assets/img/dishes/lobster.webp"},
    {name: "Beef Wellington", id: "beef-wellington", url: "./assets/img/dishes/beef-wellington.webp"},
    {name: "Foie Gras", id: "foie-gras", url: "./assets/img/dishes/foie-gras.webp"},
    {name: "Carbonara", id: "carbonara", url: "./assets/img/dishes/carbonara.webp"},
    {name: "Dover Sole", id: "dover-sole", url: "./assets/img/dishes/dover-sole.webp"},
];

export default () => {
    const content = document.querySelector("#content");
    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper");

    const button = document.querySelector("nav button#menu");
    button.classList.add("selected");
    
    for (const dish of menu) {
        const dishElement = document.createElement("div");
        dishElement.id = dish.id;
        dishElement.classList.add("dish");
        
        const dishName = document.createElement("h4");
        dishName.classList.add("dish-name");
        dishName.textContent = dish.name;

        dishElement.appendChild(dishName);
        menuWrapper.appendChild(dishElement);
        content.appendChild(menuWrapper);
    }
}