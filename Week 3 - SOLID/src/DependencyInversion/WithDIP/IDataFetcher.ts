interface IDataFetcher {
    fetchData(url: string): Promise<any>;
}