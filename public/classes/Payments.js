// classes
export class Payments {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
    }
}
return `${this.recipient} owes £${this.amount} for ${this.details}`;
