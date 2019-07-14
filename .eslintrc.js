module.exports = {
  extends: [
    'codingitwrong',
  ],
  parser: 'babel-eslint',
  plugins: [
    'jest',
    'cypress',
    'react',
  ],
  env: {
    'browser': true,
    'jest/globals': true,
    "cypress/globals": true,
  },
};