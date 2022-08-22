const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    VueLoaderPlugin
} = require('vue-loader')
module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 30000,
        open: true
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|gif)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                },
                generator: {
                    filename: 'images/[hash:6][ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name]-[hash:10][ext]'
                }

            },
            {
                test: /\.js$/i,
                exclude: path.join(__dirname, 'node_modules'),
                use: [{
                    loader: 'babel-loader',
                    // options: {
                    //   presets: ['@babel/preset-env']
                    // }
                }]
            },
            {
                test: /\.vue/i,
                use: ['vue-loader']
            }


        ]
    }
}