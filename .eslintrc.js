module.exports = {
  root: true,
  // This tells ESLint to load the eslint-config-custom from the package `eslint-eslint-config-custom-custom`
  extends: ["eslint-config-custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
