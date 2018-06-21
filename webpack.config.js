
module.exports = {
    mode: 'production',
    entry: {
      index:'./src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname+'/dist',
        library: 'emojiConvertResourceBase',
        libraryTarget: 'umd'
    },
    watch: false
}

