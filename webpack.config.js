var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin=require('clean-webpack-plugin')
//var UglifyJsPlugin=require('webpack-optimiz-UglifyJsPlugin')
var extractCSS = new ExtractTextPlugin("css/[name]-[hash].css")
    module.exports = {
        entry: __dirname+'/js/entry.js',
        output: {
            path: __dirname+'/public',
            // publicPath: "public/",
            // publicPath:"http://localhost:8080/xrk/public/",
            filename: 'bundle.[hash].js'
        },
        module: {
            loaders: [
                // {test: /\.css$/, use: ExtractTextPlugin.extract(["css-loader"])},
                {test: /\.css$/, use: ExtractTextPlugin.extract({publicPath:"../",use:["css-loader?minimize"]})},
                {test: /\.scss$/,loader: ExtractTextPlugin.extract("style-loader", 'css!sass')},
                // {test: /\.css$/, use: ExtractTextPlugin.extract({publicPath:"../",use:["css-loader"]})},
                {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=images/[hash].[ext]'},
                {test: /\.svg/, loader: 'svg-url-loader'}
            ]
        },
        devServer:{
            historyApiFallback:true,
            hot:true,   
            inline:true
            // progress:true,
        },
        plugins:[
          extractCSS,
          new HtmlWebpackPlugin({
            title: 'hello webpack',
            filename:'index.html',
            template: 'index.html',
          }),
          new CleanWebpackPlugin(['public'],
          {
            // root:'/xrk',
            verbose:true,
            dry:false,
            exclude:['index2.html','index.html']

          }),
          new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
          }),
          new webpack.DefinePlugin({
            'process.env.NODE.ENV':"development"
          }),
          new webpack.HotModuleReplacementPlugin()
           ]        
    }



