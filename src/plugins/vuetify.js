import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import fr from 'vuetify/lib/locale/fr';
import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
     dark: true,
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#007BFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {
        primary: colors.blue.darken4,
        background: colors.indigo.base,
        info: colors.teal.lighten1,
      },
    },
  },
    lang: {
      locales: { fr },
      current: 'fr',
    },
});