const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  devtool: "source-map", //可找到源代码报错具体位置
  resolve:{
    //更改解析模块查找方式
    modules:[path.resolve(__dirname,'source'),'node_modules']
  },
  plugins:[
    new htmlWebpackPlugin({
      template: path.resolve(__dirname,"public/index.html")
    })
  ]
}