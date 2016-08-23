// webpack.config.js
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
		'webpack/hot/dev-server',
    	'webpack-dev-server/client?http://localhost:8080',
		'./index.js'
		],
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				text: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
		]
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin()
	  ],

};