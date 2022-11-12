const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭ESLint的规则
  lintOnSave: false,
  // 代理
  devServer: {
    port: 8081,
    proxy: {
      '/api': { // 匹配以'/api'开头的请求路径
        target: 'http://gmall-h5-api.atguigu.cn',
      }
    }
  }
})
