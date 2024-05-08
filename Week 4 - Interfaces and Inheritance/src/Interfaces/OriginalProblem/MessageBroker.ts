import ConsolePrinter from "./ConsolePrinter";
import EmailNotification from "./EmailNotification";

export default class MessageBroker {
    printer: ConsolePrinter;

    constructor(printer: ConsolePrinter) {
        this.printer = printer;
    }

    receiveEvent(message: string) {
        const emailNotification = new EmailNotification(message);
        this.printer.print(emailNotification);
    }
}
