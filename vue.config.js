module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dev.certificates/' : '/',
    "devServer": {
      "port": 8080,
      "proxy": {
        "/api": {
          "target": "http://localhost:3000",
          "changeOrigin": true
        }
      }
    },
    "configureWebpack": {
      "devtool": 'source-map'
    }
  }