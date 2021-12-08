<template>
  <v-app>
    <NavBar />
    <Alert />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from "./components/NavBar.vue";
  import Alert from "./components/Alert.vue";
  export default {
    name: "App",
    data: () => ({
      //
    }),
    components: { NavBar, Alert },
  };
</script>

<style scoped>
  .nav_bar {
    z-index: 1;
  }
</style>
