"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountRate = exports.Visit = exports.CustomerEX5 = void 0;
class CustomerEX5 {
    constructor(name) {
        this.member = false;
        this.memberType = null; // String or null for when it's not set
        this.name = name;
    }
    getName() {
        return this.name;
    }
    isMember() {
        return this.member;
    }
    setMember(member) {
        this.member = member;
    }
    getMemberType() {
        return this.memberType;
    }
    setMemberType(memberType) {
        this.memberType = memberType;
    }
    toString() {
        return `Customer[name=${this.name}, member=${this.member}, memberType=${this.memberType}]`;
    }
}
exports.CustomerEX5 = CustomerEX5;
class Visit {
    constructor(customer, date, serviceExpense = 0.0, productExpense = 0.0) {
        this.serviceExpense = 0.0;
        this.productExpense = 0.0;
        this.customer = customer;
        this.date = date;
        this.serviceExpense = serviceExpense;
        this.productExpense = productExpense;
    }
    getCustomer() {
        return this.customer;
    }
    getDate() {
        return this.date;
    }
    getServiceExpense() {
        return this.serviceExpense;
    }
    setServiceExpense(serviceExpense) {
        this.serviceExpense = serviceExpense;
    }
    getProductExpense() {
        return this.productExpense;
    }
    setProductExpense(productExpense) {
        this.productExpense = productExpense;
    }
    getTotalExpense() {
        return this.serviceExpense + this.productExpense;
    }
    toString() {
        return `Visit[customer=${this.customer.toString()}, date=${this.date}, serviceExpense=${this.serviceExpense}, productExpense=${this.productExpense}]`;
    }
}
exports.Visit = Visit;
class DiscountRate {
    static getServiceDiscountRate(type) {
        if (!this.serviceDiscount[type]) {
            console.warn(`Invalid service type: ${type}, returning default 0% discount.`);
        }
        return this.serviceDiscount[type] || 0;
    }
    static getProductDiscountRate(type) {
        if (!this.productDiscount[type]) {
            console.warn(`Invalid product type: ${type}, returning default 0% discount.`);
        }
        return this.productDiscount[type] || 0;
    }
}
exports.DiscountRate = DiscountRate;
DiscountRate.serviceDiscount = {
    "Premium": 0.2,
    "Gold": 0.15,
    "Silver": 0.1
};
DiscountRate.productDiscount = {
    "Premium": 0.1,
    "Gold": 0.1,
    "Silver": 0.1
};
