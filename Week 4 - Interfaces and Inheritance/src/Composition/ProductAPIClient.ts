import BaseApiClient from "./BaseAPIClient";
import ITokenHandler from "./ITokenHandler";

export default class ProductApiClient extends BaseApiClient {

    private tokenHandler: ITokenHandler;

    constructor(baseUrl: string, apiKey: string, tokenHandler:ITokenHandler) {
        super(baseUrl, apiKey);
        this.tokenHandler = tokenHandler;
    }

    async getProduct(productId: string): Promise<any> {
        this.tokenHandler.handleToken();
        return this.request(`products/${productId}`);
    }

    async listProducts(): Promise<any> {
        return this.request(`products`);
    }
}