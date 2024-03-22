// included for reference but this project is only for demonstrating unit testing in typescript.

import { FizzBuzzCalculation } from "./openClosed/FizzBuzzOC/Calculations/FizzBuzzCalculation";
import DivisibleByFive from "./openClosed/FizzBuzzOC/DivisibleByFive";
import DivisibleByThree from "./openClosed/FizzBuzzOC/DivisibleByThree";
import CalculationControllerOC from "./openClosed/FizzBuzzOC/CalculationControllerOC";
import { BuzzFizzCalculation } from "./openClosed/FizzBuzzOC/Calculations/BuzzFizzCalculation";
import { FizzOnlyCalculation } from "./openClosed/FizzBuzzOC/Calculations/FizzOnlyCalculation";
import { BuzzOnlyCalculation } from "./openClosed/FizzBuzzOC/Calculations/BuzzOnlyCalculation";

// Initialize Our Objects
const divisibleByThree = new DivisibleByThree();
const divisibleByFive = new DivisibleByFive();
const fizzBuzzCalculation = new FizzBuzzCalculation(
  divisibleByThree,
  divisibleByFive
);
const buzzFizzCalculation = new BuzzFizzCalculation(
  divisibleByThree,
  divisibleByFive
);
const fizzOnlyCalculation = new FizzOnlyCalculation(divisibleByThree);
const buzzOnlyCalculation = new BuzzOnlyCalculation(divisibleByFive);

// Work with our different calculations and log to console showing hwo each one works
let calculationController = new CalculationControllerOC(
  divisibleByThree,
  divisibleByFive,
  fizzBuzzCalculation
);
console.log("\nFIZZ BUZZ RESULTS");
console.log(calculationController.Calculate(3));
console.log(calculationController.Calculate(5));
console.log(calculationController.Calculate(7));

calculationController = new CalculationControllerOC(
  divisibleByThree,
  divisibleByFive,
  buzzFizzCalculation
);
console.log("\nBUZZ FIZZ RESULTS");
console.log(calculationController.Calculate(3));
console.log(calculationController.Calculate(5));
console.log(calculationController.Calculate(7));

calculationController = new CalculationControllerOC(
  divisibleByThree,
  divisibleByFive,
  fizzOnlyCalculation
);
console.log("\nFIZZ ONLY RESULTS");
console.log(calculationController.Calculate(3));
console.log(calculationController.Calculate(5));
console.log(calculationController.Calculate(7));

calculationController = new CalculationControllerOC(
  divisibleByThree,
  divisibleByFive,
  buzzOnlyCalculation
);
console.log("\nBUZZ ONLY RESULTS");
console.log(calculationController.Calculate(3));
console.log(calculationController.Calculate(5));
console.log(calculationController.Calculate(7));
