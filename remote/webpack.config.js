const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: {
    remote: './src/index.tsx',
  },
  mode: "development",
  devServer: {
    port: 3003, // il remote gira su http://localhost:3003
    historyApiFallback: true,
    allowedHosts: "all", // Permette l'accesso da qualsiasi host
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    publicPath: "http://10.0.99.26:3003/",
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
      name: "reactApp",
      filename: 'remoteEntry.js',
      exposes: {
        './Nav': './src/componets/Nav', // Assicurati che il percorso sia corretto
      },
      shared: {
        react: { singleton: true, requiredVersion: "^19.0.0", eager: true },
        "react-dom": { singleton: true, requiredVersion: "^19.0.0", eager: true },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
