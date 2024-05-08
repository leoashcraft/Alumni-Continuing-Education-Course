module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
      "**/__tests__/**/*.ts?(x)", // Look for test files in .ts and .tsx format
      "**/?(*.)+(spec|test).ts?(x)" // Also include any files ending in .spec.ts, .test.ts, .spec.tsx, or .test.tsx
    ]
  };