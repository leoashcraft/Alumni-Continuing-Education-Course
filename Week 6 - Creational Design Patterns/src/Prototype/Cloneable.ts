import ICloneable from "./ICloneable";

export default class Cloneable implements ICloneable {

    public someField:string;

    constructor() {
        this.someField = "This is my data"
    }

    Clone(): Cloneable {
        const target: Cloneable = new Cloneable();
        target.someField = this.someField;
        return target;
    }
}