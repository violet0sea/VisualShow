/*
* @Author: FunctionRun
* @Date:   2017-01-10 10:15:18
* @Last modified by:   haiwang
* @Last modified time: 2017-01-16 13:48:47
* @Email: zhangyujie3344521@163.com
* @File Path: /Users/zhangyujie/GitHub/FEscaffold/webpack.lib.js
* @File Name: webpack.lib.js
* @Descript:
*/

'use strict';
const webpack = require('webpack');

const libs = [
    'react',
    'react-dom',
    'react-router'
];
module.exports =  {
    output: {
        path: 'public/lib',
        filename: '[name].js',
        library: '[name]'
    },
    entry: {
        libs
    },
    module: {
        loaders: []
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'lib_manifest.json',
            name: '[name]',
            context: __dirname
        })
    ]
};
