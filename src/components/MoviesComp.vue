<template>
  <div class="movies">
    <span><h3><b>MOVIES</b></h3></span>
        <div class="pilots-card" v-for="(movie, i) in characterMoviesArray" :key="i">
            <p>{{ movie.title }}</p>
        </div>
  </div>
</template>

<script>
export default {
    props: [ 'moviesArray' ],
    data() {
        return {
            characterMoviesArray: [],
        }
    },
    mounted() {
    this.moviesArray.forEach((movieID) => {
      fetch(movieID)
        .then((res) => res.json())
        .then((data) => {
          this.characterMoviesArray.push(data);
        });
    });
  },
}
</script>

<style>
.movies h3 {
  color: var(--red);
  font-size: 120%;
}

.pilots-card p {
  margin: .4rem 0;
}
</style>