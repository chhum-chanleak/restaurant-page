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
export const getNames = (arrayOfObjects) => {
    const NAMES = [];
    for (let i = 0; i < arrayOfObjects.length; i += 1) {
        NAMES.push(arrayOfObjects[i].name);
    }
    return NAMES;
};
// Get orders by type
export const getOrdersByType = (arrayOfObjects) => {
    const BEVERAGE = [];
    const SIDE_DISHES = [];
    const MAIN_DISHES = [];
    for (let i = 0; i < arrayOfObjects.length; i += 1) {
        switch (arrayOfObjects[i].name) {
            case 'Honey Tea':
            case 'Beary Tea':
                BEVERAGE.push(arrayOfObjects[i]);
                break;
            case 'Pancakes':
            case 'French Toast':
                SIDE_DISHES.push(arrayOfObjects[i]);
                break;
            case 'Beary Veggie Sandwich':
            case 'BLT':
            case 'Bagel and Lox':
            case 'Honeycomb':
            case 'Beary Bowl':
            case 'The Beary Best Porridge':
                MAIN_DISHES.push(arrayOfObjects[i]);
                break;
            default:
                throw new Error(`Unknown order ${arrayOfObjects[i]}`);
        }
    }
    return {
        BEVERAGE,
        SIDE_DISHES,
        MAIN_DISHES,
    };
};
