const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        login: path.resolve('./dev/login.jsx'),
        common: path.resolve('./dev/admin/common.jsx'),
        welcome: path.resolve('./dev/admin/welcome.jsx'),
        manage: path.resolve('./dev/admin/manage.jsx'),
        heading: path.resolve('./dev/admin/heading.jsx'),
        essay: path.resolve('./dev/admin/essay.jsx'),
        message: path.resolve('./dev/admin/message.jsx'),
        message_detail: path.resolve('./dev/admin/message_detail.jsx'),
        papercut: path.resolve('./dev/admin/paperCut.jsx'),
        products: path.resolve('./dev/admin/products.jsx'),
        video: path.resolve('./dev/admin/video.jsx'),
        location: path.resolve('./dev/admin/location.jsx'),

        home: path.resolve('./dev/index/home.jsx'),
        index: path.resolve('./dev/index/index.jsx'),
        txtlist: path.resolve('./dev/index/txtlist.jsx'),
        windex: path.resolve('./dev/index/windex.jsx'),
        wniren: path.resolve('./dev/index/wniren.jsx'),
        xwz_brandHistory: path.resolve('./dev/index/xwz_brandHistory.jsx'),
        zyj_list: path.resolve('./dev/index/zyj_list.jsx'),
        zyj_list_niren: path.resolve('./dev/index/zyj_list_niren.jsx'),
        yq_contact: "./dev/index/yq-contact.jsx"
    },
    output: {
        path: path.resolve('./public/js'),
        filename: '[name].js'
    },

    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: true
        //     }
        // })
    ]

}