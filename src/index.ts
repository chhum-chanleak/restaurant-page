import dinosaur from "../asset/images/dinosaur.png";
import { generateHomeContent } from "./home";
import "../styles/styles.css";

const handleButtons = () => {
  const home = document.querySelector("header > nav > button:nth-child(1)") as HTMLElement;
  const menu = document.querySelector("header > nav > button:nth-child(2)") as HTMLElement;
  const about = document.querySelector("header > nav > button:nth-child(3)") as HTMLElement;
  home.addEventListener("click", generateHomeContent);
};

handleButtons();
