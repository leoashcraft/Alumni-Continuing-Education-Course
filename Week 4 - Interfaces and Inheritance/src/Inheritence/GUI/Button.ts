import GUIComponent from "./GUIComponent";

export default class Button extends GUIComponent {
    private label: string;

    constructor(x: number, y: number, width: number, height: number, label: string) {
        super(x, y, width, height);
        this.label = label;
    }

    protected render(): void {
        if (this.visible) {
            console.log(`Rendering Button at (${this.x}, ${this.y}) with label: "${this.label}"`);
        }
    }

    public click(): void {
        console.log(`Button "${this.label}" clicked!`);
    }
}
