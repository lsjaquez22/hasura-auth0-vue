import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

export const apolloClient = new ApolloClient({
  uri: "https://amusing-redfish-15.hasura.app/v1/graphql",
  request: (operation) => {
    operation.setContext({
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "8xmtzZaSObIGJOSLhcCkJdu8BCNjzl7Du7723bmqR8bPuexMZB4CaDONOSjGGvrn",
      },
    });
  },
  onError: ({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
      console.warn("graphQLErrors", graphQLErrors);
    }
    if (networkError) {
      console.warn("networkError", networkError);
    }
  },
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
