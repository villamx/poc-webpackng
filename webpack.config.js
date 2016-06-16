var basedir = __dirname + '/public';

console.log(basedir);

module.exports = {
    /*context: basedir,*/
    devtool: 'eval',
    entry: [
        basedir + '/index.js'
    ],
    output: {
        path: basedir,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    }
};
