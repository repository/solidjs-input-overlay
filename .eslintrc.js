module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["solid", "@typescript-eslint/eslint-plugin"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "plugin:solid/typescript"],
  root: true,
  env: {},
  ignorePatterns: ["node_modules/*", "dist/*", "!.prettierrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
