class Invoice {
    private id: string;
    private customer: Customer;  // Single customer
    private amount: number;

    constructor(id: string, customer: Customer, amount: number) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }

    // Public Methods
    public getId(): string {
        return this.id;
    }

    public getCustomer(): Customer {
        return this.customer;
    }

    public setCustomer(customer: Customer): void {
        this.customer = customer;
    }

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public getCustomerId(): string {
        return this.customer.getId();
    }

    public getCustomerName(): string {
        return this.customer.getName();
    }

    public getCustomerDiscount(): number {
        return this.customer.getDiscount();
    }

    public getAmountAfterDiscount(): number {
        const discount = this.getCustomerDiscount();
        return this.amount - (this.amount * discount) / 100;
    }

    public toString(): string {
        return `Invoice[id=${this.id}, customer=${this.customer.toString()}, amount=${this.amount}]`; // Use customer.toString() directly
    }
}


class Customer {
    private id: string;
    private name: string;
    private discount: number;

    constructor(id: string, name: string, discount: number) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }

    // Public Methods
    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getDiscount(): number {
        return this.discount;
    }

    public setDiscount(discount: number): void {
        this.discount = discount;
    }

    public toString(): string {
        return `${this.name}(${this.id})(${this.discount})`;
    }
}

export { Invoice, Customer };
