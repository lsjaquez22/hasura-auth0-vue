<template>
  <div>
    <div>
      <v-carousel
        cycle
        height="600"
        hide-delimiter-background
        show-arrows-on-hover
        :interval="10000"
        delimiter-icon="mdi-minus"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" />
      </v-carousel>
    </div>
    <div class="my-12">
      <div class="pt-8 text-h4 font-weight-bold d-flex justify-center">
        Tipos de Remolques
      </div>
      <div class="pt-8 px-6 d-flex justify-center flex-wrap">
        <v-card
          class="mx-auto my-6"
          max-width="275"
          elevation="0"
          v-for="trailer in trailers"
          :key="trailer.type"
        >
          <v-img
            class="rounded-lg elevation-12"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="215px"
          ></v-img>

          <v-card-title class="d-flex justify-center">
            {{ trailer.type }}
          </v-card-title>
        </v-card>
      </div>
    </div>
    <div>
      <div
        class="py-4 text-h4 font-weight-bold d-flex justify-center primaryGreen white--text"
      >
        Vacantes
      </div>
      <div class="grey py-14">
        <div class="text-h4 font-weight-bold d-flex justify-center">
          Únete a nuestro equipo de trabajo
        </div>
        <v-row no-gutters>
          <v-col cols="12" sm="1" md="1" lg="1" xl="2"> </v-col>
          <v-col cols="12" sm="10" md="10" lg="10" xl="8">
            <div class="px-6 d-flex justify-center flex-wrap">
              <v-card
                v-for="job in jobs"
                :key="job.type"
                class="mx-auto my-12 pa-8 rounded-lg"
                max-width="300"
                elevation="6"
              >
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  class="rounded-lg"
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="150px"
                ></v-img>

                <v-card-title class="pa-0 pt-4">{{ job.type }}</v-card-title>

                <v-card-text class="pa-0">
                  <div class="text-subtitle-1">
                    {{ job.number }} vacantes disponibles
                  </div>
                </v-card-text>
              </v-card>
            </div></v-col
          >
          <v-col cols="12" sm="1" md="1" lg="1" xl="2"> </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-btn depressed outlined color="secondaryGreen">
            Ver todas las vacantes
          </v-btn>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  export default {
    name: "Home",
    components: {
      Footer,
    },
    data() {
      return {
        items: [
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          },
        ],
        trailers: [
          { type: "Caja Seca", image: "" },
          { type: "Plataforma", image: "" },
          { type: "Low Boy", image: "" },
          { type: "Caja Refrigerada", image: "" },
        ],
        jobs: [
          { type: "Ventas", image: "", number: 30 },
          { type: "Operadores", image: "", number: 30 },
          { type: "Mantenimiento", image: "", number: 30 },
        ],
      };
    },
  };
</script>
