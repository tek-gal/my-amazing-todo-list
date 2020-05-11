const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);
const optimization = () => {
  const config = {
    splitChunks: { chunks: 'all' },
  };

  if (isProd) {
    config.minimize = true;
    config.minimizer = [
      new TerserWebpackPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ];
  }

  return config;
};

const cssLoaders = () => ([{
  loader: MiniCSSExtractPlugin.loader,
  options: {
    filename: filename('.css'),
    hmr: true,
  },
}, 'css-loader']);

const jsLoaders = (extra) => {
  const config = [{
    loader: 'babel-loader',
    options: {
      babelrc: true,
    },
  }];
  if (isDev) config.push('eslint-loader');
  if (extra) config.push(extra);
  return config;
};
const plugins = () => {
  const plgns = [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin(),
  ];
  if (isDev) plgns.push(new HotModuleReplacementPlugin());
  return plgns;
};

module.exports = {
  // mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.jsx',
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@js-learning': path.resolve(__dirname, 'src/js-learning'),
    },
  },
  devServer: {
    port: 8888,
    hot: true,
    compress: true,
  },
  optimization: optimization(),
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.(png|jpeg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: [...cssLoaders()],
      },
      {
        test: /\.s[ac]ss$/,
        use: [...cssLoaders(), 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: jsLoaders(),
      },
    ],
  },
};
