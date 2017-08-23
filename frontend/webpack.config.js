// plugins
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var title = "ROCC";

var config = function (env){

    var isDev = typeof env !== "undefined" && env === "dev" ? true : false;

    return {
        entry: {
            app: "./src/index" //NISH
        },
        output: {
            //filename: "main-[hash].js",
            filename: "bundle.js",
            path: "/home/app/public/",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader?cacheDirectory=true"
                },
                {
                    test: /\.css$/,
                    use: [ "style-loader", "css-loader" ]
                },
                {
                    test: /\.(ttf|png|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                    loader: "file-loader"
                },
                {
                    test: /\.scss$/,
                    loaders: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.jsx?$/,         // Match both .js and .jsx files
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query:
                    {
                        presets:['es2015','react', 'stage-2']
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: title,
                filename: "index.html",
                template: "html/index.ejs", //NISH
                inject: "body"
            })
        ],
        watchOptions: {
            poll: true
        },

        watch: isDev
    };

};

module.exports = config;
