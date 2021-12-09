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
                    v-model="completeName"
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
                    v-model="cellphone_number"
                    :counter="10"
                    :rules="cellphoneRules"
                    outlined
                    dense
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="5" class="py-0">
                  <p class="font-weight-bold ma-0">Numero Telefonico</p>
                  <v-text-field
                    v-model="phone_number"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="1" class="py-0"></v-col>
              </v-row>
              <v-row class="ma-0">
                <v-col cols="12" sm="1" class="py-0"> </v-col>
                <v-col cols="12" sm="5" class="py-0">
                  <p class="font-weight-bold ma-0">Pais</p>
                  <v-select
                    v-model="country"
                    :items="contries"
                    outlined
                    dense
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="5" class="py-0">
                  <p class="font-weight-bold ma-0">Estado</p>
                  <v-select
                    v-model="state"
                    :items="states"
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
                  <v-text-field v-model="city" outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="5" class="py-0">
                  <p class="font-weight-bold ma-0">Codigo Postal</p>
                  <v-text-field
                    v-model="zip_code"
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
                  <v-textarea v-model="comment" outlined dense></v-textarea>
                </v-col>

                <v-col cols="12" sm="1" class="py-0"></v-col>
              </v-row>

              <div class="d-flex justify-center">
                <v-btn
                  :disabled="!valid"
                  color="primaryGreen"
                  class="mr-4 white--text"
                  @click="createComment"
                  :loading="loading"
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
                  src="../assets/location_1.jpg"
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
                  src="../assets/location_2.jpg"
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
                  src="../assets/location_3.jpg"
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
  import { CREATE_COMMENT } from "@/graphql/mutations";
  import { useMutation } from "@/graphql/index";
  export default {
    name: "Contacto",
    components: {
      Footer,
    },
    data: () => ({
      valid: true,
      loading: false,
      cellphone_number: "",
      cellphoneRules: [
        (v) => !!v || "Numero de celular requerido",
        (v) => /^\d+$/.test(v) || "Solo digitos",
        (v) => (v && v.length == 10) || "10 digitos",
      ],
      city: "",
      comment: "",
      country: "",
      phone_number: "",
      state: "",
      zip_code: "",
      completeName: "",
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
      contries: ["Mexico", "Estados Unidos"],
      cities: ["Chihuahua", "Juarez", "El Paso"],
      checkbox: false,
    }),
    computed: {
      states() {
        if (this.country === "Mexico") {
          return ["Chihuahua", "Sonora", "Baja California", "Nuevo Leon"];
        } else if (this.country === "Estados Unidos") {
          return ["Texas", "Nuevo Mexico", "Arizona", "California"];
        } else {
          return [];
        }
      },
    },
    methods: {
      validate() {
        this.$refs.form.validate();
      },
      resetForm() {
        this.$refs.form.reset();
      },
      handleAlert({ type, message }) {
        this.$store.dispatch("handleAlert", { type: type, message: message });
      },
      async createComment() {
        if (this.$refs.form.validate()) {
          this.loading = true;
          const { data, errors } = await useMutation(CREATE_COMMENT, {
            cellphone_number: this.cellphone_number,
            city: this.city,
            comment: this.comment,
            country: this.country,
            email: this.email,
            name: this.completeName,
            phone_number: this.phone_number,
            state: this.state,
            zip_code: this.zip_code,
          });
          if (data) {
            this.resetForm();
            this.handleAlert({
              type: "success",
              message: "Se envio correctamente tu información",
            });
          } else if (errors) {
            this.handleAlert({
              type: "error",
              message: "Error al enviar la información",
            });
            console.log(errors);
          }
          this.loading = false;
        }
      },
    },
  };
</script>
