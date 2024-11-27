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

// Get all names from 'ORDERS'
type GetNames = (arrayOfObjects: MenuOrder[]) => string[];
export const getNames:GetNames = (arrayOfObjects) => {
  const NAMES: string[] = [];

  for (let i = 0; i < arrayOfObjects.length; i += 1) {
    NAMES.push(arrayOfObjects[i].name);
  }

  return NAMES;
};

// Get orders by type
export const getOrdersByType = <Type extends MenuOrder>(arrayOfObjects: Type[]) => {
  const BEVERAGE: MenuOrder[] = [];
  const SIDE_DISHES: MenuOrder[] = [];
  const MAIN_DISHES: MenuOrder[] = [];

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