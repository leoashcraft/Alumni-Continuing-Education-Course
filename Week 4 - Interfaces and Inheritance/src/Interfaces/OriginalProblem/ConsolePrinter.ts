import EmailNotification from "./EmailNotification";

export default class ConsolePrinter {
    print(notification: EmailNotification) {
        console.log(notification.getContent());
    }
}
