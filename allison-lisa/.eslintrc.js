module.exports = {
    env: {
        browser: true,
        es6: true,
        jquery: true
    },
    extends: "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        "no-console": "off",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "single"],
        semi: ["error", "always"]
    }
};