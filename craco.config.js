const path = require('path');
const resolve = dir => path.resolve(__dirname, dir)
const CracoLessPlugin = require('craco-less');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
      '@': resolve('src'),
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      }
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              // '@primary-color': '#1DA57A' 
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}