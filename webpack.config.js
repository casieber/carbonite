const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.tsx',
	},
	output: {
		globalObject: 'self',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new webpack.IgnorePlugin(
			/^((fs)|(path)|(os)|(crypto)|(source-map-support))$/,
			/vs(\/|\\)language(\/|\\)typescript(\/|\\)lib/
		),
	],
	devServer: {
		port: 3000,
		contentBase: path.join(__dirname, 'dist'),
	},
};
