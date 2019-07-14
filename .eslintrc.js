module.exports = {
  extends: [
    'codingitwrong',
    "plugin:cypress/recommended"
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
    "cypress/globals": true
  },
};