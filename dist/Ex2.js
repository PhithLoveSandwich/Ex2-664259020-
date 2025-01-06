"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = exports.Invoice = void 0;
class Invoice {
    constructor(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    // Public Methods
    getId() {
        return this.id;
    }
    getCustomer() {
        return this.customer;
    }
    setCustomer(customer) {
        this.customer = customer;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getCustomerId() {
        return this.customer.getId();
    }
    getCustomerName() {
        return this.customer.getName();
    }
    getCustomerDiscount() {
        return this.customer.getDiscount();
    }
    getAmountAfterDiscount() {
        const discount = this.getCustomerDiscount();
        return this.amount - (this.amount * discount) / 100;
    }
    toString() {
        return `Invoice[id=${this.id}, customer=${this.customer.toString()}, amount=${this.amount}]`; // Use customer.toString() directly
    }
}
exports.Invoice = Invoice;
class Customer {
    constructor(id, name, discount) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    // Public Methods
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDiscount() {
        return this.discount;
    }
    setDiscount(discount) {
        this.discount = discount;
    }
    toString() {
        return "name " + `${this.name}(${this.id})(${this.discount}%)`;
    }
}
exports.Customer = Customer;
