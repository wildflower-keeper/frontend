module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jsx-a11y",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: "./tsconfig.json",
    },
    "import/core-modules": ["@mui/x-charts"],
  },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        mjs: "never",
        tsx: "never",
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        some: ["nesting", "id"],
      },
    ],
    "react/jsx-props-no-spreading": [0],
    "react/button-has-type": [0],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "arrow-body-style": ["error", "always"],
    "react/require-default-props": [0],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
  globals: {
    NodeJS: true,
    React: "writable",
  },
};
