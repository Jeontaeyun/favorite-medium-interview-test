module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "react-app",
        "react-app/jest",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "@typescript-eslint/no-empty-function": ["off"]
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    "ignorePatterns": [".eslintrc.js"]
};