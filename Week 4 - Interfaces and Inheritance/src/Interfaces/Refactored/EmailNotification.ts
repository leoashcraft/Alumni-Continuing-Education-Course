export default class EmailNotification implements INotification {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    getContent() {
        return `Email: ${this.message}`;
    }
}