module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
        "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["react", "@typescript-eslint"],
    "rules": {
        "no-debugger": "off",
        // "no-unused-vars": ["warn", { "varsIgnorePattern": "^React$" }],
        //忽略React变量
        "@typescript-eslint/no-unused-vars":["warn", { "varsIgnorePattern": "^React$" }]
    }
};