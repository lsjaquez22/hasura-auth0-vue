import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    alert: {
      type: null,
      message: "",
    },
  },
  mutations: {
    getMovies(state, payload) {
      state.movies = [...payload];
    },
    handleAlert(state, { type, message }) {
      state.alert.type = type;
      state.alert.message = message;
    },
  },
  actions: {
    getMovies(context, payload) {
      context.commit("getMovies", payload);
    },
    handleAlert(context, payload) {
      context.commit("handleAlert", payload);
    },
  },
  modules: {},
});
