export const createMainBanner = (description) => {
    const MAIN_BANNER = document.createElement("div");
    MAIN_BANNER.setAttribute("class", ".main-banner");
    MAIN_BANNER.textContent = `${description}`;
    return MAIN_BANNER;
};
export const appendChildNodes = (parent, ...childNodes) => {
    for (let i = 0; i < childNodes.length; i += 1) {
        parent.appendChild(childNodes[i]);
    }
};
