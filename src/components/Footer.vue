<template>
  <div>
    <div class="footer_container">
      <div class="center">
        <div
          class="py-4 text-h4 font-weight-bold d-flex justify-center white--text"
        >
          ¿Tienes alguna duda?
        </div>
        <div class="d-flex justify-center mt-4">
          <v-btn depressed outlined color="white"> Contactanos </v-btn>
        </div>
      </div>
    </div>
    <div>
      <v-footer color="white" class="pb-4">
        <v-row justify="space-around" no-gutters>
          <v-col cols="6" sm="4" md="3" lg="2">
            <div>
              <div class="py-4 text-h6 font-weight-bold">Servicios</div>
              <v-list-item class="pa-0">
                <v-list-item-content>
                  <v-list-item-title class="py-1">
                    Exportación/Importacion
                  </v-list-item-title>
                  <v-list-item-title class="py-1">
                    Carga sobredimensionada
                  </v-list-item-title>
                  <v-list-item-title class="py-1">
                    Puerta a puerta
                  </v-list-item-title>
                  <v-list-item-title class="py-1">
                    Servicio express
                  </v-list-item-title>
                  <v-list-item-title class="py-1">
                    Materiales peligrosos
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-col>
          <v-col cols="6" sm="4" md="3" lg="2">
            <div>
              <div class="py-4 text-h6 font-weight-bold">Vacantes</div>
              <v-list-item class="pa-0">
                <v-list-item-content>
                  <v-list-item-title class="py-1">
                    Buscar vacantes
                  </v-list-item-title>
                  <v-list-item-title class="py-1">
                    Editar vacantas
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-col>
          <v-col cols="6" sm="4" md="3" lg="2">
            <div>
              <div class="py-4 text-h6 font-weight-bold">Preguntas</div>
              <v-list-item class="pa-0">
                <v-list-item-content>
                  <v-list-item-title class="py-1">
                    Preguntas frecuentes
                  </v-list-item-title>
                  <v-list-item-title class="py-1">
                    Aviso de privacidad
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-col>
          <v-col cols="6" sm="4" md="3" lg="2">
            <div>
              <div class="py-4 text-h6 font-weight-bold">Nosotros</div>
              <v-list-item class="pa-0">
                <v-list-item-content>
                  <v-list-item-title class="py-1">
                    Nuestra historia
                  </v-list-item-title>
                  <v-list-item-title class="py-1"> Mision </v-list-item-title>
                  <v-list-item-title class="py-1"> Vision </v-list-item-title>
                  <v-list-item-title class="py-1"> Valores </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-col>
          <v-col cols="6" sm="4" md="6" lg="2">
            <div>
              <div class="py-4 text-h6 font-weight-bold">Contacto</div>
              <v-list-item class="pa-0">
                <v-list-item-content>
                  <v-list-item-title class="py-1 font-weight-bold">
                    Chihuahua
                  </v-list-item-title>
                  <v-list-item-title>
                    Av. Nicolas Gogol #11386
                  </v-list-item-title>
                  <v-list-item-title> Complejo Industrial </v-list-item-title>
                  <v-list-item-title> Chihuahua </v-list-item-title>
                  <v-list-item-title> C.P. 31136 </v-list-item-title>
                  <v-list-item-title> Tel: (614) 158-1100 </v-list-item-title>
                  <v-list-item-title> Fax: Ext. 118 </v-list-item-title>
                  <v-list-item-title> ventas@trasoto.com </v-list-item-title>
                  <v-list-item-title class="pb-1 pt-4 font-weight-bold">
                    El Paso
                  </v-list-item-title>
                  <v-list-item-title> 1081 Burgundy Dir </v-list-item-title>
                  <v-list-item-title> El Paso, TX 79907 </v-list-item-title>
                  <v-list-item-title>
                    Tel: (915) 791-00-01/02/03
                  </v-list-item-title>
                  <v-list-item-title> Fax: (915) 791-0003 </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-col>
          <v-col cols="6" sm="4" md="6" lg="2">
            <div>
              <v-list-item class="pa-0">
                <v-list-item-content>
                  <v-list-item-title class="py-1 font-weight-bold">
                    Llamada Sin Costo
                  </v-list-item-title>
                  <v-list-item-title>
                    Dentro de la Republica
                  </v-list-item-title>
                  <v-list-item-title class="text-decoration-underline">
                    (880) 147-40000
                  </v-list-item-title>
                  <v-list-item-title class="pb-1 pt-4">
                    Dentro Estados Unidos
                  </v-list-item-title>
                  <v-list-item-title class="text-decoration-underline">
                    1 (800) 259-8393
                  </v-list-item-title>
                  <v-list-item-title class="pb-1 pt-4">
                    <v-icon class="mx-1">mdi-facebook</v-icon>
                    <v-icon class="mx-1">mdi-linkedin</v-icon>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-col>
        </v-row>
      </v-footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
  };
</script>

<style scoped>
  .footer_container {
    background: url("https://cdn.vuetifyjs.com/images/cards/sunshine.jpg");
    background-size: cover;
    height: 400px;
    position: relative;
  }

  .center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>
