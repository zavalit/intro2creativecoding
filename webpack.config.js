const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/scripts/index.js'),
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /(\.svg|\.jpeg|\.png)$/, use: ['file-loader'] },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // fallback to style-loader in development
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, './src/statics') }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            minify: true
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
};
