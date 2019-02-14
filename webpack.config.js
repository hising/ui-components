const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const config = {
    output: {
        path: path.resolve("dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {test: /\.[tj]sx?$/, loader: "babel-loader"}
        ]
    },
    plugins: []
};

module.exports = (env, argv) => {
    const devMode = argv.mode === "development";
    config.entry = "./src/index.ts";

    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: devMode ? "[name].css" : "[name].[hash].css",
            chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
        })
    );

    config.module.rules.push(
        {
            test: /\.s?css$/,
            use: [
                devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }
    );
    return config;
};
