const path = require('path')
const folter = 'football'

module.exports = (mode = 'development') => {
    const isProduction = mode === 'production';
    return {
        entry: "./football/src/index.ts",
        mode: 'development',                          
        output: {
            path: __dirname + '/'+folter,	
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
        devServer: {
			contentBase: path.join(__dirname, folter),
			compress: true,
			port: 9200
		}
    }
}