<template>
  <div>
    <v-app-bar color="white nav_bar">
      <div class="d-flex align-center"></div>
      <router-link :to="{ path: '/' }">
        <v-img
          alt="Trasoto Logo"
          class="shrink mt-1"
          contain
          eager
          min-width="100"
          src="../assets/logo-transportes-soto.png"
          width="100"
          height="200"
        />
      </router-link>

      <v-spacer></v-spacer>

      <v-btn text router :to="{ path: '/' }">
        <span class="mr-2">Inicio</span>
      </v-btn>
      <v-btn text router :to="{ path: '/vacantes' }">
        <span class="mr-2">Vacantes</span>
      </v-btn>
      <v-btn text router :to="{ path: '/contacto' }">
        <span class="mr-2">Contacto</span>
      </v-btn>
      <v-btn text>
        <span class="mr-2">Cerrar Sesión</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: "NavBar",

    data: () => ({
      //
    }),
  };
</script>

<style scoped>
  .nav_bar {
    z-index: 1;
  }
</style>
