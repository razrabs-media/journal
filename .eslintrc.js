module.exports = {
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "@feature-sliced",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
  ],
  rules: {
    // TODO: Включить после исправления
    // https://github.com/feature-sliced/eslint-config/issues/92
    // https://github.com/feature-sliced/eslint-config/issues/93
    "import/no-internal-modules": "off"
  },
  overrides: [
    {
      files: ["pages/**"],
      rules: {
        "import/prefer-default-export": "error",
        "import/no-default-export": "off",
      },
    },
  ],
};
