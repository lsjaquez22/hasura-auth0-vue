<template>
  <div>
    <div class="mt-14 pb-16">
      <div class="text-h4 font-weight-bold d-flex justify-center">Contacto</div>
      <div class="mt-10">
        <v-row no-gutters>
          <v-col cols="1" sm="1" md="2" lg="3" xl="3"> </v-col>
          <v-col cols="10" sm="10" md="8" lg="6" xl="6">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row class="ma-0">
                <v-col cols="12" sm="1" class="py-0"> </v-col>
                <v-col cols="12" sm="5" class="py-0">
                  <p class="font-weight-bold ma-0">Nombre Completo*</p>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    outlined
                    dense
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="5" class="py-0">
                  <p class="font-weight-bold ma-0">Correo Electronico*</p>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    outlined
                    dense
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="1" class="py-0"></v-col>
              </v-row>
              <v-row class="ma-0">
                <v-col cols="12" sm="1" class="py-0"> </v-col>
                <v-col cols="12" sm="5" class="py-0">
                  <p class="font-weight-bold ma-0">Numero de celular*</p>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    outlined
                    dense
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="5" class="py-0">
                  <p class="font-weight-bold ma-0">Numero Telefonico</p>
                  <v-text-field v-model="email" outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="1" class="py-0"></v-col>
              </v-row>
              <v-row class="ma-0">
                <v-col cols="12" sm="1" class="py-0"> </v-col>
                <v-col cols="12" sm="5" class="py-0">
                  <p class="font-weight-bold ma-0">Pais</p>
                  <v-select
                    v-model="select"
                    :items="items"
                    outlined
                    dense
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="5" class="py-0">
                  <p class="font-weight-bold ma-0">Estado</p>
                  <v-select
                    v-model="select"
                    :items="items"
                    outlined
                    dense
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="1" class="py-0"></v-col>
              </v-row>
              <v-row class="ma-0">
                <v-col cols="12" sm="1" class="py-0"> </v-col>
                <v-col cols="12" sm="5" class="py-0">
                  <p class="font-weight-bold ma-0">Ciudad</p>
                  <v-select
                    v-model="select"
                    :items="items"
                    outlined
                    dense
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="5" class="py-0">
                  <p class="font-weight-bold ma-0">Codigo Postal</p>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="1" class="py-0"></v-col>
              </v-row>
              <v-row class="ma-0">
                <v-col cols="12" sm="1" class="py-0"> </v-col>
                <v-col cols="12" sm="10" class="py-0">
                  <p class="font-weight-bold ma-0">Mensaje</p>
                  <v-textarea v-model="select" outlined dense></v-textarea>
                </v-col>

                <v-col cols="12" sm="1" class="py-0"></v-col>
              </v-row>

              <div class="d-flex justify-center">
                <v-btn
                  :disabled="!valid"
                  color="primaryGreen"
                  class="mr-4 white--text"
                  @click="validate"
                >
                  Enviar
                </v-btn>
              </div>
            </v-form>
          </v-col>
          <v-col cols="1" sm="1" md="2" lg="3" xl="3"> </v-col>
        </v-row>
      </div>
    </div>
    <div class="pt-16">
      <div class="grey py-14">
        <div class="text-h4 font-weight-bold d-flex justify-center">
          Instalaciones
        </div>
        <v-row no-gutters>
          <v-col cols="12" sm="1" md="1" lg="2" xl="3"> </v-col>
          <v-col cols="12" sm="10" md="10" lg="8" xl="6">
            <div class="px-6 d-flex justify-center flex-wrap">
              <v-card
                class="mx-auto my-6"
                max-width="230"
                elevation="0"
                outlined
                color="transparent"
              >
                <v-img
                  class="rounded-lg elevation-12"
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="150px"
                ></v-img>

                <v-card-title class="d-flex justify-center">
                  Chihuahua, Chih.
                </v-card-title>
                <v-card-text>
                  <div class="d-flex justify-center text-subtitle-2">
                    Ave. Nicolas Gogol 11386
                  </div>
                  <div class="d-flex justify-center text-subtitle-2">
                    Complejo Industrial Chihuahua
                  </div>
                  <div class="d-flex justify-center text-subtitle-2">
                    Chihuahua, Chih. 31116
                  </div>
                  <div class="d-flex justify-center text-subtitle-2">
                    Tel: (614) 158-1100
                  </div>
                </v-card-text>
              </v-card>
              <v-card
                class="mx-auto my-6"
                max-width="230"
                elevation="0"
                outlined
                color="transparent"
              >
                <v-img
                  class="rounded-lg elevation-12"
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="150px"
                ></v-img>

                <v-card-title class="d-flex justify-center">
                  Cd. Juarez, Chih
                </v-card-title>
                <v-card-text>
                  <div class="d-flex justify-center text-subtitle-2">
                    Manuel j. Clouthier 10052-A
                  </div>
                  <div class="d-flex justify-center text-subtitle-2">
                    Vistas de Zaragoza
                  </div>
                  <div class="d-flex justify-center text-subtitle-2">
                    Cd. Juarez, Chih. 32600
                  </div>
                  <div class="d-flex justify-center text-subtitle-2">
                    Tel: (656) 658-9755
                  </div>
                </v-card-text>
              </v-card>
              <v-card
                class="mx-auto my-6"
                max-width="230"
                elevation="0"
                outlined
                color="transparent"
              >
                <v-img
                  class="rounded-lg elevation-12"
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="150px"
                ></v-img>

                <v-card-title class="d-flex justify-center">
                  El Paso, Tx.
                </v-card-title>
                <v-card-text>
                  <div class="d-flex justify-center text-subtitle-2">
                    1081 Burgundy Dr
                  </div>
                  <div class="d-flex justify-center text-subtitle-2">
                    El Paso, Tx 79907
                  </div>
                  <div class="d-flex justify-center text-subtitle-2">
                    Tel: (915) 791-00 01/02/03
                  </div>
                </v-card-text>
              </v-card>
            </div></v-col
          >
          <v-col cols="12" sm="1" md="1" lg="2" xl="3"> </v-col>
        </v-row>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  export default {
    name: "Contacto",
    components: {
      Footer,
    },
    data: () => ({
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Nombre requerido",
        (v) => (v && v.length >= 3) || "Minimo 3 caracteres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "Correo requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo debe ser valido",
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,
    }),
    methods: {
      validate() {
        this.$refs.form.validate();
      },
    },
  };
</script>
