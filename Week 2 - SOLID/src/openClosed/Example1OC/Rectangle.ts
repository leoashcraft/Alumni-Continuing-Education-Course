import Shape from "./Shape";

export default class Rectangle extends Shape
{
    public Width:number
    public Height:number 

    constructor(width: number, height: number){
        super();
        this.Width = width;
        this.Height = height;
    }

    Area():number {
        return this.Height * this.Width;
    }
}