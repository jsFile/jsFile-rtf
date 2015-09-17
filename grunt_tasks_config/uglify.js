module.exports = function () {
    return {
        options: {
            compress: true,
            report: false
        },
        engine: {
            'src': 'dist/jsfile-rtf.js',
            'dest': 'dist/jsfile-rtf.min.js'
        }
    };
};