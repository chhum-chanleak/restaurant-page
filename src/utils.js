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
// Get orders by type
export const getOrdersByType = (arrayOfObjects) => {
    const BEVERAGE = [];
    const SIDE_DISHES = [];
    const MAIN_DISHES = [];
    for (let i = 0; i < arrayOfObjects.length; i += 1) {
        switch (arrayOfObjects[i].name) {
            case 'Honey Tea':
            case 'Beary Tea':
                BEVERAGE.push(arrayOfObjects[i].createOrderInfo());
                break;
            case 'Pancakes':
            case 'French Toast':
                SIDE_DISHES.push(arrayOfObjects[i].createOrderInfo());
                break;
            case 'Beary Veggie Sandwich':
            case 'BLT':
            case 'Bagel and Lox':
            case 'Honeycomb':
            case 'Beary Bowl':
            case 'The Beary Best Porridge':
                MAIN_DISHES.push(arrayOfObjects[i].createOrderInfo());
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
export const getImgElementsByOrderType = (orderType) => {
    const BEVERAGE_IMG_ELEMENTS = document.querySelectorAll(".beverage-container img");
    const SIDE_DISHES_IMG_ELEMENTS = document.querySelectorAll(".side-dishes-container img");
    const MAIN_DISHES_IMG_ELEMENTS = document.querySelectorAll(".main-dishes-container img");
    switch (orderType) {
        case 'beverage':
            return BEVERAGE_IMG_ELEMENTS;
            break;
        case 'side_dishes':
            return SIDE_DISHES_IMG_ELEMENTS;
            break;
        case 'main_dishes':
            return MAIN_DISHES_IMG_ELEMENTS;
            break;
        default:
            throw new Error(`Unknown order type ${orderType}`);
    }
};
export const addImagesToElements = (imgElements, imgPaths) => {
    for (let i = 0; i < imgElements.length; i += 1) {
        const imgElement = imgElements[i];
        if (imgElements.length === imgPaths.length) {
            imgElement.src = `${imgPaths[i]}`;
        }
        else {
            throw new Error(`The length of the first and second arguments are not equal! first: ${imgElements.length}   second: ${imgPaths.length}.`);
        }
    }
};
