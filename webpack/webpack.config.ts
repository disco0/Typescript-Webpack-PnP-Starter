//#region Imports

// Node
import path    from 'path';

// npm
import webpack from 'webpack';

//#endregion Imports

const base   = path.resolve(__dirname, '../src')
const outDir = path.resolve(__dirname, '../dist')

const config: webpack.Configuration = 
{
    context: base,
    entry:  './index.ts',

    output: 
    {
        path: outDir
    },
    module: 
    {
        rules: 
        [
            {
                test: /\.([jt]sx?)$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx']
    }
}

export default config;
