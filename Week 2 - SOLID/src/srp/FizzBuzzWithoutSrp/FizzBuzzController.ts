export default class FizzBuzzController {
  constructor() {}

  public Calculate(number: number, type: string): any {
    if (type === "FizzBuzz") {
      if (number % 3 == 0) {
        return "Fizz";
      } else if (number % 5 == 0) {
        return "Buzz";
      }
    } else if (type === "BuzzFizz") {
      if (number % 3 == 0) {
        return "Buzz";
      } else if (number % 5 == 0) {
        return "Fizz";
      }
    } else if (type === "FizzOnly") {
      if (number % 3 == 0) {
        return "Fizz";
      }
    } else if (type === "BuzzOnly") {
      if (number % 5 == 0) {
        return "Buzz";
      }
    } else return number;
  }
}
