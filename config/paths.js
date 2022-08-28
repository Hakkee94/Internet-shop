const path = require('path')

module.exports = {
    index: path.resolve(__dirname, '../src/index.js'),
    catalog: path.resolve(__dirname, '../src/pages/catalog.js'),
    checkout: path.resolve(__dirname, '../src/pages/checkout.js'),
    gallery: path.resolve(__dirname, '../src/pages/gallery.js'),
    dist: path.resolve(__dirname, '../dist'),
    template: path.resolve(__dirname, '../src/index.html'),
    templateCatalog: path.resolve(__dirname, '../src/pages/catalog.html'),
    templateCheckout: path.resolve(__dirname, '../src/pages/checkout.html'),
    templateGallery: path.resolve(__dirname, '../src/pages/gallery.html')
}

