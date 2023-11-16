module.exports = {
  env: {
    browser: true,
    jquery: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    // 使っていない変数はエラーとする。関数は対象外とする。
    "no-unused-vars": ["error", { vars: "all", args: "none" }],
    "no-console": ["off"],
  },
};
