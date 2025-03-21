const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: './src/index',
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: true
  },
  output: {
    publicPath: "http://localhost:3002/",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        remote: 'remote@http://10.0.99.26:3003/remoteEntry.js'
      },      
      shared: {
        react: { singleton: true, requiredVersion: "^19.0.11", eager: true },
        "react-dom": { singleton: true, requiredVersion: "^19.0.4", eager: true }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
