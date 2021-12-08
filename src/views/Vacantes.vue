<template>
  <div>
    <div class="vacantes_image"></div>
    <div>
      <div
        class="py-4 text-h4 font-weight-bold d-flex justify-center primaryGreen white--text"
      >
        Vacantes
      </div>
      <div class="grey py-14">
        <v-row no-gutters>
          <v-col cols="12" sm="12" md="1" lg="1" xl="1"> </v-col>
          <v-col cols="12" sm="3" md="3" lg="3" xl="3">
            <div
              class="text-h4 font-weight-bold d-flex justify-center justify-md-start"
            >
              Filtros
            </div>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 py-1 font-weight-bold">
                  Departamentos
                </v-list-item-title>
                <v-list-item class="pa-1">
                  <template v-slot:default="{ active }">
                    <v-list-item-action class="mx-2 my-0">
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content class="pa-0">
                      <v-list-item-title>Ventas</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-list-item class="pa-1">
                  <template v-slot:default="{ active }">
                    <v-list-item-action class="mx-2 my-0">
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content class="pa-0">
                      <v-list-item-title>Trafico</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-list-item class="pa-1">
                  <template v-slot:default="{ active }">
                    <v-list-item-action class="mx-2 my-0">
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content class="pa-0">
                      <v-list-item-title>Ventas</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-list-item class="pa-1">
                  <template v-slot:default="{ active }">
                    <v-list-item-action class="mx-2 my-0">
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content class="pa-0">
                      <v-list-item-title>Trafico</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-list-item class="pa-1">
                  <template v-slot:default="{ active }">
                    <v-list-item-action class="mx-2 my-0">
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content class="pa-0">
                      <v-list-item-title>Ventas</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-list-item class="pa-1">
                  <template v-slot:default="{ active }">
                    <v-list-item-action class="mx-2 my-0">
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content class="pa-0">
                      <v-list-item-title>Trafico</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 py-1 font-weight-bold">
                  Ubicacion
                </v-list-item-title>
                <v-list-item class="pa-1">
                  <template v-slot:default="{ active }">
                    <v-list-item-action class="mx-2 my-0">
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content class="pa-0">
                      <v-list-item-title>Chihuahua</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-list-item class="pa-1">
                  <template v-slot:default="{ active }">
                    <v-list-item-action class="mx-2 my-0">
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content class="pa-0">
                      <v-list-item-title>Ciudad Juarez</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-list-item class="pa-1">
                  <template v-slot:default="{ active }">
                    <v-list-item-action class="mx-2 my-0">
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content class="pa-0">
                      <v-list-item-title>El paso</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
            <div class="mt-4">
              <v-btn small depressed outlined color="secondaryGreen">
                Limpiar Filtros
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" sm="9" md="7" lg="7" xl="7">
            <div
              class="text-h4 font-weight-bold d-flex justify-center justify-md-start"
            >
              Todas las vacantes
            </div>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title
                  class="text-h6 py-1 text-decoration-underline secondaryGreen--text"
                >
                  Ejecutivo de Ventas
                </v-list-item-title>
                <v-list-item-title class="d-flex flex-column flex-md-row">
                  <div class="mr-8">El Paso, Tx.</div>
                  <div class="mr-8">Fecha de publicación: 30/03/2020</div>
                  <div class="mr-8">Vigencia: 30/03/2020</div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title
                  class="text-h6 py-1 text-decoration-underline secondaryGreen--text"
                >
                  Ejecutivo de Ventas
                </v-list-item-title>
                <v-list-item-title class="d-flex flex-column flex-md-row">
                  <div class="mr-8">Chihuahua, Chih.</div>
                  <div class="mr-8">Fecha de publicación: 30/03/2020</div>
                  <div class="mr-8">Vigencia: 30/03/2020</div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title
                  class="text-h6 py-1 text-decoration-underline secondaryGreen--text"
                >
                  Ejecutivo de Ventas
                </v-list-item-title>
                <v-list-item-title class="d-flex flex-column flex-md-row">
                  <div class="mr-8">Chihuahua, Chih.</div>
                  <div class="mr-8">Fecha de publicación: 30/03/2020</div>
                  <div class="mr-8">Vigencia: 30/03/2020</div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title
                  class="text-h6 py-1 text-decoration-underline secondaryGreen--text"
                >
                  Ejecutivo de Ventas
                </v-list-item-title>
                <v-list-item-title class="d-flex flex-column flex-md-row">
                  <div class="mr-8">Ciudad Juarez, Chih.</div>
                  <div class="mr-8">Fecha de publicación: 30/03/2020</div>
                  <div class="mr-8">Vigencia: 30/03/2020</div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="12" md="1" lg="1" xl="1"> </v-col>
        </v-row>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  export default {
    name: "Vacantes",
    components: {
      Footer,
    },
  };
</script>

<style scoped>
  .vacantes_image {
    background: url("https://cdn.vuetifyjs.com/images/cards/sunshine.jpg");
    background-size: cover;
    height: 500px;
    margin-bottom: 3em;
  }
  .v-list-item {
    min-height: 0px;
  }
</style>
