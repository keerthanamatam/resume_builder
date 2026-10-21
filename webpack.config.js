const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",

    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "static/js/bundle.js",
        clean: true,
        publicPath: "/",
    },

    module: {
        rules: [
            //Javascript / Jsx
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },

            // CSS
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            // Images and other assets
            {
                test: /\.(png|jpe?g|gif|svg|ico|webp)$/i,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[name][ext]",
                },
            },

            // Fonts
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "static/fonts/[name][ext]",
                },
            },

        ],
    },

    resolve: {
        extensions: [".js", ".jsx"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],

    devtool: "eval-source-map",

    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },

        port: 3000,

        open: true,

        hot: true,

        historyApiFallback: true,

    }


}