//define HTML webpack plugin (this will inject nicely built
//js into the main index.html file, specified to body section)
var HTMLWebpackPlugin = require('html-webpack-plugin');
//create an instance of webpack config with following args
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  // template: __dirname + '/public/index.html',
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});

//define how to transform and export the input js files
module.exports = {
  // entry: __dirname + '/src/index.js',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|pdf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig],
  mode: 'development'
};

// Render works for outermost component, say it's called app:
// var React = require('react');
// var ReactDOM = require('react-dom');
// var App = require('./components/App');

// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );