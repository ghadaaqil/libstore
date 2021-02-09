module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.test.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: { "^.+\\.jsx?$": "babel-jest" },
};
