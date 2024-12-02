import { generateHomeContent } from "./home";
import { generateMenuContent } from "./menu";
import "../styles/styles.css";
import { generateAboutContent } from "./about";

const handleButtons = () => {
  const HOME_BUTTON = document.querySelector("header > nav > button:nth-child(1)") as HTMLElement;
  const MENU_BUTTON = document.querySelector("header > nav > button:nth-child(2)") as HTMLElement;
  const ABOUT_BUTTON = document.querySelector("header > nav > button:nth-child(3)") as HTMLElement;

  // Call generateHomeContent when DOM loads
  document.addEventListener("DOMContentLoaded", generateHomeContent);
  HOME_BUTTON.addEventListener("click", generateHomeContent);
  MENU_BUTTON.addEventListener("click", generateMenuContent);
  ABOUT_BUTTON.addEventListener("click", generateAboutContent);
};

handleButtons();
