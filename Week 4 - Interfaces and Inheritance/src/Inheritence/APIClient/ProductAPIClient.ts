import BaseApiClient from "./BaseAPIClient";

export default class ProductApiClient extends BaseApiClient {
    constructor(baseUrl: string, apiKey: string) {
        super(baseUrl, apiKey);
    }

    async getProduct(productId: string): Promise<any> {
        return this.request(`products/${productId}`);
    }

    async listProducts(): Promise<any> {
        return this.request(`products`);
    }
}