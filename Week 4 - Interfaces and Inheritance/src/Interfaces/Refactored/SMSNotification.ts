export default class SMSNotification implements INotification {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    getContent() {
        return `SMS: ${this.message}`;
    }
}