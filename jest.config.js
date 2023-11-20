module.exports = {
  preset: 'ts-jest',
  rootDir: './',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Assuming your aliases start with @ and are in the src folder
  },
  testEnvironment: 'node',
};
