import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
  },
  mutations: {
    getMovies(state, payload) {
      state.movies = [...payload];
    },
  },
  actions: {
    getMovies(context, payload) {
      context.commit("getMovies", payload);
    },
  },
  modules: {},
});
