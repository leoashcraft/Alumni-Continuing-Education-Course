class Customer {
  private customerData: { [key: string]: string };
  private pricingLevel: number;

  constructor(customerData: { [key: string]: string }, pricingLevel: number) {
    this.customerData = customerData;
    this.pricingLevel = pricingLevel;
  }

  updateCustomerData(customerData: { [key: string]: string }): void {
    // logit to update customer Data
  }

  generateCustomerPrice(
    customer: CustomerSRP,
    price: number,
    globalDiscountLevel: number
  ): number {
    let pricingLevel = customer.getPricingLevel();
    let finalPrice = price * pricingLevel * globalDiscountLevel;
    return finalPrice;
  }
}
