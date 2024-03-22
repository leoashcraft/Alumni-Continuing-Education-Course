import DivisibleByFive from "../DivisibleByFive";
import DivisibleByThree from "../DivisibleByThree";
import CalculationType from "./CalculationType";

export class BuzzFizzCalculation extends CalculationType {
  private divisibleByThree: DivisibleByThree;
  private divisibleByFive: DivisibleByFive;

  constructor(
    divisibleByThree: DivisibleByThree,
    divisibleByFive: DivisibleByFive
  ) {
    super();
    this.divisibleByThree = divisibleByThree;
    this.divisibleByFive = divisibleByFive;
  }

  Calculate(number: number): string | number {
    if (this.divisibleByThree.isDivisibleByThree(number)) {
      return "Buzz";
    } else if (this.divisibleByFive.isDivisibleByFive(number)) {
      return "Fizz";
    } else return number;
  }
}
