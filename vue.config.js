
const webpack = require("webpack");

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery",
            }),
            new webpack.ProvidePlugin({
                Moment: "moment",
            }),
            new webpack.ProvidePlugin({
                S: "string",
            }),
            new webpack.ProvidePlugin({
                UUID: "uuid",
            }),
        ],
    },
    devServer: {
        open: true,
        proxy: {
            "/api/pingpoint": {
                target: "http://192.168.0.58:19999",
                changeOrigin: true,
                secure: false,
                pathRewrite: (path, req) => {
                    let newPath = path.replace("/api/pingpoint", "");
                    return newPath;
                },
            },
            "/api": {
                target: "http://localhost:10241",
                changeOrigin: true,
                secure: false,
            },
        }
    },
};
