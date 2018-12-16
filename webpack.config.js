const path               = require('path')
const webpack            = require('webpack')
const BrowserSyncPlugin  = require('browser-sync-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin  = require('copy-webpack-plugin')

const {author, name: title, description, homepage, version} = require('./package.json')

const __DEV__ = Boolean(JSON.parse(process.env.DEV || 'true'))

const plugins = {
  common: [
    new webpack.DefinePlugin({__DEV__}),
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '/static/'),
      to  : path.join(__dirname, '/dist/static/'),
    }]),
  ],

  dev: [
    new BrowserSyncPlugin(
      {
        host  : process.env.IP || 'localhost',
        port  : process.env.PORT || 3000,
        open  : false,
        server: {
          baseDir: './dist',
        },
      },
    ),
  ],

  prod: [
    new CleanWebpackPlugin('dist'),
    new webpack.optimize.UglifyJsPlugin(
      {
        drop_console: true,
        minimize    : true,
        output      : {
          comments: false,
        },
        compress    : {
          warnings: false,
        },
      },
    ),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
}

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, 'src/main.jsx'),
      path.resolve(__dirname, 'index.ejs'),
    ],
  },

  output: {
    pathinfo  : true,
    path      : path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
    filename  : 'bundle.js',
  },

  watch: __DEV__,

  plugins: plugins.common.concat(
    __DEV__
    ? plugins.dev
    : plugins.prod,
  ),

  module: {
    rules: [
      {
        test   : /\.jsx?$/,
        loader : 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(less|css)$/,
        use : ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader',
            {
              loader : 'less-loader',
              options: {
                compress: !__DEV__,
              },
            },
          ],
        }),
      },
      {
        test: /\.ejs$/,
        use : [
          {
            loader : 'file-loader',
            options: {
              name      : '[name].html',
              context   : './',
              outputPath: './',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'ejs-webpack-loader',
            options: {
              data: {
                author,
                description,
                homepage,
                title,
                version,
              },
              htmlmin: true,
            },
          }
        ]
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias     : {
      '@' : path.join(__dirname, '/src'),
      root: path.join(__dirname, '/'),
    },
  },
}
