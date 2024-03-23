export default class UserDataProcessor {
    private dataFetcher: IDataFetcher;

    constructor(dataFetcher: IDataFetcher) {
        // Note that now we are depending on the abstraction instead of the concrete class
        this.dataFetcher = dataFetcher;
    }

    async processUserData(url: string) {
        const userData = await this.dataFetcher.fetchData(url);
        console.log("Processing user data: ", userData);
        // Process the data (e.g., transform, display, or store it)
    }
}