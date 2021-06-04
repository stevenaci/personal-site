const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    module: {
        loaders: [
          {
            test: /\.js$|jsx/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
              cacheDirectory: true,
              presets: ['react', 'es2015']
            }
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin()
    ]
}