import dinosaur from "../asset/images/dinosaur.png";
import { generateHomeContent } from "./home";

type GenerateContent = () => void;
const generateContent:GenerateContent = () => {
  const content = document.querySelector("div#content") as HTMLElement;
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
  const home = document.querySelector("header > nav > button:nth-child(1)") as HTMLElement;
  const menu = document.querySelector("header > nav > button:nth-child(2)") as HTMLElement;
  const about = document.querySelector("header > nav > button:nth-child(3)") as HTMLElement;
  home.addEventListener("click", generateHomeContent);
};

handleButtons();
