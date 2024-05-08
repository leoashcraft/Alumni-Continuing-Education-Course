import IFileComponent from "./IFileComponent";

export default class FileObject implements IFileComponent {
    private size: number;
    private name: string;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }

    getSize(): number {
        return this.size;
    }
}