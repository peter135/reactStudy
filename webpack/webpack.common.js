const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const glob = require('glob'); // 文件匹配模式

function resolve(dir){
  return path.join(__dirname, dir);
}

const PATHS = {
  src: resolve('../src')
}

module.exports = (webpackEnv) => {

    return {
        mode:webpackEnv,
        entry:'./src/index.js',
        output:{
            filename: 'js/[name].js',
            path:path.resolve(__dirname, '../dist'),
        },
        module:{
            rules:[
               {
                   test:/\.css$/i,
                   use:[ MiniCssExtractPlugin.loader, "css-loader" ]
               },
               {
                  test: /\.s[ac]ss$/i,
                  use: [ MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
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
          new MiniCssExtractPlugin({ // 添加插件
            filename: '[name].[hash:8].css'
          }),
          new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/index.html'),
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
        },
        optimization: {
          minimize: true,
          minimizer: [
            // 添加 css 压缩配置
            new OptimizeCssAssetsPlugin({}),
            new TerserPlugin({})
          ],
          splitChunks: {
            cacheGroups: { // 配置提取模块的方案
              default: false,
              styles: {
                  name: 'styles',
                  test: /\.(s?css|less|sass)$/,
                  chunks: 'all',
                  enforce: true,
                  priority: 10,
                },
                common: {
                  name: 'chunk-common',
                  chunks: 'all',
                  minChunks: 2,
                  maxInitialRequests: 5,
                  minSize: 0,
                  priority: 1,
                  enforce: true,
                  reuseExistingChunk: true,
                },
                vendors: {
                  name: 'chunk-vendors',
                  test: /[\\/]node_modules[\\/]/,
                  chunks: 'all',
                  priority: 2,
                  enforce: true,
                  reuseExistingChunk: true,
                },
               // ... 根据不同项目再细化拆分内容
            },
          }
        },
    };

}