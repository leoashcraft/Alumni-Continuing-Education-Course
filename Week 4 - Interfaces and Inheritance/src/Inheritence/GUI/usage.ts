import Button from "./Button";
import Label from "./Label";
import TextField from "./TextField";

const button = new Button(10, 10, 100, 50, "Click Me!");
button.show(); // Simulate rendering the button
button.click(); // Simulate clicking the button

const textField = new TextField(10, 70, 200, 50, "Hello, World!");
textField.show(); // Simulate rendering the text field

const label = new Label(10, 130, 100, 50, "I'm a label");
label.show(); // Simulate rendering the label