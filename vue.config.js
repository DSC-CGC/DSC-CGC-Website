module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  productionSourceMap: false,
  pwa: {
    name: 'DSC CGC',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    msTileColor: '#4A90E2',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: "#ffffff"
    },
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}