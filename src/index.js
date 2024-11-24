import dinosaur from "../asset/images/dinosaur.png";
console.log("Hello, world!");
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
    console.log(dinosaur);
};
generateContent();
