export default class DatabaseConnection {
    private static singleton: DatabaseConnection = new DatabaseConnection();
    private readonly connectionString: string;

    private constructor() {
        this.connectionString = "This is my connection string."
    }

    public static getConnection(): DatabaseConnection {
        return this.singleton;
    }

    public getConnectionString(): string {
        return this.connectionString;
    }
}