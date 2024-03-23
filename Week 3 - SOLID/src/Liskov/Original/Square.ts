import Rectangle from "./Rectangle";

export default class Square extends Rectangle {
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