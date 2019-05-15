"use strict";

module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        es6: true
    },
    extends: ['airbnb-base'],
    plugins: ["gridsome"],
    rules: {
        "gridsome/format-query-block": "warn",
        "gridsome/require-g-image-src": "error",
        "gridsome/require-g-link-to": "warn",
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "off",
        "no-use-before-define": "off",
    }
};
