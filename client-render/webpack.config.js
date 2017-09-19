var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 9000,
        historyApiFallback: true,
        proxy: {
          '/api': 'http://localhost:8000'
        }
    },
    module: {
        rules: [
            {
              test: /.js$/,
              loader: 'babel-loader',
              include: path.join(__dirname, 'app'),
              exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './app/tmpl.html'
        })
    ]
};
