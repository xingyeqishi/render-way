var path = require('path');
var webpack = require('webpack');
var glob = require('glob');

let entryArr = glob.sync('./app/client/*.js');
let entries = {};
entryArr.forEach((item) => {
    let fileName = path.basename(item, '.js');
    entries[fileName] = item;
});

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, 'build'),
        filename: "[name].bundle.js"
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
    }
};
