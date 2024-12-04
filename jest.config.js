/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest', // if you're using TypeScript
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',  // Adjust this if your files are located differently
  },
  testEnvironment: 'node', // set the test environment to node
  transform: {
    '^.+\\.ts$': 'ts-jest', // ensure ts-jest is used to process TypeScript files
  },
  moduleFileExtensions: ['js', 'ts'], // include TypeScript files
};