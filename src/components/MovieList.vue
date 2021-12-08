<template>
  <div>
    <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
  import MovieItem from "@/components/MovieItem.vue";
  import { GET_MOVIES } from "@/graphql/queries";
  import { useQuery } from "@/graphql/index";
  import { mapState } from "vuex";

  export default {
    name: "MoviesList",
    components: { MovieItem },
    computed: mapState({
      movies(state) {
        return state.movies;
      },
    }),
    async created() {
      const { data, errors } = await useQuery(GET_MOVIES, {});
      if (data) {
        this.$store.dispatch("getMovies", data.movies);
      } else if (errors) {
        console.log(errors);
      }
    },
  };
</script>
view raw
