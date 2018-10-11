var path = require('path');

module.exports = {
  entry: {
    app: "./assets/js/dev/app.js",
    vendor: "./assets/js/dev/vendor.js"
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./assets/js/dist"),
    filename: "[name].min.js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
