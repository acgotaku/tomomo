const path = require('path');
const resolver = require('postcss-import-resolver');

module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {
      resolve: resolver({
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
      })
    },
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-nested': {}
  }
};
