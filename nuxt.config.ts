import * as pkg from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-04',
  css: ['@/assets/main.scss'],
  features: { inlineStyles: false },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', 'vuetify-nuxt-module'],
  nitro: {
    compressPublicAssets: true,
  },
  ssr: true,
  eslint: {
    config: {
      standalone: false,
    },
  },
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
        language: 'de-DE',
        name: 'Deutsch',
      },
      {
        code: 'en',
        file: 'en-US.json',
        language: 'en-US',
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
