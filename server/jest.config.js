// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  transform: {
    ".(js|jsx|ts|tsx)": "@sucrase/jest-plugin"
  },

  bail: 1,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/app/**'],

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['html', 'lcov'],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20,
    },
  },

  globalSetup: '<rootDir>/setupTest.js',
};
