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
            path:path.resolve(__dirname, 'dist')
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
                   type: 'asset', 
                   generator: {
                     filename: 'image/[name].[contenthash:8][ext][query]'
                   },
                   // output: {
                   //     assetModuleFilename: 'asset/[name].[contenthash:8][ext][query]', 
                   //   }                  
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
                            "@babel/preset-env", "@babel/preset-react",                      
                            //   "@babel/preset-env",
                            //  {
                            //      "useBuiltIns": "usage",
                            //      "corejs": 3,
                            //  }

                         ],
                         plugins: [
                            '@babel/plugin-transform-runtime',
                              // {
                              //   "helpers": true, 
                              //   "corejs": 3,
                              //   "regenerator": true,
                              // }                           
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
        ]
    };

}