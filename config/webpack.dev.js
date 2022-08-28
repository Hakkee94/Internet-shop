const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('./paths')


module.exports = merge(common, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: paths.dist,
        open: true,
        compress: true,
        hot: true,
        port: 4000,
    },
})
