const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";

    return {
        mode: isProduction ? "production" : "development",
        entry: path.resolve(__dirname, "src", "index.tsx"), // 프로젝트가 시작되는 파일 지정
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        module: {
            rules: [
                //규칙 정의
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: "@svgr/webpack",
                            options: {
                                icon: true,
                            },
                        },
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]?ver=[hash]",
                                outputPath: "images",
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|gif|jpeg)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]?ver=[hash]",
                                outputPath: "images",
                            },
                        },
                    ],
                },
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                        },
                    ],
                },
            ],
        },
        output: {
            path: path.resolve(__dirname, "build"), // 번들링될 파일이 저장될 위치와 이름 지정
            chunkFilename: "[name].js?ver=[hash]",
            filename: "[name].js?ver=[hash]",
            publicPath: "/",
        },
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            port: 3000,
            open: true,
            hot: true,
            historyApiFallback: true,
        },
        optimization: {
            minimize: isProduction,
        },
        plugins: [
            new CleanWebpackPlugin(), // 이전 빌드 파일 삭제
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "src", "index.html"),
            }),
            new Dotenv({
                path: isProduction ? ".env.production" : ".env.development",
                defaults: ".env",
                allowEmptyValues: true,
                systemvars: true,
            }),
        ],
    };
};
