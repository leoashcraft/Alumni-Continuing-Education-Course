class CustomerSRP {
  private customerData: { [key: string]: string };
  private pricingLevel: number;

  constructor(customerData: { [key: string]: string }, pricingLevel: number) {
    this.customerData = customerData;
    this.pricingLevel = pricingLevel;
  }

  updateCustomerData(customerData: { [key: string]: string }): void {
    // logic to update customer Data
  }

  getPricingLevel(): number {
    return this.pricingLevel;
  }
}

class PricingSrp {
  private globalDiscountLevel: number;

  constructor(globalDiscountLevel: number) {
    this.globalDiscountLevel = globalDiscountLevel;
  }

  generateCustomerPrice(customer: CustomerSRP, price: number): number {
    let pricingLevel = customer.getPricingLevel();
    let finalPrice = price * pricingLevel * this.globalDiscountLevel;
    return finalPrice;
  }
}
