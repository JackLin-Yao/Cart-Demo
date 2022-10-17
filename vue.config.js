module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      //发送 /mock 地址请求时代理到目标地址http://xxx.com
      '/mock': {
        target: 'http://localhost:8080'
      }
    }
  }
}
