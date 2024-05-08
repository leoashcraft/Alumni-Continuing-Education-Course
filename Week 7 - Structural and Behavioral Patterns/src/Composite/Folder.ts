import IFileComponent from "./IFileComponent";

export default class Folder implements IFileComponent {
    public name: string;
    private children: IFileComponent[] = [];

    constructor(name: string) {
        this.name = name;
    }

    add(child: IFileComponent): void {
        this.children.push(child);
    }

    getSize(): number {
        return this.children.reduce((total, child) => total + child.getSize(), 0);
    }
}