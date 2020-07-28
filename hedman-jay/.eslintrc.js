module.exports = {
    env: {
        browser: true,
        es2020: true,
        jquery: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
};