const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    sign_in: './src/app/sign_in.js',
    sign_up : './src/app/sign_up.js',
    reset : './src/app/reset.js',
    recoveryPassword : './src/app/recoveryPassword.js',
    emailSend : './src/app/emailSend.js',
    completeaccount : './src/app/completeaccount.js',
    completeyouraccount : './src/app/completeyouraccount.js',
    personalInfo : './src/app/personalInfo.js',
    personalInfowork : './src/app/personalInfowork.js',
    search: './src/app/search.js',
    searchwork: './src/app/searchwork.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  devServer: {
    contentBase: '.dist'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.html$/,
        use: [
          'html-loader',
          {
            loader: 'nunjucks-html-loader',
            options: {
              searchPaths: ['./src/templates/'],
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'image'
          }
          } 
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'sign-in.html',
      chunks: ['sign_in'],
      template: './src/templates/sign-in.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'reset.html',
      chunks: ['reset'],
      template: './src/templates/reset.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'emailSend.html',
      chunks: ['emailSend'],
      template: './src/templates/emailSend.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'recoveryPassword.html',
      chunks: ['recoveryPassword'],
      template: './src/templates/recoveryPassword.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-up.html',
      chunks: ['sign_up'],
      template: './src/templates/sign-up.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'completeaccount.html',
      chunks: ['completeaccount', 'completeyouraccount'],
      template: './src/templates/completeaccount.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'personalInfo.html',
      chunks: ['personalInfo', 'personalInfowork'],
      template: './src/templates/personalInfo.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'search.html',
      chunks: ['search', 'searchwork'],
      template: './src/templates/search.html'
    })
  ]
};