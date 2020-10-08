## 学习webpack
#### 安装 
   -  npm install --save-dev webpack 
   -  npm install --save-dev webpack-cli 4版本以上必须
#### 配置
    最基本的配置 
```
  {
    entry: path, // 入口方法
    mode: 'production' || 'development' // 生产模式还是开发模式
    target: 'web'// 
    // 输出定义
    output: {
      path: // 输出路径
      filename: bundle.js // 输出文件名
    }
  }
```

#### 扩展工具 WebpackPlugin
https://www.cnblogs.com/yingtoumao/p/7913625.html

###### 常用扩展
html-webpack-plugin
  - 安装npm install rep
  - 使用  
    - const HtmlWebpackPlugin = require('html-webpack-plugin');
    - new HtmlWebpackPlugin({
      title: 'title', // 模板中 使用要用 <%= htmlWebpackPlugin.options.title %>
      template: 'path' // 作为模板
    })
#### webpack-dev-server
  - 安装 npm install --save-dev rep
  - 配置  devServer： {
    contentBase: path.resolve(__dirname, 'dist'),// '路径'
    host: '0.0.0.0', // 默认localhost
    port: 8080, // 监听的端口
    open: true, // 是否打开浏览器
    hot: true, // 支持热插拔，即文件更新，不刷新页面
    // 显示错误和告警信息
    overlay: {
      warnings: true,
      errors: true
    },
    // 如果有专门的后端接口 使用代理
    proxy: {
      "/api": "http://localhost:3000"
    }
  }

  - 使用 package.json 设置 "dev": "webpack-dev-server --config webpack.config.js"
#### 模块配置  module,主要是配置他的rules 用来解析 资源文件css,scss,js,vue,jsx 
  参考地址： https://vue-loader.vuejs.org/zh/guide/
```
moduel: {
  rules:[{
    test: /\.vue$/,
    type: 'javascript/auto',
    loader: 'custom-json-loader'
  }]
}
```


## 注意：主要遇到两个问题：
   - devServer 设置host:'0.0.0.0' 启动打开浏览器 必须设置 useLocalIp: true,
   - vue-style-loader 和css-loader 高版本不起作用，本地都是4以上，需要另装 style.loader


