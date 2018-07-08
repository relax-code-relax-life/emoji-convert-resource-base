module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        ajmd: './src/ajmd.js',
        hgaj: './src/hgaj.js',
        xm: './src/xm.js',
        xxy: './src/xxy.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        library: 'emojiConvertResource_[name]',
        libraryTarget: 'umd'
    },
    watch: false
}

