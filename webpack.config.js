import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

// __dirname을 ES 모듈에서 사용하기 위한 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Webpack 설정을 export
export default {
  mode: "development",
  entry: "./src/index.js", // 시작 파일
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // 번들 파일 저장 경로
    clean: true, // 기존 파일 삭제
  },
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "public"), // 정적 파일 경로
    port: 3000, // 개발 서버 포트
    open: true, // 자동으로 브라우저 열기
    hot: false, // HMR 비활성화
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js 파일을 대상으로
        exclude: /node_modules/, // node_modules 제외
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/, // node_modules 제외
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
