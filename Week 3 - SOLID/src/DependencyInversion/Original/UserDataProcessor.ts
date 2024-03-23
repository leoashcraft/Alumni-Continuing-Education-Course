import HttpDataFetcher from "./HttpDataFetcher";

export default class UserDataProcessor {
    private httpDataFetcher = new HttpDataFetcher(); // Direct dependency on the lower level module

    async processUserData(url: string) {
        const userData = await this.httpDataFetcher.fetchData(url);
        console.log("Processing user data: ", userData);
        // Process the data (e.g., transform, display, or store it)
    }
}