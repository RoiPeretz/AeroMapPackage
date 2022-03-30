const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
          filename: 'index.html'  //destination
        }),
        new webpack.DefinePlugin({
          // Define relative base path in cesium for loading assets
          CESIUM_BASE_URL: JSON.stringify('')
      }),
        new CopyPlugin({
          patterns: [
              //{ from: "./node_modules/tiny/AeroAssets", to: "AeroAssets"},
              { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
              { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
              { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' }
          ],
      })
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