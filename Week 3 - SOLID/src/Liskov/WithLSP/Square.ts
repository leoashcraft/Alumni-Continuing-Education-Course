import Shape from "./RectangleShape";

export default class Square extends Shape {
    constructor(size: number) {
      super(size, size);
    }
  
    setWidth(width: number): void {
      this.width = this.height = width;
    }
  
    setHeight(height: number): void {
      this.height = this.width = height;
    }
  }