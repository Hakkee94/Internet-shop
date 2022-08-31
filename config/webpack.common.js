const paths = require('./paths')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: paths.index,
        catalog: paths.catalog,
        checkout: paths.checkout,
        gallery: paths.gallery,
    },
    output: {
        path: paths.dist,
        filename: "[name].bundle.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Internet-shop",
            template: paths.template,
            filename: "index.html",
            chunks: ["main"]
        }),
        new htmlWebpackPlugin({
            title: "Catalog",
            template: paths.templateCatalog,
            filename: "catalog.html",
            chunks: ["catalog", "main"]
        }),
        new htmlWebpackPlugin({
            title: "Checkout",
            template: paths.templateCheckout,
            filename: "checkout.html",
            chunks: ["checkout", "main"]
        }),
        new htmlWebpackPlugin({
            title: "gallery",
            template: paths.templateGallery,
            filename: "gallery.html",
            chunks: ["gallery", "main"]
        })
    ],
    module: {
        rules: [
            {
                test: [/\.css$/, /\.scss$/],
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: [/\.gif$/, /\,jpe?g$/, /\.ico$/, /\.png$/],
                type: "asset/resource"
            },
            {
                test: /\.svg$/,
                type: "asset/inline"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}