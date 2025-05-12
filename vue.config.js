module.exports = {
  lintOnSave: false,
  // Configuração opcional para melhorar a performance do build
  productionSourceMap: false,
  // Se você tiver problemas com CORS durante desenvolvimento
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
  
}