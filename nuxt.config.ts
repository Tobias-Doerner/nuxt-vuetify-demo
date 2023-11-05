import * as pkg from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/main.scss'],
  features: { inlineStyles: false },
  modules: ['@nuxtjs/i18n', 'vuetify-nuxt-module', '@nuxtjs/eslint-module'],
  nitro: {
    compressPublicAssets: true,
  },
  ssr: true,
  i18n: {
    defaultLocale: 'en',
    detectBrowserLanguage: {
      cookieKey: 'i18n_lang',
      redirectOn: 'root',
      useCookie: true,
    },
    langDir: 'i18n',
    lazy: true,
    locales: [
      {
        code: 'de',
        file: 'de-DE.json',
        iso: 'de-DE',
        name: 'Deutsch',
      },
      {
        code: 'en',
        file: 'en-US.json',
        iso: 'en-US',
        name: 'English',
      },
    ],
    strategy: 'no_prefix',
    types: 'composition',
    vueI18n: './config/i18n.config.ts',
  },
  vuetify: {
    moduleOptions: { styles: { configFile: 'assets/settings.scss' } },
    vuetifyOptions: './config/vuetify.config.ts',
  },
  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },
})
