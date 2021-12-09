import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alert: {
      type: null,
      message: "",
    },
  },
  mutations: {
    handleAlert(state, { type, message }) {
      state.alert.type = type;
      state.alert.message = message;
    },
  },
  actions: {
    handleAlert(context, payload) {
      context.commit("handleAlert", payload);
    },
  },
  modules: {},
});
