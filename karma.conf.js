/**
 * Karma configuration.
 *
 * @see {@link http://karma-runner.github.io/1.0/config/configuration-file.html}
 */

const webpackConfig = require("./webpack.config.js");

// Pass our webpack config to Karma without plugins specified
const webpackKarmaConfig = Object.assign(webpackConfig, {plugins: []});

module.exports = function(config) {
  config.set({
    basePath: "",

    frameworks: ["jasmine"],

    files: [
      { pattern: "test/spec.bundle.js", watched: false },
    ],
    // Make sure you run your files through `webpack`
    // if you add a new file path.
    preprocessors: {
      "test/spec.bundle.js": ["webpack"],
    },

    webpack: webpackKarmaConfig,

    webpackMiddleware: {
      // Reduce webpack output
      noInfo: true,
      stats: {
        chunks: false
      }
    },

    reporters: ["mocha"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS"],
    singleRun: true,
    concurrency: Infinity
  });
}
