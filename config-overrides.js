const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = function (config) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@assets': resolve('src/assets'),
    '@components': resolve('src/components'),
    '@constants': resolve('src/constants'),
    '@context': resolve('src/context'),
    '@store': resolve('src/store'),
    '@utils': resolve('src/utils'),
  })
  return config
}
