export default class EmailNotification {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    getContent() {
        return `Email: ${this.message}`;
    }
}