const path = require("path");
const outputPath = path.resolve(__dirname, "./dist");
const htmlContentpath = path.resolve(__dirname, "./dist/html");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: htmlContentpath,
    },
  },
};
