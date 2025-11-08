const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/mixins.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    // Отключаем плагин проверки типов
    config.plugins.delete('fork-ts-checker');
  },
  lintOnSave: false,
});
