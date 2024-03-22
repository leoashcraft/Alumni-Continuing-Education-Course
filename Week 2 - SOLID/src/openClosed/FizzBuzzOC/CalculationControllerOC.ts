import DivisibleByFive from "./DivisibleByFive";
import DivisibleByThree from "./DivisibleByThree";
import CalculationType from "./Calculations/CalculationType";

export default class CalculationControllerOC {
  private calculationType: CalculationType;

  constructor(
    divisibleByThree: DivisibleByThree,
    divisibleByFive: DivisibleByFive,
    calculationType: CalculationType
  ) {
    this.calculationType = calculationType;
  }

  public Calculate(number: number): any {
    return this.calculationType.Calculate(number);
  }
}
