module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "plugins": [
    '@typescript-eslint',
    "react"
  ],
  "extends": [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
  ],
  "parser": "@typescript-eslint/parser",  // ESLintでTypeScriptを解析する
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": 'detect',
    },
  },
  "rules": {}
}
