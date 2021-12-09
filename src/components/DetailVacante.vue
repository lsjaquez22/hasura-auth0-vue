<template>
  <div>
    <div>
      <div class="py-14">
        <v-row no-gutters>
          <v-col cols="12" sm="12" md="1" lg="1" xl="1"> </v-col>
          <v-col cols="12" sm="3" md="3" lg="3" xl="3">
            <div class="mb-4 d-flex justify-center justify-md-start">
              <v-btn
                small
                depressed
                outlined
                color="secondaryGreen"
                @click="handleDetail"
              >
                Volver
              </v-btn>
            </div>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 py-1 font-weight-bold">
                  Departamento
                </v-list-item-title>
                <v-list-item class="pa-1">
                  <v-list-item-content class="pa-0">
                    <v-list-item-title>
                      {{ vacante.department }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 py-1 font-weight-bold">
                  Ubicacion
                </v-list-item-title>
                <v-list-item class="pa-1">
                  <v-list-item-content class="pa-0">
                    <v-list-item-title>
                      {{ vacante.location }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 py-1 font-weight-bold">
                  Publicacion
                </v-list-item-title>
                <v-list-item class="pa-1">
                  <v-list-item-content class="pa-0">
                    <v-list-item-title>
                      {{ vacante.created_at.substring(0, 10) }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 py-1 font-weight-bold">
                  Vigencia
                </v-list-item-title>
                <v-list-item class="pa-1">
                  <v-list-item-content class="pa-0">
                    <v-list-item-title>
                      {{ vacante.expired_at.substring(0, 10) }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="9" md="7" lg="7" xl="7">
            <div
              class="text-h4 font-weight-bold d-flex justify-center justify-md-start"
            >
              {{ vacante.name }}
            </div>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 py-1">
                  Descripcion del empleo
                </v-list-item-title>
                <v-list-item-content>
                  <div>
                    {{ vacante.description }}
                  </div>
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 py-1">
                  Requisitos
                </v-list-item-title>
                <v-list-item-content>
                  <ul>
                    <li v-for="item in vacante.requirements" :key="item.id">
                      {{ item.description }}
                    </li>
                  </ul>
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 py-1">
                  Experiencia
                </v-list-item-title>
                <v-list-item-content>
                  <ul>
                    <li v-for="item in vacante.experiences" :key="item.id">
                      {{ item.description }}
                    </li>
                  </ul>
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 py-1">
                  Conocimiento
                </v-list-item-title>
                <v-list-item-content>
                  <ul>
                    <li v-for="item in vacante.abilities" :key="item.id">
                      {{ item.description }}
                    </li>
                  </ul>
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pa-6 pa-md-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 py-1">
                  Idioma
                </v-list-item-title>
                <v-list-item-content>
                  <ul>
                    <li>
                      {{ vacante.language }}
                    </li>
                  </ul>
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="12" md="1" lg="1" xl="1"> </v-col>
        </v-row>
      </div>
      <div class="grey py-14">
        <div class="text-h4 font-weight-bold d-flex justify-center">
          Solicitud
        </div>
        <div class="mt-10">
          <v-row no-gutters>
            <v-col cols="1" sm="1" md="2" lg="3" xl="3"> </v-col>
            <v-col cols="10" sm="10" md="8" lg="6" xl="6">
              <v-form ref="form" lazy-validation>
                <v-row class="ma-0">
                  <v-col cols="12" sm="1" class="py-0"> </v-col>
                  <v-col cols="12" sm="5" class="py-0">
                    <p class="font-weight-bold ma-0">Nombre Completo*</p>
                    <v-text-field outlined dense required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="5" class="py-0">
                    <p class="font-weight-bold ma-0">Correo Electronico*</p>
                    <v-text-field outlined dense required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="1" class="py-0"></v-col>
                </v-row>
                <v-row class="ma-0">
                  <v-col cols="12" sm="1" class="py-0"> </v-col>
                  <v-col cols="12" sm="5" class="py-0">
                    <p class="font-weight-bold ma-0">Numero de celular*</p>
                    <v-text-field outlined dense required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="5" class="py-0">
                    <p class="font-weight-bold ma-0">Numero Telefonico</p>
                    <v-text-field outlined dense></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="1" class="py-0"></v-col>
                </v-row>
                <v-row class="ma-0">
                  <v-col cols="12" sm="1" class="py-0"> </v-col>
                  <v-col cols="12" sm="10" class="py-0">
                    <p class="font-weight-bold ma-0">Mensaje</p>
                    <v-textarea outlined dense></v-textarea>
                  </v-col>

                  <v-col cols="12" sm="1" class="py-0"></v-col>
                </v-row>
                <v-row class="ma-0">
                  <v-col cols="12" sm="1" class="py-0"> </v-col>
                  <v-col cols="12" sm="10" class="py-0">
                    <p class="font-weight-bold ma-0">Curriculum Vitae</p>
                    <v-file-input
                      accept="**/**"
                      label="Documento"
                    ></v-file-input>
                  </v-col>

                  <v-col cols="12" sm="1" class="py-0"></v-col>
                </v-row>

                <div class="d-flex justify-center">
                  <v-btn color="primaryGreen" class="mr-4 white--text">
                    Aplicar
                  </v-btn>
                </div>
              </v-form>
            </v-col>
            <v-col cols="1" sm="1" md="2" lg="3" xl="3"> </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailVacantes",
    props: {
      vacante: {
        type: Object,
        require: true,
      },
    },
    methods: {
      handleDetail() {
        this.$emit("handleDetail", {});
      },
    },
  };
</script>

<style scoped>
  .v-list-item {
    min-height: 0px;
  }
</style>
