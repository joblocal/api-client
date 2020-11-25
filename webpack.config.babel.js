import path from 'path';

const resolve = (file) => path.resolve(__dirname, file);
const isProd = process.argv.indexOf('-p') !== -1;

const config = {
  mode: isProd ? 'production' : 'development',

  entry: resolve('src/index.js'),

  output: {
    path: resolve('dist'),
    filename: 'index.js',
    library: 'api-client',
    libraryTarget: 'commonjs2',
  },

  externals: {
    'devour-client': 'devour-client',
  },

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      src: resolve('src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

export default config;
