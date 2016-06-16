module.exports = function (config) {

    config.set({

        basePath: '',
        frameworks: ['mocha', 'sinon-chai', 'chai'],
        files: [
            {
                pattern: 'test.config.js',
                watched: false
            }
        ],
        exclude: [],
        preprocessors: {
            'test.config.js': ['webpack', 'sourcemap']
        },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.js/,
                        exclude: [/node_modules/],
                        loader: 'babel',
                        query: {
                            plugins: ['transform-es2015-modules-commonjs']
                        }
                    },
                    { test: /\.html/, loader: 'raw' },
                    { test: /\.jade$/, loader: 'jade-loader' },
                    { test: /\.sass/, loader:  ['style', 'css?sourceMap', 'sass?sourceMap'] },
                    { test: /\.css$/, loader: 'style!css' }
                ]
            }
        },
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["PhantomJS"],
        singleRun: true
    });
};