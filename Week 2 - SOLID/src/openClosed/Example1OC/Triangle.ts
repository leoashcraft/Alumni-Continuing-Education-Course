import Shape from "./Shape";

// adding this class in requires no modification
export default class Triangle extends Shape {
  public BaseWidth: number;
  public Height: number;

  constructor(baseWidth: number, height: number) {
    super();
    this.BaseWidth = baseWidth;
    this.Height = height;
  }

  Area(): number {
    return (this.BaseWidth * this.Height) / 2;
  }
}
