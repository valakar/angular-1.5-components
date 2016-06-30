const
    webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
// ExtractTextPlugin = require('extract-text-webpack-plugin'),
    SpritesmithPlugin = require('webpack-spritesmith'),
    autoprefixer = require('autoprefixer');

module.exports = {
    // devtool: NODE_ENV == DEV ? 'cheap-inline-module-source-map' : null,
    devtool: 'cheap-inline-module-source-map',
    context: path.join(__dirname, 'src'),
    entry: {
        app: './app'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js',
        publicPath: '/',
        library: '[name]'
    },

    plugins: [
        new webpack.DefinePlugin({
            // NODE_ENV: JSON.stringify(NODE_ENV)
            NODE_ENV: JSON.stringify(false)
        }),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.jade',
            inject: false,
            removeStyleLinkTypeAttributes: true

        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        // new ExtractTextPlugin('styles.css', {
        //     allChunks: true
        // }),
        new SpritesmithPlugin({
            src: {
                cwd: __dirname + '/src/images',
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'public/sprite.png'),
                css: path.resolve(__dirname, 'src/styles/sprite.sass')
            },
            apiOptions: {
                cssImageRef: "../../public/sprite.png"
            }
        })
    ],

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: [/node_modules/, /\.spec.js$/]
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: ['transform-es2015-modules-commonjs']
                }
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.sass$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
            // {
            //     test: /\.css$/,
            //     loader: 'style!css'
            // },
            // {
            //     test: /\.sass$/,
            //     loader: ExtractTextPlugin.extract('css!postcss!sass')
            // },
            {test: /\.html$/, loader: 'raw'},
            {
                test: /\.jade$/,
                loader: "jade"
            },
            {
                context: __dirname + '/src/images/static',
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            // helps to load bootstrap's css.
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.woff2$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=image/svg+xml'
            }
            // ,
            // {
            //     context: __dirname + '/src/images',
            //     exclude: /static/,
            //     test: /\.png$/,
            //         loader: 'file?name=sprite.[ext]'
            // }
        ],

        resolve: {
            modulesDirectories: ['node_modules', 'spritesmith-generated'],
            extensions: ['', '.js', 'sass']
        },

        resolveLoader: {
            modulesDirectories: ['node_modules'],
            moduleTemplates: ['*-loader', '*'],
            extensions: ['', '.js']
        }
    },

    postcss: () => [autoprefixer]
};

// if (NODE_ENV == PROD) {
if (false) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}
