const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

const MAX_ENTRY_POINT_SIZE = 1024 * 1024
const MAX_ASSET_SIZE = 1024 * 1024
const MIN_SIZE = 30000

module.exports = {
  stories: ['../src/**/*.stories.(mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    }
  ],
  managerWebpack: async config => {
    config.optimization.splitChunks = { chunks: 'all', maxSize: MAX_ASSET_SIZE }
    const isprod = config.mode === 'production'
    let tser = isprod
      ? [
          new TerserPlugin({
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: true,
                comparisons: true,
                inline: 2,
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: true,
                ascii_only: true,
              },
            },
          }),
        ]
      : []
    config.performance = {
      hints: false,
      maxEntrypointSize: MAX_ENTRY_POINT_SIZE,
      maxAssetSize: MAX_ASSET_SIZE,
    }
    config.optimization = {
      minimizer: tser,
      minimize: isprod ? true : true,
      splitChunks: {
        chunks: 'all',
        maxSize: MAX_ASSET_SIZE,
        minSize: MIN_SIZE,
      },
      runtimeChunk: true,
    }
    return config
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
        },
        // 过滤 node_modules 中的 props
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            // 将枚举或者联合类型转换成字符串形式，避免字符串字面量显示别名。
            shouldExtractLiteralValuesFromEnum: true,
            // 避免显示原生内置属性
            propFilter: prop => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }

              return true
            },
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.(gif|jpe?g|png|svg)$/,
      use: {
        loader: 'url-loader',
        options: { name: '[name].[ext]' },
      },
    })

    const isprod = config.mode === 'production'
    isprod ? (config.devtool = 'none') : (config.devtool = 'none')

    let tser = isprod ? config.optimization.minimizer : config.optimization.minimize

    config.performance = {
      hints: false,
      maxEntrypointSize: MAX_ENTRY_POINT_SIZE,
      maxAssetSize: MAX_ASSET_SIZE,
    }
    config.optimization = {
      minimizer: tser,
      minimize: isprod ? true : true,
      splitChunks: {
        chunks: 'all',
        maxSize: MAX_ASSET_SIZE,
        minSize: MIN_SIZE,
      },
      runtimeChunk: true,
    }

    config.resolve.extensions.push('.ts', '.tsx')
    config.resolve.alias = { '@util': path.resolve(__dirname, '../src/components/_util') }
    return config
  },
}
