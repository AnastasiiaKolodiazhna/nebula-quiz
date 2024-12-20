module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
};
