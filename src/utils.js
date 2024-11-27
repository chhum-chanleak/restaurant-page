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
export const createOrderTypeBanner = (bannerName) => {
    const BANNER = document.createElement("div");
    BANNER.setAttribute("class", "banner");
    BANNER.textContent = `${bannerName}`;
    return BANNER;
};
export const createOrderTypeContainer = (...childElement) => {
    const ORDER_TYPE_CONTAINER = document.createElement("div");
    ORDER_TYPE_CONTAINER.setAttribute("class", "order-type-container");
    appendChildNodes(ORDER_TYPE_CONTAINER, ...childElement);
    return ORDER_TYPE_CONTAINER;
};
