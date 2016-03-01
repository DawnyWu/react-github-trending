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
            },
            { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
            { test: /\.useable\.css$/, loader: "style/useable!css" },
            { 
              test: /\.css$/, 
              loader: "style-loader!css-loader" 
            },
            {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
            },
            { test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
              loader : 'file-loader' 
            }
        ]
    }
}