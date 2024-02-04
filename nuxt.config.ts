// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: '开源协会',
      meta: [
        { name: 'renderer', content: 'webkit' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
        { name: 'format-detection', content: 'telephone=no,email=no' },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'x5-orientation', content: 'portrait' },
        { name: 'x5-fullscreen', content: 'true' },
        { name: 'x5-page-mode', content: 'app' },
        { name: 'full-screen', content: 'yes' },
        { name: 'browsermode', content: 'application' },
        { name: 'nightmode', content: 'disable' },
        { name: 'msapplication-tap-highlight', content: 'no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    }
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
  ],
  extends: ['@nuxt/ui-pro'],
})
