// webpack.config.js
const path = require('path');

module.exports = {
    entry: {
        home: './src/home.js',
        login: './src/login.js',
        signup: './src/signup.js',
        script: './src/script.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist', 'Bundles'),
    },
    plugins: [
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules|\.gitignore/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
        
    },
};