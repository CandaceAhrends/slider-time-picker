const path = require("path");
var webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const config = {
  entry: "./lib/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: 'bundle.js',
    globalObject: 'this',
    library: {
      name: 'TimePicker',
      type: 'umd'
    }
  },
  devtool: mode === 'development' ? "source-map" : false,
  mode: mode,
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  },
  externals: {
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled",
      root: "styled"
    },
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  module: {
    rules: [
      {
        test: /\.script.js$/,
        use: ['script-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], //first style-loader at last sass-loader
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
        use: [
          'file-loader'
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    allowedHosts: "all"
  },
  plugins: [

    new MiniCssExtractPlugin({ filename: 'tp.css' }),

    new webpack.DefinePlugin({
      'process.env': {
        LOGGING: mode === 'development' ? true : false
      }
    })
  ],
};

module.exports = config;