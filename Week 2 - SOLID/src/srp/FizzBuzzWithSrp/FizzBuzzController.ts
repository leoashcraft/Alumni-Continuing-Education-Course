import DivisibleByFive from "./DivisibleByFive";
import DivisibleByThree from "./DivisibleByThree";

export default class FizzBuzzController {
  private divisibleByThree: DivisibleByThree;
  private divisibleByFive: DivisibleByFive;

  constructor(
    divisibleByThree: DivisibleByThree,
    divisibleByFive: DivisibleByFive
  ) {
    this.divisibleByThree = divisibleByThree;
    this.divisibleByFive = divisibleByFive;
  }

  public Calculate(number: number, type: string): any {
    switch (type) {
      case "FizzBuzz":
        return this.CalculateFizzBuzz(number);
      case "BuzzFizz":
        return this.CalculateBuzzFizz(number);
      case "FizzOnly":
        return this.CalculateFizzOnly(number);
      case "BuzzOnly":
        return this.CalculateBuzzOnly(number);

      default:
        console.log("Invalid Input");
        return number;
    }
  }

  private CalculateFizzBuzz(number: number): any {
    if (this.divisibleByThree.isDivisibleByThree(number)) {
      return "Fizz";
    } else if (this.divisibleByFive.isDivisibleByFive(number)) {
      return "Buzz";
    } else return number;
  }

  private CalculateBuzzFizz(number: number): any {
    if (this.divisibleByThree.isDivisibleByThree(number)) {
      return "Buzz";
    } else if (this.divisibleByFive.isDivisibleByFive(number)) {
      return "Fizz";
    } else return number;
  }

  private CalculateFizzOnly(number: number): any {
    if (this.divisibleByThree.isDivisibleByThree(number)) {
      return "Fizz";
    } else return number;
  }

  private CalculateBuzzOnly(number: number): any {
    if (this.divisibleByFive.isDivisibleByFive(number)) {
      return "Buzz";
    } else return number;
  }
}
