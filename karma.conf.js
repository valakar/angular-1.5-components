module.exports = function (config) {

    config.set({

        basePath: '',
        frameworks: ['mocha', 'sinon-chai', 'chai'],
        files: [
            'test.config.js'
        ],
        exclude: [],
        preprocessors: {
            'test.config.js': ['webpack', 'sourcemap']
        },
        reporters: ['coverage'],
        // reporters: ['progress', 'dots', 'coverage'],
        coverageReporter: {
            reporters: [
                {type: 'lcov', dir: 'coverage/', subdir: '.'},
                {type: 'json', dir: 'coverage/', subdir: '.'},
                {type: 'text'}
            ]
        },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: [/node_modules/],
                        loader: 'babel',
                        query: {
                            plugins: ['transform-es2015-modules-commonjs']
                        }
                    },
                    {
                        test: /\.js$/,
                        loader: 'isparta',
                        exclude: /node_modules|\.spec.js$|\.config.js$/
                    },
                    { test: /\.html$/, loader: 'raw' },
                    { test: /\.jade$/, loader: 'jade-loader' },
                    { test: /\.sass$/, loader:  ['style', 'css?sourceMap', 'sass?sourceMap'] },
                    { test: /\.css$/, loader: 'style!css' }
                ]
            }
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["PhantomJS"],
        singleRun: true
    });
};
