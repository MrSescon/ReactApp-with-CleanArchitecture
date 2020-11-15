const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: '/src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: 'public/js',
    fileName: 'bundle.js'
  },
  resolve: {
    extensions: ['ts', 'tsx', 'js', 'scss'],
    alias: {
      '@' : path.join(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true
  },
  externals: {
    react: 'react',
    'react-dom': 'reactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}