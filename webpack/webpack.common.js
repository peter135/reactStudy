const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (webpackEnv) => {

    const isEnvDevelopment = webpackEnv === 'development';
    const isEnvProduction = webpackEnv === 'production';

    return {
        mode:webpackEnv,
        entry:'./src/index.js',
        output:{
            filename:'main.js',
            path:path.resolve(__dirname, '../dist'),
        },
        module:{
            rules:[
               {
                   test:/.css$/i,
                   use:["style-loader", "css-loader" ]
               },
               {
                   test: /\.(png|svg|jpg|jpeg|gif)$/,
                   type: 'asset/resource', 
                   generator: {
                     filename: 'img/[name].[contenthash:8][ext][query]' //局部资源输出目录
                   },                 
               },
               {
                   test: /.ttf|eot|woff2?$/i,
                   type: 'asset/resource',
                   generator: {
                     filename: 'font/[name].[hash:6][ext]'
                   }
               },
               {
                   test: /\.(js|jsx)$/, 
                   exclude: /(node_modules|bower_components)/, 
                   use: {
                      loader: 'babel-loader', 
                      options: { 
                        presets: ['@babel/preset-env', '@babel/preset-react'], 
                        plugins: [ '@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties', ],
                      }
                    }, 
              },
            ]
        },
        plugins:[
          new CleanWebpackPlugin(),
          new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/index.ejs'),
            filename: 'index.html',
            inject: 'body',
            minify: {
              removeComments: true,
            },
            favicon:path.resolve(__dirname, '../public/favicon.ico'),
          }),
        ],
        resolve: {
          alias: {
            '@': path.resolve(__dirname, '../src'),
            '~': path.resolve(__dirname, '../img'),
          }
        }
    };

}