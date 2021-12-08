<template>
  <div class="home">
    <AddMovie />
    <MovieList />
  </div>
</template>

<script>
  // @ is an alias to /src
  import MovieList from "@/components/MovieList.vue";
  import AddMovie from "../components/AddMovie.vue";
  export default {
    name: "Dashboard",
    components: {
      MovieList,
      AddMovie,
    },
  };
</script>
