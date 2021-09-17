import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#420516",
        primary2: "#7D1935",
        secondary: "#B42B51",
        accent: "#E63E6D",
        anchor: "#FFFFFF",
      },
    },
  },
});
