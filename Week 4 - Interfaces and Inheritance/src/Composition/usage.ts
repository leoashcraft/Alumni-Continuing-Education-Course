import ProductApiClient from "./ProductAPIClient";
import TokenHandler from "./TokenHandler";
import UserApiClient from "./UserAPIClient";

const userClient = new UserApiClient('https://api.example.com', 'YOUR_API_KEY');
userClient.getUser('123').then(user => console.log(user));

const tokenHandler = new TokenHandler();
const productClient = new ProductApiClient('https://api.example.com', 'YOUR_API_KEY', tokenHandler);
productClient.listProducts().then(products => console.log(products));