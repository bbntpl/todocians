const path = require('path');
module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '..', 'dist')
    },
    devtool: 'inline-source-map'
}