import dinosaur from "../asset/images/dinosaur.png";
import { generateHomeContent } from "./home";
const generateContent = () => {
    const content = document.querySelector("div#content");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const h1 = document.createElement("h1");
    img.src = `${dinosaur}`;
    p.textContent = "Hello, world! Nice to you all here.";
    h1.textContent = "Hello, world!";
    content.appendChild(img);
    content.appendChild(p);
    content.appendChild(h1);
};
const handleButtons = () => {
    const home = document.querySelector("header > nav > button:nth-child(1)");
    const menu = document.querySelector("header > nav > button:nth-child(2)");
    const about = document.querySelector("header > nav > button:nth-child(3)");
    home.addEventListener("click", generateHomeContent);
};
handleButtons();
