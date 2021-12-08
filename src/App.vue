<template>
  <v-app>
    <v-app-bar color="white">
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 hidden-md-and-up"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->
        <v-btn
          depressed
          plain
          :ripple="false"
          :to="{ name: 'MainPage' }"
          class="d-flex py-10 justify-center active-class font-weight-black text-overline rounded-0"
        >
          <v-img
            alt="Trasoto Logo"
            class="shrink mt-1"
            contain
            eager
            min-width="100"
            src="../src/assets/logo-transportes-soto.png"
            width="100"
          />
        </v-btn>
      </div>

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

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "App",

    data: () => ({
      //
    }),
  };
</script>
