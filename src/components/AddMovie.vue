<template>
  <div>
    <input type="text" placeholder="Title" v-model="title" />
    <input type="text" placeholder="Director" v-model="director" />

    <button class="button-primary" @click="addMovie">Agregar</button>
  </div>
</template>

<script>
  import { CREATE_MOVIE } from "@/graphql/mutations";
  import { useMutation } from "@/graphql/index";
  import { GET_MOVIES } from "@/graphql/queries";
  import { useQuery } from "@/graphql/index";

  export default {
    name: "AddMovie",
    data() {
      return {
        title: "",
        director: "",
      };
    },
    methods: {
      async addMovie() {
        const { data, errors } = await useMutation(CREATE_MOVIE, {
          title: this.title,
          director: this.director,
        });
        if (data) {
          const { data, errors } = await useQuery(GET_MOVIES, {});
          if (data) {
            this.$store.dispatch("getMovies", data.movies);
          } else if (errors) {
            console.log(errors);
          }
        } else if (errors) {
          console.log(errors);
        }
      },
    },
  };
</script>
