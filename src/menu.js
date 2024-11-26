import dinosaur from "../asset/images/dinosaur.png";
import { createMainBanner, appendChildNodes } from "./utils";
// Create concrete classes for each type of menu Order
class Beverage {
    name;
    description;
    price;
    // Shorthand
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    getDescription() {
        return `Drink: ${this.name}, ${this.description} $${this.price}`;
    }
    createOrderInfo() {
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
    createOrderTypeContainer() {
        const ORDER_TYPE_CONTAINER = document.createElement("div");
        ORDER_TYPE_CONTAINER.setAttribute("class", "order-type-container");
        appendChildNodes(ORDER_TYPE_CONTAINER, this.createOrderInfo());
        return ORDER_TYPE_CONTAINER;
    }
}
class MainDish {
    name;
    description;
    price;
    // Shorthand
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    getDescription() {
        return `Dish: ${this.name}, Price: $${this.price}`;
    }
    createOrderInfo() {
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
    createOrderTypeContainer() {
        const ORDER_TYPE_CONTAINER = document.createElement("div");
        ORDER_TYPE_CONTAINER.setAttribute("class", "order-type-container");
        appendChildNodes(ORDER_TYPE_CONTAINER, this.createOrderInfo());
        return ORDER_TYPE_CONTAINER;
    }
}
class SideDish {
    name;
    description;
    price;
    // Shorthand
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    getDescription() {
        return `Dish: ${this.name}, Price: $${this.price}`;
    }
    createOrderInfo() {
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
    createOrderTypeContainer() {
        const ORDER_TYPE_CONTAINER = document.createElement("div");
        ORDER_TYPE_CONTAINER.setAttribute("class", "order-type-container");
        appendChildNodes(ORDER_TYPE_CONTAINER, this.createOrderInfo());
        return ORDER_TYPE_CONTAINER;
    }
}
// Factory
class MenuOrderFactory {
    static createMenuOrder(type, name, description, price) {
        switch (type.toLowerCase()) {
            case "beverage":
                return new Beverage(name, description, price);
            case "main_dish":
                return new MainDish(name, description, price);
            case "side_dish":
                return new SideDish(name, description, price);
            default:
                throw new Error(`Unknown known order ${type}.`);
        }
    }
}
export const generateMenuContent = () => {
    const CONTENT = document.querySelector("div#content");
    const MENU_CONTAINER = document.createElement("div");
    const MAIN_BANNER = createMainBanner("Menu");
    MENU_CONTAINER.setAttribute("class", "menu");
    MENU_CONTAINER.appendChild(MAIN_BANNER);
    // Order type container
    CONTENT.appendChild(MENU_CONTAINER);
};
const HONEY_TEA = MenuOrderFactory.createMenuOrder("beverage", "Honey Tea", "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!", 2);
const BEARY_TEA = MenuOrderFactory.createMenuOrder("beverage", "Beary Tea", "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.", 3);
