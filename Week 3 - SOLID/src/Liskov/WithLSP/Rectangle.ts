import Shape from "./RectangleShape";

export default class Rectangle extends Shape {
    setWidth(width: number): void {
      this.width = width;
    }
  
    setHeight(height: number): void {
      this.height = height;
    }
  }