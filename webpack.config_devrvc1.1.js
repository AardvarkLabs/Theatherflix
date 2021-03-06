

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: path.join(__dirname, './public/'),
    filename: 'bundle.js'
  },
  // Please don't change this part of the webpach config. The 'resolve'
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx'
    },
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 8080,
    contentBase: './app/dev'
  },
  plugins: [new ExtractTextPlugin('app.css')], // will bundle all the css to this app.css file
  module: {
    rules: [{
      test: /.js[x]?$/, // will look for .js and .jsx files
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread'] // you can use object-rest-spread at the code
      },
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader') // loads all the style
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/, // packs all fonts, images, etc
      loader: 'file'
    }]
  }
}
