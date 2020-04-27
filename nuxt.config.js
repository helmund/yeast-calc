
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hefe Rechner ⚖️',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'google-site-verification', content: 'D0JVFElFrKUGI8c4CaQUiDF4uPZEvxcXh53jdFyjrE8' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],

  pwa: {
    meta: {
      'theme-color': '#bc986a',
      name: 'Hefe Rechner ⚖️',
      ogSiteName: 'Hefe Rechner ⚖️',
      author: 'Sascha Helmund',
      description: 'Im Rezept steht frische Hefe, du hast nur noch Trockenhefe! Wie war das nochmal? 🤷🏻 Mit dem Hefe Rechner ganz einfach und schnell umrechnen!',
      ogDescription: 'Im Rezept steht frische Hefe, du hast nur noch Trockenhefe! Wie war das nochmal? 🤷🏻 Mit dem Hefe Rechner ganz einfach und schnell umrechnen!',
      lang: 'de'
    },
    manifest: {
      theme_color: '#bc986a',
      background_color: '#FBEEC1',
      name: 'Hefe Rechner ⚖️',
      short_name: 'Hefe Rechner ⚖️',
      lang: 'de',
      icons: [
        {
          src: 'manifest-icon-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable any'
        },
        {
          src: 'manifest-icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable any'
        }
      ]
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
      if (ctx.isClient) {
        config.node = {
          fs: 'empty',
          child_process: 'empty'
        }
      }
    }
  }
}
