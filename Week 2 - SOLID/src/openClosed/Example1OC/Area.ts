import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Shape from "./Shape";

// Now our Area Calculator can calculate the area of any Shape
class AreaCalculator {
  Area(shape: Shape): number {
    return shape.Area();
  }
}
