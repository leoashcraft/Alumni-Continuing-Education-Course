export default abstract class GUIComponent {
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected visible: boolean;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visible = true; // Default visibility
    }

    public show(): void {
        this.visible = true;
        this.render();
    }

    public hide(): void {
        this.visible = false;
        this.render();
    }

    protected abstract render(): void;
}