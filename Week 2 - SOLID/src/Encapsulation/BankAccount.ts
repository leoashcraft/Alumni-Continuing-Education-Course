class BankAccount {
  // marked as private, other classes and methods
  // shouldn't be able to interact directly with this value
  private balance: number;
  private overdraftProtection: boolean;

  constructor(initialBalance: number, overdraftProtection: boolean) {
    this.balance = initialBalance;
    this.overdraftProtection = overdraftProtection;
  }

  // This is a public method, we expect that anyone that needs to get the balance
  // will use this method
  GetBalance(): number {
    return this.balance;
  }

  MakeDeposit(depositAmount: number): void {
    this.balance += depositAmount;
  }


  // Note that we have abstracted away the logic away to private methods
  // to make our code more readable and succinct.  However these private
  // methods are internal to the class and should not be called by outsiders.
  MakeWithdrawal(withDrawalAmount: number): boolean {
    if (this.IsOverdrawn()) {
      return false;
    }
    else if (this.IsAllowed(withDrawalAmount)) {
      this.balance -= withDrawalAmount;
      return true;
    }
    else return false;
  }

  private IsOverdrawn(): boolean {
    return this.balance < 0;
  }

   // Why not allow this method to be called publicly?  What if we change how we
   // calculate whether a transaction is allowed.  External users (e.g. classes and methods)
   // that consume this class might be improperly relying on this method, and we would
   // break their implementation while still passing all of our unit tests for our public methods
  private IsAllowed(pendingAmount: number): boolean {
    let resultingBalance = this.balance - pendingAmount;
    if (resultingBalance >= 0) {
      return true;
    } else if (this.overdraftProtection) {
      return true;
    } else return false;
  }
}
