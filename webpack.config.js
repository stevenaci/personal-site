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
          }
        ]
    }
}