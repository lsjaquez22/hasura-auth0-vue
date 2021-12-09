<template>
  <div>
    <div class="vacantes_image"></div>
    <div>
      <div
        class="py-4 text-h4 font-weight-bold d-flex justify-center primaryGreen white--text"
      >
        Vacantes
      </div>
      <ListVacantes v-if="!details" @handleDetail="handleDetail" />
      <DetailVacante v-else @handleDetail="handleDetail" />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import ListVacantes from "../components/ListVacantes.vue";
  import DetailVacante from "../components/DetailVacante.vue";
  export default {
    name: "Vacantes",
    components: {
      Footer,
      ListVacantes,
      DetailVacante,
    },
    data() {
      return {
        details: true,
        vacante: {},
      };
    },
    methods: {
      handleDetail() {
        this.details = !this.details;
      },
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
