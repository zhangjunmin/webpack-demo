const path = require('path') //处理路径
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 处理vue
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 处理html
const jquery = 'https://cdn.bootcdn.net/ajax/libs/jquery/1.10.0/jquery.js';
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin'); // 可以处理第三方插件
module.exports = {
    // 入口文件
    entry: './src/main.js',
    mode: 'development', // 
    output: {
        // 输出路径
        path: path.resolve(__dirname, 'dist'),
        // 输出文件名
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        useLocalIp: true, // 设置0000，避免打开0000
        host: '0.0.0.0',
        port: 8080,
        open: true,
        hot: true,
        overlay: {
            warnings: true,
            errors: true
        },
        // 主要看最终的访问路径 tarhet + 重新的 hash
        // 如 服务器端 http://127.0.0.1:3000/todo/.... 就要凑成这样的。
        proxy: {
            '/api': {
              target: 'http://127.0.0.1:3000', // 目标接口的域名
              // secure: true,  // https 的时候 使用该参数
              changeOrigin: true,  // 是否跨域
              secure: false,
              pathRewrite: {
                '^/api' : '/todo'  // 重写路径
              }
            }
          }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'style-loader', 'css-loader']
        }, {
            test: /\.(woff|woff2|svg|ttf|eot)$/,
            loader: "file-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack demo',
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
        // ,new HtmlWebpackTagsPlugin({
        //   scripts: [jquery],
        //   append: false, })
    ]
}