module.exports = {
  extends: ["airbnb-base", "prettier"],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  plugins: ["prettier", "import"],
  rules: {
    "no-console": 0,
    camelcase: 0,
    "no-shadow": 0,
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "consistent-return": 0,
    "no-sequences": 0
  }
};
