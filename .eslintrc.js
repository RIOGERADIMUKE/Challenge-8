module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "linebreak-style": 0,
        "indent": "off",
        "no-unused-vars": "off",
        "class-methods-use-this": ["error", {
            "enforceForClassFields": false
        }],
        "import/no-dynamic-require": "off",
        "global-require": "off"
    }
}