const path = require('path')

const input = path.resolve(__dirname, 'src')
const output = path.resolve(__dirname, 'dist')

/** @type import('webpack').Configuration */
module.exports = {
    context: input,
    entry: './index.ts',
    output: {
        path: output
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx']
    }
}
