import DivisibleByThree from "../DivisibleByThree";
import CalculationType from "./CalculationType";

export class FizzOnlyCalculation extends CalculationType {
  private divisibleByThree: DivisibleByThree;

  constructor(divisibleByThree: DivisibleByThree) {
    super();
    this.divisibleByThree = divisibleByThree;
  }

  Calculate(number: number): string | number {
    if (this.divisibleByThree.isDivisibleByThree(number)) {
      return "Fizz";
    } else return number;
  }
}
