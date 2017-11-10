/**
 * Webpack 2 configuration.
 *
 * @see {@link https://webpack.js.org/configuration/}
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

// Name of output folder for webpack builds:
const OUTPUT_PATH = "dist";

const config = {
  // Main entry point for application:
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, OUTPUT_PATH),
    // `name` and `chunkhash` is used in order
    // to name `vendor` files as well.
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      // All files ending .js and .jsx (except those in `node_modules`) that are required by webpack
      // will pass through `babel-loader`.
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // Add additional Babel presets here if needed.
              // https://babeljs.io/docs/plugins/#presets
              presets: ["es2015", "react"],
              plugins: ["transform-runtime"]
            }
          }
        ]
      },

      // app.scss will be injected into index.html as a `<style>` tag.
      {
        test: /app\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [
                  require("autoprefixer")
                ]
              }
            }
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },

      // All files ending in .scss that is not app.scss will be loaded as a string.
      // This can be useful when importing styles into your application to pass
      // to component definitions.
      {
        test: /\.scss$/,
        exclude: /app\.scss$/,
        use: [
          {
            loader: "raw-loader"
          }, {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [
                  require("autoprefixer")
                ]
              }
            }
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },

      // CSS files will be injected into index.html as a `<style>` tag.
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      // All files ending in .html that are required by webpack will be loaded as a string.
      // This can be useful when importing HTML markup into your application to pass
      // to component definitions.
      {
        test: /\.html$/,
        use: ["raw-loader"]
      }
    ]
  },

  // Allows requiring/importing files without relative paths,
  // eg. import "src/folder/file.js"
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src")
    }
  },

  // webpack-dev-server options:
  devServer: {
    contentBase: path.join(__dirname, OUTPUT_PATH),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },

  // Webpack source maps:
  devtool: "cheap-eval-source-map",

  // Webpack plugins:
  plugins: [
    new CleanWebpackPlugin([OUTPUT_PATH]),

    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
      minChunks: function(module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    })
  ]
};

module.exports = config;
