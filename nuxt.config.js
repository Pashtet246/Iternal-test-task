module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'iternal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'test task' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    "@/assets/styles/main.scss",
  ],
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
        '@/assets/styles/main.scss'
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  buildModules: ['@nuxt/typescript-build'],
  /*
  ** Build configuration
    */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    loaders: {
      sass: {
        prependData: "@import '@/assets/styles/main.scss;",
      }
    },
    babel: {
      plugins: [
        [('@babel/plugin-proposal-decorators'), { legacy: true }], 
        ['@babel/plugin-proposal-class-properties'],
      ],
      presets({ isServer }) {
        return [
          [
            "@nuxt/babel-preset-app", { loose: true }
          ]
        ]
      }
    },
  },
}

