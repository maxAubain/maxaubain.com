const path = require("path")
const webpack = require("webpack")
const fs = require("fs")

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "[name].[hash].bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    watchContentBase: true,
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

const fileArray = fs.readdirSync(module.exports.output.path)
console.log(fileArray)