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
    console.log(HOURS_DIV.textContent);
};
