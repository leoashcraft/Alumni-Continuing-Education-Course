export default abstract class Shape {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  abstract setWidth(width: number): void;

  abstract setHeight(height: number): void;

  getArea(): number {
    return this.width * this.height;
  }

  // Now both Square and Rectangle can increase their width in a meaningful way.
  // Eeach class handles it's own setWidth and setHeight Implemention.  

  increaseWidth(increment: number = 1): void {
    this.setWidth(this.width + increment);
  }
}