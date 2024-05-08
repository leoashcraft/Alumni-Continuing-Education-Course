// General note for class in setting up template

ts files in scr folders by adding the following to tsconfig.json after the Compiler options
"include": ["src/**/*"]

js files are compiled to dist folders by adding "outDir": "./dist" to the tsconfig.json compiler options

We will call our start file index.ts / index.js Starting the project in the dist folder can be accomplished by altering the package.json with
"main": "dist/index.js",
AND
"start": "node dist/index.js"

Unit testing can be installed using the jest framework
npm install --save-dev jest ts-jest @types/jest

Add the test framework to your package.json file. The relevant changed sections should look like
"main": "dist/index.js",
"scripts": {
"build": "tsc",
"start": "node dist/index.js",
"test": "jest"
},

We should create a root directory named **tests** to hold our tests
To handle TS, you need to create a jest.config.js file as follows:

module.exports = {
preset: 'ts-jest',
testEnvironment: 'node',
testMatch: [
"**/__tests__/**/*.ts?(x)", // Look for test files in .ts and .tsx format
"**/?(*.)+(spec|test).ts?(x)" // Also include any files ending in .spec.ts, .test.ts, .spec.tsx, or .test.tsx
]
};

Mocking can be achieved using ts-mockito
npm install ts-mockito

Install the Jest Runner Extension in VS Code to make testing easier.

To run tests, right click on a test and choose run test.
