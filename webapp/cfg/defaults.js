/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {

  return {
    dist : {
      preLoaders: [
        {
          test: /\.(js|jsx)$/,
          include: srcPath,
          loader: 'eslint-loader'
        }
      ],
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer")  //打包
        },
        {
          test: /\.sass/,
          loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader?outputStyle=expanded&indentedSyntax'
        },
        {
          test: /\.scss/,
          loader : ExtractTextPlugin.extract("style", 'css!sass'), //打包
        },
        {
          test: /\.less/,
          loader: 'style-loader!css-loader!less-loader'
        },
        {
          test: /\.styl/,
          loader: 'style-loader!css-loader!stylus-loader'
        },
        {
          test: /\.(png|jpg|gif|woff|woff2)$/,
          loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]'
        },
        {
          test: /\.(mp4|ogg|svg)$/,
          loader: 'file-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    serve : {
      preLoaders: [
        {
          test: /\.(js|jsx)$/,
          include: srcPath,
          loader: 'eslint-loader'
        }
      ],
      loaders: [
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader!autoprefixer'  //热更新
        },
        {
          test: /\.sass/,
          loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader?outputStyle=expanded&indentedSyntax'
        },
        {
          test: /\.scss/,
          loader : 'style-loader!css-loader!autoprefixer!sass-loader?outputStyle=expanded'  //热更新
        },
        {
          test: /\.less/,
          loader: 'style-loader!css-loader!less-loader'
        },
        {
          test: /\.styl/,
          loader: 'style-loader!css-loader!stylus-loader'
        },
        {
          test: /\.(png|jpg|gif|woff|woff2)$/,
          loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]'
        },
        {
          test: /\.(mp4|ogg|svg)$/,
          loader: 'file-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    }
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};
