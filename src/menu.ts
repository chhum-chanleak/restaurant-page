import dinosaur from "../asset/images/dinosaur.png";
import { createMainBanner, appendChildNodes, createOrderTypeContainer, createOrderTypeBanner, getOrdersByType } from "./utils";

// Define a common interface for all Orders
export interface MenuOrder {
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
    DESCRIPTION_TEXT.textContent = `${this.description}`;
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
    DESCRIPTION_TEXT.textContent = `${this.description}`;
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
    DESCRIPTION_TEXT.textContent = `${this.description}`;
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
  const BEVERAGE_CONTAINER = document.createElement("div");
  const SIDE_DISHES_CONTAINER = document.createElement("div");
  const MAIN_DISHES_CONTAINER = document.createElement("div");

  MENU_CONTAINER.setAttribute("class", "menu");  
  MENU_CONTAINER.appendChild(MAIN_BANNER);
  BEVERAGE_CONTAINER.setAttribute("class", "beverage-container");
  SIDE_DISHES_CONTAINER.setAttribute("class", "side-dishes-container");
  MAIN_DISHES_CONTAINER.setAttribute("class", "main-dishes-container");

  // Order type containers
  appendChildNodes(CONTENT, MENU_CONTAINER);
  appendChildNodes(MENU_CONTAINER, BEVERAGE_CONTAINER, SIDE_DISHES_CONTAINER, MAIN_DISHES_CONTAINER);
  appendChildNodes(BEVERAGE_CONTAINER, createOrderTypeBanner("Beverage"), ...getOrdersByType(ORDERS).BEVERAGE);
  appendChildNodes(SIDE_DISHES_CONTAINER, createOrderTypeBanner("Side Dishes"), ...getOrdersByType(ORDERS).SIDE_DISHES);
  appendChildNodes(MAIN_DISHES_CONTAINER, createOrderTypeBanner("Main Dishes"), ...getOrdersByType(ORDERS).MAIN_DISHES);
};

export const ORDERS = [
  MenuOrderFactory.createMenuOrder("beverage", "Honey Tea", "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!", 2),
  MenuOrderFactory.createMenuOrder("beverage", "Beary Tea", "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.", 3),
  MenuOrderFactory.createMenuOrder("main_dish", "Pancakes", "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.", 4),
  MenuOrderFactory.createMenuOrder("main_dish", "French Toast", "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.", 5),
  MenuOrderFactory.createMenuOrder("main_dish", "Beary Veggie Sandwich", "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.", 8),
  MenuOrderFactory.createMenuOrder("main_dish", "BLT", "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.", 6),
  MenuOrderFactory.createMenuOrder("main_dish", "Bagel and Lox", "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.", 8),
  MenuOrderFactory.createMenuOrder("main_dish", "Honeycomb", "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.", 6),
  MenuOrderFactory.createMenuOrder("main_dish", "Beary Bowl", "Get a big ole bowl of our berries! Side of honey is $1 extra.", 7),
  MenuOrderFactory.createMenuOrder("main_dish","The Beary Best Porridge", "Made by Baby Bear himself, this porridge is guaranteed to be just right, or your money back.", 5),
];