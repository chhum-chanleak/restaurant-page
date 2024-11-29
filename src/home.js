import { clearContent } from "./utils";
export const generateHomeContent = () => {
    const CONTENT = document.querySelector("div#content");
    const CONTAINER = document.createElement("div");
    const BANNER = document.createElement("div");
    const INTRODUCTION = document.createElement("div");
    const BUSINESS_HOURS = document.createElement("div");
    const LOCATION = document.createElement("div");
    const CONTAINER_CHILDREN = [
        BANNER, INTRODUCTION, BUSINESS_HOURS, LOCATION,
    ];
    // Clear old content
    clearContent();
    CONTAINER.setAttribute("class", "home");
    BANNER.textContent = "Beary's Breakfast Bar";
    INTRODUCTION.textContent = `
    Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.
  `;
    LOCATION.textContent = `
    Location
      123 Forest Drive, Forestville, Maine
  `;
    // Append each item of CONTAINER_CHILDREN to CONTAINER
    for (let i = 0; i < CONTAINER_CHILDREN.length; i += 1) {
        CONTAINER.appendChild(CONTAINER_CHILDREN[i]);
    }
    CONTENT.appendChild(CONTAINER);
    // Append each item of CONTAINER_CHILDREN to CONTAINER
    generateHoursContent();
};
export const generateHoursContent = () => {
    const HOURS_DIV = document.querySelector(".home > div:nth-child(3)");
    for (let i = 0; i < 9; i += 1) {
        const div = document.createElement("div");
        switch (i) {
            case 0:
                div.textContent = 'Opening Hours';
                HOURS_DIV.appendChild(div);
                break;
            case 1:
                div.textContent = 'Sunday: 8am - 8pm';
                HOURS_DIV.appendChild(div);
                break;
            case 2:
                div.textContent = 'Monday: 6am - 6pm';
                HOURS_DIV.appendChild(div);
                break;
            case 3:
                div.textContent = 'Tuesday: 6am - 6pm';
                HOURS_DIV.appendChild(div);
                break;
            case 4:
                div.textContent = 'Wednesday: 6am - 6pm';
                HOURS_DIV.appendChild(div);
                break;
            case 6:
                div.textContent = 'Thursday: 6am - 10pm';
                HOURS_DIV.appendChild(div);
                break;
            case 7:
                div.textContent = 'Friday: 6am - 10pm';
                HOURS_DIV.appendChild(div);
                break;
            case 8:
                div.textContent = 'Saturday: 8am - 10pm';
                HOURS_DIV.appendChild(div);
                break;
        }
    }
};
