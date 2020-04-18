const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/_vue.scss";',
      },
    },
  },
};
