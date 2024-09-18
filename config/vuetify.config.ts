import { md2 } from 'vuetify/blueprints'
import colors from 'vuetify/lib/util/colors.mjs'
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  blueprint: md2,
  defaults: {
    global: {
      ripple: false,
    },
  },
  icons: {
    defaultSet: 'mdi-svg',
  },
  locale: {
    locale: 'en',
    fallback: 'de',
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          'background': colors.grey.darken3,
          'surface': colors.grey.darken4,
          'primary': colors.lightBlue.darken1,
          'primary-darken-1': colors.lightBlue.darken2,
          'secondary': colors.blueGrey.darken1,
          'secondary-darken-1': colors.blueGrey.darken2,
          'error': colors.deepOrange.lighten1,
          'info': colors.teal.lighten1,
          'success': colors.green.darken3,
          'warning': colors.amber.darken4,
          'navigation': colors.grey.darken4,
          'navigation-lighten-1': colors.grey.darken3,
        },
      },
    },
  },
})
