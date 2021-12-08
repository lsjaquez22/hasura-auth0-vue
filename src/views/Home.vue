<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AddMovie />
    <MovieList />
  </div>
</template>

<script>
  // @ is an alias to /src
  import MovieList from "@/components/MovieList.vue";
  import AddMovie from "../components/AddMovie.vue";

  export default {
    name: "Home",
    components: {
      MovieList,
      AddMovie,
    },
  };
</script>
