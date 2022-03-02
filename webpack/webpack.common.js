const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackEnv) => {

    const isEnvDevelopment = webpackEnv === 'development';
    const isEnvProduction = webpackEnv === 'production';

    return {
        mode:webpackEnv,
        entry:'./src/index.js',
        output:{
            filename:'main.js',
            path:path.resolve(__dirname, '../dist'),
            // assetModuleFilename: 'asset/[name].[contenthash:8][ext][query]', //资源文件输出目录
        },
        module:{
            rules:[
               {
                   test:/.css$/i,
                   use:[
                    "style-loader",
                     "css-loader",
                     {
                             // css兼容性处理
                             loader: 'postcss-loader',
                             options: {
                               postcssOptions: {
                                 plugins: [
                                   [
                                     'postcss-preset-env',
                                     {
                                       autoprefixer: {
                                         flexbox: 'no-2009',
                                       },
                                       stage: 3,
                                     },
                                   ],
                                 ],
                               },
                             }
                     },
                   ]
               },
               {
                   test: /\.(png|svg|jpg|jpeg|gif)$/,
                   type: 'asset/resource', 
                   generator: {
                     filename: 'img/[name].[contenthash:8][ext][query]' //局部资源输出目录
                   },                 
               },
               //加载fonts字体或者其他资源
               {
                   exclude: /\.(js|mjs|ejs|jsx|ts|tsx|css|scss|sass|png|svg|jpg|jpeg|gif)$/i,
                   type: 'asset/resource', 
               },
               {
                   test: /\.js|\.jsx$/,
                   exclude: /node_modules/,
                   use: {
                       loader: 'babel-loader',
                       options: {
                         presets: [
                          [
                            "@babel/preset-env",
                            {
                              "modules":"commonjs",
                              "targets": {
                                "chrome": "67"
                              },
                              "useBuiltIns": "usage",
                              "corejs": 2
                            }
                          ],
                          "@babel/preset-react"                     
                         ],
                         plugins: [
                          [
                            "@babel/plugin-transform-runtime",
                            {
                              "absoluteRuntime": false,
                              "helpers": true,
                              "regenerator": true,
                              "useESModules": false
                            }
                          ],
                          [
                            "@babel/plugin-proposal-decorators",
                            {
                              "legacy": true,
                              "loose": true
                            }
                          ],                        
                         ],
                       }
                     },
               },
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({
                template:path.resolve(__dirname,'../public/index.ejs')
            })
        ],
        resolve: {
          alias: {
            '@': path.resolve(__dirname, '../src'),
            '~': path.resolve(__dirname, '../img'),
            // 下面可以继续新增别名
          }
        }
    };

}