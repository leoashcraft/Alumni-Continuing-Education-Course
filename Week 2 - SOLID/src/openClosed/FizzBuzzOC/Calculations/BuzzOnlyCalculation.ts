import DivisibleByFive from "../DivisibleByFive";
import CalculationType from "./CalculationType";

export class BuzzOnlyCalculation extends CalculationType {
  private divisibleByFive: DivisibleByFive;

  constructor(divisibleByFive: DivisibleByFive) {
    super();
    this.divisibleByFive = divisibleByFive;
  }

  Calculate(number: number): string | number {
    if (this.divisibleByFive.isDivisibleByFive(number)) {
      return "Buzz";
    } else return number;
  }
}
