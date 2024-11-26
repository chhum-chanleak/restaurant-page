export const createMainBanner = (description) => {
    const MAIN_BANNER = document.createElement("div");
    MAIN_BANNER.setAttribute("class", ".main-banner");
    MAIN_BANNER.textContent = `${description}`;
    return MAIN_BANNER;
};
