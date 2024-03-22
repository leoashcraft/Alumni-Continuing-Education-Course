import Shape from "./Shape";

export default class Circle extends Shape {
  public Radius: number;

  constructor(radius: number) {
    super();
    this.Radius = radius;
  }

  Area():number {
    return this.Radius * this.Radius * Math.PI;
  }
}
