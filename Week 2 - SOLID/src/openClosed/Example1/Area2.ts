import Circle from "./Circle";
import Rectangle from "./Rectangle";

// The requirement has expanded to include circles
class AreaCalculator {
  Area(shape: any): number {
    if (shape instanceof Rectangle) {
      return shape.Width * shape.Height;
    } else {
      let circle:Circle = shape as Circle;
      return circle.Radius * circle.Radius * Math.PI;
    }
  }
}
