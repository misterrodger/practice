import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
  preset: "ts-jest",
  testEnvironment: "node",
  testTimeout: 1200000
};

export default config;
