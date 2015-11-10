module.exports = function (grunt) {
    return {
        main: {
            options: {
                target: 'global'
            },
            src: [
                'tests/files/**/*.*',
                '!tests/files/**/RTF-Spec-1.7.*'
            ],
            dest: 'tests/filesCache.js'
        }
    };
};