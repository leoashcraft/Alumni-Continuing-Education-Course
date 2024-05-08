export default class ConsolePrinter {
    print(notification: INotification) {
        console.log(notification.getContent());
    }
}
