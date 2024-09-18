const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        options.rules = {
          ...options.rules,
          'vue/multi-word-component-names': 'off',
        };
        return options;
      });
  },
});
