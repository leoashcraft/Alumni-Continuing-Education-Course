// // Liskov Example 1 - Before Refactor
// import Rectangle from "./Liskov/Original/Rectangle";
// import Square from "./Liskov/Original/Square";

// const rectangle = new Rectangle(2,3);
// console.log(rectangle.getArea()); // Expect 6

// rectangle.increaseRectangleWidth();
// console.log(rectangle.getArea()); // Expected: (2+1)*3 = 9

// const square = new Square(5);
// console.log(square.getArea()); // Expected: 25

// square.increaseRectangleWidth();
// console.log(square.getArea()); // Expected 30
// // Note, this is about the correctness of our methods with inheritance.  Yes, the area of the square
// // is 36 and we got the correct answer. That is not the point.  The problem is we broke the behavior 
// // of increaseRectangleWidth and introduced  instability into our code.  Any objects that depend on 
// // Square as a Rectangle AND Rectange will now behave erratically if the width is increased



// Liskov Example 2 - After
import Rectangle from "./Liskov/WithLSP/Rectangle";
import Square from "./Liskov/WithLSP/Square";
const rectangle = new Rectangle(2, 3);
console.log(rectangle.getArea()); // Output: 6

rectangle.increaseWidth(); // Using the new method
console.log(rectangle.getArea()); // Output: 9, as expected

const square = new Square(5);
console.log(square.getArea()); // Output: 25

square.increaseWidth(); // Using the new method
console.log(square.getArea()); // Output: 36, as expected for a square when its width is increased
// Note that our output hasn't changed.  What has changed is that our code behaves in a predictable way
// RectangleShape is abstract and we no longer have an increaseRectangleWidth method.  It has been 
// replaced with a concrete method for increaseWidth in both classes that is stable and extendable.  Any 
// classes depending on RectangleShape should expect an inheriting class to provide a relevant increaseWidth method