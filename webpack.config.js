const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'app.bundle.js',
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
      template: './src/templates/sign-in.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'reset.html',
      template: './src/templates/reset.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'emailSend.html',
      template: './src/templates/emailSend.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'recoveryPassword.html',
      template: './src/templates/recoveryPassword.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-up.html',
      template: './src/templates/sign-up.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'completeaccount.html',
      template: './src/templates/completeaccount.html'
    })
  ]
};