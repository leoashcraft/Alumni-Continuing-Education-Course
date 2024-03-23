export default class HttpDataFetcher implements IDataFetcher {
    async fetchData(url: string): Promise<any> {
        // Now the string is the database connection URL and we can write our database code here
        console.log(`Fetching data from ${url}...`);
        // Fake HTTP fetch operation
        return Promise.resolve({ data: "Sample data from " + url });
    }
}