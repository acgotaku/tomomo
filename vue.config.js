'use strict';
const path = require('path');
const ICON_PATH = path.resolve(__dirname, 'src/assets/icons');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 3300
  },
  pwa: {
    name: 'Tomomo',
    themeColor: '#FF5454',
    msTileColor: '#000000',
    manifestOptions: {
      short_name: 'Tomomo',
      start_url: '/'
    },
    workboxOptions: {
      clientsClaim: true,
      skipWaiting: true
    }
  },
  chainWebpack: config => {
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // only package third parties that are initially dependent
        },
        commons: {
          name: 'chunk-commons',
          minChunks: 3, //  minimum common number
          priority: 5,
          reuseExistingChunk: true
        }
      }
    });

    config.module.rule('svg').exclude.add(ICON_PATH).end();

    // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
    config.optimization.runtimeChunk('single');
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.devtool = 'hidden-source-map';
    }
    return {
      module: {
        rules: [
          {
            test: /\.svg$/i,
            include: [ICON_PATH],
            use: [
              {
                loader: 'svg-sprite-loader',
                options: {
                  symbolId: 'icon-[name]'
                }
              }
            ]
          }
        ]
      },
      plugins: []
    };
  }
};
