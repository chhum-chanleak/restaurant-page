import dinosaur from "../asset/images/dinosaur.png";
import { createMainBanner, appendChildNodes } from "./utils";

// Define a common interface for all Orders
interface MenuOrder {
  name: string;
  description: string,
  price: number;
  getDescription(): string;
  createOrderInfo(): HTMLElement;
}

// Create concrete classes for each type of menu Order
class Beverage implements MenuOrder {
  // Shorthand
  constructor(public name: string, public description: string, public price: number) {}

  public getDescription(): string {
    return `Drink: ${this.name}, ${this.description} $${this.price}`;
  }

  public createOrderInfo(): HTMLElement {
    const INFO_CONTAINER = document.createElement("div");
    const INFO_ORDER_NAME = document.createElement("h2");
    const INFO_DESCRIPTION = document.createElement("div");
    const DESCRIPTION_TEXT = document.createElement("p");
    const INFO_PRICE = document.createElement("span");
    const IMAGE = document.createElement("img");

    INFO_CONTAINER.setAttribute("class", "beverage-info");
    INFO_ORDER_NAME.textContent = `${this.name}`;
    DESCRIPTION_TEXT.textContent = `A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!`;
    INFO_PRICE.textContent = `$${this.price}`;
    IMAGE.src = `${dinosaur}`;

    appendChildNodes(INFO_DESCRIPTION, DESCRIPTION_TEXT);
    appendChildNodes(INFO_CONTAINER, INFO_ORDER_NAME, INFO_DESCRIPTION, INFO_PRICE, IMAGE);

    return INFO_CONTAINER;
  }
}

class MainDish implements MenuOrder {
  // Shorthand
  constructor(public name: string, public description: string, public price: number) {}

  getDescription(): string {
    return `Dish: ${this.name}, Price: $${this.price}`;
  }

  public createOrderInfo(): HTMLElement {
    const INFO_CONTAINER = document.createElement("div");
    const INFO_Order_NAME = document.createElement("h2");
    const INFO_DESCRIPTION = document.createElement("div");
    const DESCRIPTION_TEXT = document.createElement("p");
    const INFO_PRICE = document.createElement("span");
    const IMAGE = document.createElement("img");

    INFO_CONTAINER.setAttribute("class", "beverage-info");
    INFO_Order_NAME.textContent = `${this.name}`;
    DESCRIPTION_TEXT.textContent = `A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!`;
    INFO_PRICE.textContent = `$${this.price}`;
    IMAGE.src = `${dinosaur}`;

    appendChildNodes(INFO_DESCRIPTION, DESCRIPTION_TEXT);
    appendChildNodes(INFO_CONTAINER, INFO_Order_NAME, INFO_DESCRIPTION, INFO_PRICE, IMAGE);

    return INFO_CONTAINER;
  }
}

class SideDish implements MenuOrder {
  // Shorthand
  constructor(public name: string, public description: string, public price: number) {}

  getDescription(): string {
    return `Dish: ${this.name}, Price: $${this.price}`;
  }

  public createOrderInfo(): HTMLElement {
    const INFO_CONTAINER = document.createElement("div");
    const INFO_Order_NAME = document.createElement("h2");
    const INFO_DESCRIPTION = document.createElement("div");
    const DESCRIPTION_TEXT = document.createElement("p");
    const INFO_PRICE = document.createElement("span");
    const IMAGE = document.createElement("img");

    INFO_CONTAINER.setAttribute("class", "beverage-info");
    INFO_Order_NAME.textContent = `${this.name}`;
    DESCRIPTION_TEXT.textContent = `A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!`;
    INFO_PRICE.textContent = `$${this.price}`;
    IMAGE.src = `${dinosaur}`;

    appendChildNodes(INFO_DESCRIPTION, DESCRIPTION_TEXT);
    appendChildNodes(INFO_CONTAINER, INFO_Order_NAME, INFO_DESCRIPTION, INFO_PRICE, IMAGE);

    return INFO_CONTAINER;
  }
}

// Factory
class MenuOrderFactory {
  static createMenuOrder(type: string, name: string, description: string, price: number): MenuOrder {
    switch(type.toLowerCase()) {
      case "beverage":
        return new Beverage(name, description, price);
      case "main_dish":
        return new MainDish(name, description, price);
      case "side_dish":
        return new SideDish(name, description, price);
      default:
        throw new Error(`Unknown known order ${type}.`)
    }
  }
}

// functions

// Generate content for menu
type GenerateMenuContent = () => void;
export const generateMenuContent: GenerateMenuContent = () => {
  const CONTENT = document.querySelector("div#content") as HTMLElement;
  const MENU_CONTAINER = document.createElement("div");
  const MAIN_BANNER = createMainBanner("Menu");

  MENU_CONTAINER.setAttribute("class", "menu");
  MENU_CONTAINER.appendChild(MAIN_BANNER);
  // Order type container
  CONTENT.appendChild(MENU_CONTAINER);
};

// Create a div with a text content of 'bannerName'
type CreateOrderTypeBanner = (bannerName: string) => HTMLElement;
const createOrderTypeBanner: CreateOrderTypeBanner = (bannerName) => {
  const BANNER = document.createElement("div");

  BANNER.setAttribute("class", "banner");
  BANNER.textContent = `${bannerName}`;

  return BANNER;
}

const HONEY_TEA = MenuOrderFactory.createMenuOrder("beverage", "Honey Tea", "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!", 2);
const BEARY_TEA = MenuOrderFactory.createMenuOrder("beverage", "Beary Tea", "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.", 3);