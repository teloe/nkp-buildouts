module.exports = {
    env: {
        browser: true,
        es2021: true,
        jquery: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: ['vue'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
};
