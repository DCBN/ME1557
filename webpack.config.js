const webpack = require('webpack');
const path = require('path');

//Plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/angular/app.js'),
    output: {
	filename: 'bundle.js',
	path: path.join(__dirname, 'public/js'),
    },
    module: {
	loaders: [
	    {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
	    {test: /\.html$/, loader: 'html'}
	]
    }
};
