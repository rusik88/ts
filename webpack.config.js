const path = require('path')

module.exports = (mode = 'development') => {
    const isProduction = mode === 'production';
    return {
        entry: "./maps/src/index.ts",
        mode: 'development',                          
        output: {
            path: __dirname + '/maps',	
            filename: "bundle.js"
        },
        module: {
            rules: [
            {
               test: /\.(js|jsx|tsx|ts)$/,
               exclude: /node_modules/,
               loader: 'babel-loader'
              }
            ]
          },
          resolve: {
            extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
        },
    }
}