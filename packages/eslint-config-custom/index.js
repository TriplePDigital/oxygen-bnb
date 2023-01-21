module.exports = {
  extends: ["prettier", "next/core-web-vitals"],
  plugins: ["prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"]
    }
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "prettier/prettier": ["error"],
    "no-unused-vars": "error",
    "prefer-const": "error",
    "no-irregular-whitespace": "error",
    "no-trailing-spaces": "error",
    semi: "off",
    "no-empty-function": "error",
    "no-duplicate-imports": "error",
    camelcase: "error"
  }
}
