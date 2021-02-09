// babel.config.js
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-proposal-class-properties",
    [
      {
        useBuiltIns: true,
      },
    ],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-transform-react-constant-elements",
    "@babel/plugin-transform-react-inline-elements",
    "babel-plugin-transform-react-class-to-function",
    "transform-react-remove-prop-types",
    "object-values-to-object-keys",
    "transform-es2015-modules-commonjs",
  ],
};
