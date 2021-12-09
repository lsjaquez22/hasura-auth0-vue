<template>
  <div>
    <div class="vacantes_image"></div>
    <div>
      <div
        class="py-4 text-h4 font-weight-bold d-flex justify-center primaryGreen white--text"
      >
        Vacantes
      </div>
      <ListVacantes
        v-if="!details"
        @handleDetail="handleDetail"
        :list="listVacantes"
      />
      <DetailVacante v-else @handleDetail="handleDetail" :vacante="vacante" />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import ListVacantes from "../components/ListVacantes.vue";
  import DetailVacante from "../components/DetailVacante.vue";
  import { GET_JOBS_VACANVIES } from "@/graphql/queries";
  import { useQuery } from "@/graphql/index";

  export default {
    name: "Vacantes",
    components: {
      Footer,
      ListVacantes,
      DetailVacante,
    },
    async created() {
      const { data, errors } = await useQuery(GET_JOBS_VACANVIES, {});
      if (data) {
        this.loading = false;
        this.listVacantes = data.job_vacancies;
        console.log(data.job_vacancies);
        // this.$store.dispatch("getMovies", data.movies);
      } else if (errors) {
        console.log(errors);
      }
    },
    data() {
      return {
        details: false,
        vacante: {},
        listVacantes: [],
        loading: false,
      };
    },
    methods: {
      handleDetail(vacante) {
        this.vacante = vacante;
        this.details = !this.details;
      },
    },
  };
</script>

<style scoped>
  .vacantes_image {
    background: url("~@/assets/vacante.jpg");
    background-size: cover;
    height: 500px;
    margin-bottom: 3em;
  }
  .v-list-item {
    min-height: 0px;
  }
</style>
