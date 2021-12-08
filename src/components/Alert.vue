<template>
  <div class="container_alert">
    <v-alert v-if="type" :color="color" :value="true" border="bottom">
      <v-container>
        <v-row class="text-center">
          <v-col class="hidden-xs-only hidden-sm-only" md="4"></v-col>
          <v-col cols="12" md="4">
            <div class="d-flex justify-center">
              <v-icon class="px-2" color="white">{{ icon }}</v-icon>
              <div class="text-h5 px-2 white--text font-weight-black">
                {{ message }}
              </div>
            </div>
          </v-col>
          <v-col class="hidden-xs-only hidden-sm-only" md="4"></v-col>
        </v-row>
        <div class="container_close_icon">
          <v-btn icon color="white" @click="closeAlert">
            <v-icon color="white">mdi-close-circle-outline</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-alert>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "Alert",
    computed: mapState({
      color() {
        switch (this.type) {
          case "info":
            return "info";
          case "success":
            return "success";
          case "warning":
            return "warning";
          case "error":
            return "error";
          default:
            return "info";
        }
      },
      icon() {
        switch (this.type) {
          case "info":
            return "mdi-information-outline";
          case "success":
            return "mdi-checkbox-marked-circle-outline";
          case "warning":
            return "mdi-alert-circle-outline";
          case "error":
            return "mdi-alert-circle-outline";
          default:
            return "mdi-information-outline";
        }
      },
      type(state) {
        return state.alert.type;
      },
      message(state) {
        return state.alert.message;
      },
    }),
    watch: {
      type: function (newVal) {
        if (newVal) {
          setTimeout(() => {
            this.$store.dispatch("handleAlert", { type: null, message: "" });
          }, 3000);
        }
      },
    },
    methods: {
      closeAlert() {
        this.$store.dispatch("handleAlert", { type: null, message: "" });
      },
    },
  };
</script>

<style scoped lang="scss">
  .container_alert {
    position: fixed;
    width: 100%;
    z-index: 9999;
    top: 0px;
    left: 0px;
    opacity: 0.9;
    .container_close_icon {
      position: absolute;
      right: 1em;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
