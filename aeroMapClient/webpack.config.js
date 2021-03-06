const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const aeroMapSource = 'node_modules/aero-map/dist/';

module.exports = {
  entry: './src/index.ts',
  mode: "development",
  devServer:{
      watchFiles: ["src/**/*"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: [ 'url-loader' ]
      }
    ],
  },
  plugins:[
        new HtmlWebpackPlugin({
          template: './src/index.html', //source
          filename: 'index.html',  //destination
          favicon: './favicon.png'
        }),
      new CopyPlugin({
        patterns: [
            { from: path.join(aeroMapSource, 'AeroAssets'), to: 'AeroAssets' },
            { from: path.join(aeroMapSource, 'mapResources/Assets'), to: 'Assets' },
            { from: path.join(aeroMapSource, 'mapResources/Workers'), to: 'Workers' }
        ],
      }),
    ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFiles: ['index']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "source-map",
};