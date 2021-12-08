import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primaryGreen: "#114541",
        secondaryGreen: "#24785f",
        grey: "f7f7f9",
      },
    },
  },
});
