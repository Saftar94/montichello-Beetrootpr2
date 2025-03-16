const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8092,
        hot: true,
        open: true,
        watchFiles: ['src/**/*'],
        liveReload: true,
        client: {
            overlay: true
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                },
                exclude: /\.svg$/i,
            },
            {
                test: /\.svg$/i,
                use: ['@svgr/webpack', 'file-loader'], // Используйте @svgr/webpack для обработки SVG
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/i,
                use: ['@svgr/webpack', 'file-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.min.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/images'),
                    to: path.resolve(__dirname, 'dist/images'),
                }
            ]
        })
    ],
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.jpg', '.png', '.svg']
    }
};