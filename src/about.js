"use strict";
// Factory pattern
// Concrete implementation
class Contact {
    name;
    position;
    number;
    e_mail;
    // Shorthand
    constructor(name, position, number, e_mail) {
        this.name = name;
        this.position = position;
        this.number = number;
        this.e_mail = e_mail;
    }
    getInfo() {
        return `
        Name: ${this.name}, Position: ${this.position}, Number: ${this.number}, E-Mail: ${this.e_mail}
      `;
    }
}
// Factory
class ContactFactory {
    static createContact(name, position, number, e_mail) {
        if (!name || !e_mail) {
            throw new Error("name and e_mail are required!");
        }
        return new Contact(name, position, number, e_mail);
    }
}
