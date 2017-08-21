/**
 * @file karma配置
 * @author xuexb <fe.xiaowu@gmail.com>
 */

module.exports = function(config) {
    config.set({
        basePath: '',
        plugins: ['karma-*'],
        frameworks: ['mocha', 'chai'],
        files: [
            'src/laytpl.js',
            'test/**/*.js'
        ],
        exclude: [],
        preprocessors: {
            'src/**/*.js': ['coverage']
        },
        reporters: [
            'mocha'
        ],
        coverageReporter: {
            // specify a common output directory
            dir: '.',
            reporters: [
                // { type: 'html', subdir: 'report-html' },
                {
                    type: 'lcov',
                    subdir: 'coverage'
                },
                {
                    type: 'text-summary'
                }
            ]
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        browsers: [
            'PhantomJS'
        ],
        autoWatch: false,
        singleRun: true
    });
};