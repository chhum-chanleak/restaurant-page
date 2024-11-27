import { generateHomeContent } from "./home";
import { generateMenuContent } from "./menu";
import "../styles/styles.css";
const handleButtons = () => {
    const home = document.querySelector("header > nav > button:nth-child(1)");
    const menu = document.querySelector("header > nav > button:nth-child(2)");
    const about = document.querySelector("header > nav > button:nth-child(3)");
    home.addEventListener("click", generateHomeContent);
    menu.addEventListener("click", generateMenuContent);
};
handleButtons();
