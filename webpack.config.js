const path = require("path")
const webpack = require("webpack")
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/"), // Location where output files are generated
    publicPath: "/", // Path pre-pended to VAR in tags (for example <script src=/VAR />) injected to index.html
  },
  module: {
    rules: [
      { // For transpiling JS ES6 and later
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      { // For loading stylesheets
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", 'sass-loader']
      },
      { // For loading images and fonts
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader'
      }
      // For loading .json files, json-loader is default in webpack
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".sass", ".scss", ".json", ".png", ".ttf"],
    alias: {
      links: path.resolve(__dirname, 'src/app/global/links'),
      icons: path.resolve(__dirname, 'src/app/global/icons'),
      style: path.resolve(__dirname, 'src/app/global/style')
    }
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `node_modules.${packageName.replace('@', '')}`; // Fix for .NET servers
          },
        },
      },
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"), // Location that devServer is expecting to find index.html and/or non-bundled static files
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true,
  },
}

//  Function to return module parameters set by mode: dev / prod
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    /* config.devtool = 'source-map'; */  // Devtool determines type of exported source map
    config.output.filename = '[name].js';
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(), // Enables dynamic compiling of assets by dev server when local changes are made
      new HtmlWebpackPlugin({ // Dynamically generates index.html with the following params
        title: 'Max Aubain',
        template: 'index-template.html',
        favicon: './favicon.png',
        meta: {
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          'Content-Security-Policy': {
            'http-equiv': 'Content-Security-Policy',
            content: "default-src *; connect-src * ws://* wss://*; style-src * 'unsafe-inline' 'unsafe-eval'; media-src * ; img-src * data:; font-src * ; script-src * 'unsafe-inline' 'unsafe-eval';"
          }
        }
      })
    ];
  }

  if (argv.mode === 'production') {
    config.output.filename = '[name].[chunkhash].js';
    config.plugins = [
      new CleanWebpackPlugin(),  // Deletes old contents in /dist before repopulating folder with latest build assets
      new HtmlWebpackPlugin({  // Dynamically generates index.html with the following params
        title: 'Max Aubain',
        template: 'index-template.html',
        favicon: './favicon.png',
        meta: {
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          'Content-Security-Policy': {
            'http-equiv': 'Content-Security-Policy',
            content: "default-src *; connect-src * ws://* wss://*; style-src * 'unsafe-inline' 'unsafe-eval'; media-src * ; img-src * data:; font-src * ; script-src * 'unsafe-inline' 'unsafe-eval';"
          },
          'og-image': {
            property: 'og:image',
            content: './src/img/social-media-preview.png'
          },
          'og-type': {
            property: 'og:type',
            content: 'website'
          },
          'og-url': {
            property: 'og:url',
            content: 'https://www.maxaubain.com'
          },
          'og-title': {
            property: 'og:title',
            content: 'Professional Website of Max Aubain'
          },
          'og-description': {
            property: 'og:description',
            content: 'Full stack developer and project manager.'
          }
        }
      })
    ];
  }

  return config;
};