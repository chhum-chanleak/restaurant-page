import { MenuOrder, ORDERS } from "./menu";

// Create main banner for content
type CreateMainBanner = (description: string) => HTMLElement;
export const createMainBanner: CreateMainBanner = (description) =>  {
  const MAIN_BANNER = document.createElement("div");

  MAIN_BANNER.setAttribute("class", ".main-banner");
  MAIN_BANNER.textContent = `${description}`;

  return MAIN_BANNER;
};

// Append a list of child elements to a parent element
type AppendChildNodes = (parent: HTMLElement, ...childNodes: HTMLElement[]) => void;
export const appendChildNodes: AppendChildNodes = (parent, ...childNodes) => {
  for (let i = 0; i < childNodes.length; i += 1) {
    parent.appendChild(childNodes[i]);
  }
};

// Create a div with a text content of 'bannerName'
type CreateOrderTypeBanner = (bannerName: string) => HTMLElement;
export const createOrderTypeBanner: CreateOrderTypeBanner = (bannerName) => {
  const BANNER = document.createElement("div");

  BANNER.setAttribute("class", "banner");
  BANNER.textContent = `${bannerName}`;

  return BANNER;
}

// Create a container for a certain order type
type CreateOrderTypeContainer = (...childElement: HTMLElement []) => HTMLElement;
export const createOrderTypeContainer: CreateOrderTypeContainer = (...childElement) => {
  const ORDER_TYPE_CONTAINER = document.createElement("div");

  ORDER_TYPE_CONTAINER.setAttribute("class", "order-type-container");
  appendChildNodes(ORDER_TYPE_CONTAINER, ...childElement);

  return ORDER_TYPE_CONTAINER;
}

// Get orders by type
export const getOrdersByType = <Type extends MenuOrder>(arrayOfObjects: Type[]) => {
  const BEVERAGE: HTMLElement[] = [];
  const SIDE_DISHES: HTMLElement[] = [];
  const MAIN_DISHES: HTMLElement[] = [];

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


// Get img elements by inputting order type. Example: getImgElementsByOrderType("side_dish");
type GetImgElementsByOrderType = (orderType: string) => NodeListOf<Element>;
export const getImgElementsByOrderType: GetImgElementsByOrderType = (orderType) => {
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

// Add images to elements
type AddImagesToElements = (imgElements: HTMLImageElement[], imagePaths: number[]) => void;
const addImagesToElements: AddImagesToElements = (imgElements, imgPaths) => {

  for (let i = 0; i < imgElements.length; i += 1) {
    if (imgElements.length === imgPaths.length) {
      imgElements[i].src = `${imgPaths[i]}`;
    }
  }
};