import GUIComponent from "./GUIComponent";

export default class Label extends GUIComponent {
    private content: string;

    constructor(x: number, y: number, width: number, height: number, content: string) {
        super(x, y, width, height);
        this.content = content;
    }

    protected render(): void {
        if (this.visible) {
            console.log(`Rendering Label at (${this.x}, ${this.y}) with content: "${this.content}"`);
        }
    }
}