module.exports = {
  extends: ["airbnb-typescript-prettier"],
  rules: { "react/no-unescaped-entities": 0 },
  plugins: ["simple-import-sort"],
  overrides: [
    {
      files: ["**/*.js"],
      extends: ["eslint:recommended"],
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["airbnb-typescript-prettier"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        "import/prefer-default-export": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",
        "react/no-array-index-key": "warn",
        "react/prop-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "jsx-a11y/anchor-is-valid": "off",
      },
    },
  ],
  rules: {
    "no-underscore-dangle": "off",
    "no-console": "off",
    "simple-import-sort/imports": "error",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-unused-expressions": "off",
  },
};
