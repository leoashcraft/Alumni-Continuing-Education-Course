import BaseApiClient from "./BaseAPIClient";

export default class UserApiClient extends BaseApiClient {
    constructor(baseUrl: string, apiKey: string) {
        super(baseUrl, apiKey);
    }

    async getUser(userId: string): Promise<any> {
        return this.request(`users/${userId}`);
    }

    async createUser(userData: any): Promise<any> {
        return this.request(`users`, 'POST', userData);
    }
}