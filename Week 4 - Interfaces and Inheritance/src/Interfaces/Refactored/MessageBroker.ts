import ConsolePrinter from "./ConsolePrinter";
import EmailNotification from "./EmailNotification";
import SMSNotification from "./SMSNotification";

export default class MessageBroker {
    printer: ConsolePrinter;

    constructor(printer: ConsolePrinter) {
        this.printer = printer;
    }

    receiveEvent(message: string) {
        // Now we can easily switch between EmailNotification and SMSNotification
        const notification = new EmailNotification(message); // or new SMSNotification(message);
        this.printer.print(notification);

        const notification2 = new SMSNotification(message);
        this.printer.print(notification);
    }
}
