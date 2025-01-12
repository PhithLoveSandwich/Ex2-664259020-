class CustomerEX5 {
    private name: string;
    private member: boolean = false;
    private memberType: string | null = null; // String or null for when it's not set

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public isMember(): boolean {
        return this.member;
    }

    public setMember(member: boolean): void {
        this.member = member;
    }

    public getMemberType(): string | null {
        return this.memberType;
    }

    public setMemberType(memberType: string | null): void {
        this.memberType = memberType;
    }

    public toString(): string {
        return `Customer[name=${this.name}, member=${this.member}, memberType=${this.memberType}]`;
    }
}

class Visit {
    private customer: CustomerEX5;
    private date: string;
    private serviceExpense: number = 0.0;
    private productExpense: number = 0.0;

    constructor(customer: CustomerEX5, date: string, serviceExpense: number = 0.0, productExpense: number = 0.0) {
        this.customer = customer;
        this.date = date;
        this.serviceExpense = serviceExpense;
        this.productExpense = productExpense;
    }

    public getCustomer(): CustomerEX5 {
        return this.customer;
    }

    public getDate(): string {
        return this.date;
    }

    public getServiceExpense(): number {
        return this.serviceExpense;
    }

    public setServiceExpense(serviceExpense: number): void {
        this.serviceExpense = serviceExpense;
    }

    public getProductExpense(): number {
        return this.productExpense;
    }

    public setProductExpense(productExpense: number): void {
        this.productExpense = productExpense;
    }

    public getTotalExpense(): number {
        return this.serviceExpense + this.productExpense;
    }

    public toString(): string {
        return `Visit[customer=${this.customer.toString()}, date=${this.date}, serviceExpense=${this.serviceExpense}, productExpense=${this.productExpense}]`;
    }
}

class DiscountRate {
    private static serviceDiscount: { [key: string]: number } = {
        "Premium": 0.2,
        "Gold": 0.15,
        "Silver": 0.1
    };

    private static productDiscount: { [key: string]: number } = {
        "Premium": 0.1,
        "Gold": 0.1,
        "Silver": 0.1
    };

    public static getServiceDiscountRate(type: string): number {
        if (!this.serviceDiscount[type]) {
            console.warn(`Invalid service type: ${type}, returning default 0% discount.`);
        }
        return this.serviceDiscount[type] || 0;
    }

    public static getProductDiscountRate(type: string): number {
        if (!this.productDiscount[type]) {
            console.warn(`Invalid product type: ${type}, returning default 0% discount.`);
        }
        return this.productDiscount[type] || 0;
    }
}

export { CustomerEX5, Visit, DiscountRate };
