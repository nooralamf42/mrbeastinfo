import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    files: ["**/*"],
    rules: {
      // Completely disable all image-related warnings
      "@next/next/no-img-element": "off",
      "jsx-a11y/alt-text": "off",
      "jsx-a11y/img-redundant-alt": "off",

      // Disable all TypeScript expression-related rules
      "@typescript-eslint/no-unused-expressions": "off",
      "typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-unused-expressions": "off",

      // Disable React-related rules
      "react/no-unescaped-entities": "off",
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",

      // Additional strict disabling
      "no-unused-vars": "off",
      "no-empty-function": "off"
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"]
  })
];

export default eslintConfig;
