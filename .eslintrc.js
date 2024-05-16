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
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y"],
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
  },
  globals: {
    NodeJS: true,
    React: "writable",
  },
};
