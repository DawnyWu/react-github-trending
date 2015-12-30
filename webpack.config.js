module.exports = {
    entry: './App.js',
    output: {
        path: './index.js'
    },
    devServer: {
        inline: true,
        port: 3334
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}