const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: __dirname + '/src/single-spa-examples.js',
	output: {
		path: process.cwd() + '/build',
		filename: '[name].js',
		publicPath: '/build/',
	},
	devtool: 'inline-source-map',
	devServer: {
		port: 8080,
		publicPath: '/build/',
		contentBase: './',
		historyApiFallback: {
			index: '200.html',
		},
	},
	resolve: {
		modules: [
			"node_modules",
			path.resolve(__dirname, "./"),
		],
		alias: {
			'single-spa': path.resolve(__dirname, 'node_modules/single-spa/lib/single-spa.js'),
		},
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.html$/,
				exclude: /node_modules|svelte/,
				loader: 'html-loader',
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules|inferno|preact/,
				loader: 'babel-loader',
				query: getBabelConfig(),
			}
		],
	},
	plugins: [
		new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './src')),
	],
};

function getBabelConfig() {
	return {
		presets: [
			'react',
			['babel-preset-env', {
				targets: {
					"browsers": ["last 2 versions"],
				},
			}],
		],
		plugins: [
			'transform-object-rest-spread',
			'transform-class-properties',
			'syntax-dynamic-import',
			'transform-function-bind',
		],
	};
}
