import { generateHomeContent } from "./home";
import { generateMenuContent } from "./menu";
import "../styles/styles.css";
const handleButtons = () => {
    const HOME_BUTTON = document.querySelector("header > nav > button:nth-child(1)");
    const MENU_BUTTON = document.querySelector("header > nav > button:nth-child(2)");
    const ABOUT_BUTTON = document.querySelector("header > nav > button:nth-child(3)");
    HOME_BUTTON.addEventListener("click", generateHomeContent);
    MENU_BUTTON.addEventListener("click", generateMenuContent);
};
handleButtons();
