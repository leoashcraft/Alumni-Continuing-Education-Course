import GUIComponent from "./GUIComponent";

export default class TextField extends GUIComponent {
    private text: string;

    constructor(x: number, y: number, width: number, height: number, text: string = '') {
        super(x, y, width, height);
        this.text = text;
    }

    protected render(): void {
        if (this.visible) {
            console.log(`Rendering TextField at (${this.x}, ${this.y}) with text: "${this.text}"`);
        }
    }

    public setText(text: string): void {
        this.text = text;
        this.render();
    }
}