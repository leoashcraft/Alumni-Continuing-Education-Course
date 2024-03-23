import DatabaseDataFetcher from './DatabaseDataFetcher';
import HttpDataFetcher from './HttpDataFetcher';
import UserDataProcessor  from './UserDataProcessor'

const httpDataFetcher = new HttpDataFetcher();
const userDataProcessor = new UserDataProcessor(httpDataFetcher);
userDataProcessor.processUserData("https://api.example.com/users");

// Note here that we no longer expect the userDataProcessor to own it's own dependent class.  Instead we are 
// passing it an abstraction that implements IDataFetcher.  In this case that abstraction is the httpDataFecther.


// In the next example, we show how we could just as easily pass a databaseDataFetcher tomorrow and we could pass 
// in the connection string as a URL. 
// To do this, we would only need to create a new databaseDataFetcher class that implements IDataFetcher.


const databaseDataFetcher = new DatabaseDataFetcher();
const userDataProcessorWithDb = new UserDataProcessor(databaseDataFetcher);

userDataProcessorWithDb.processUserData("postgresql://mydbusername:mydbpassword@elephantsql.com:4482/thisDataBase");
