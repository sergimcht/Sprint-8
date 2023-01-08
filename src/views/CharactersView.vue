<template>
    <div class="characters" v-if="charactersList.length">
    <div class="characters-card" v-for="character in charactersList" :key="character">
        <h3>{{ character.name.toUpperCase() }}</h3>
        <div>Gender: {{ character.gender }}</div>
        <div>Height: {{ character.height }}</div>
        <div>Mass: {{ character.mass }}</div>
        <div>Skin Color: {{ character.skin_color }}</div>
        <div>Birth Year: {{ character.birth_year }}</div>
        <div>Eye Color: {{ character.eye_color }}</div>
        <MoviesComp :moviesArray="character.films" />
        <StarshipsComp :starshipsArray="character.starships" />
    </div>
    <div class="load-more" v-if="(charactersList.length < 87)">
      <button @click="moreCharacters">Load More</button>
    </div>
  </div>
  <div v-else>
    <h2>Loading characters, may the force of the patience be with you!</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MoviesComp from '@/components/MoviesComp.vue';
import StarshipsComp from '@/components/StarshipsComp.vue';

export default {
    components: { MoviesComp, StarshipsComp },
    data() {
      return {
          page: 1
      }
  },
  computed: {
      ...mapState(['charactersList'])
  },
  methods: {
    moreCharacters() {
        this.$store.commit('viewMoreCharacters');
        this.$store.dispatch('fetchCharactersAct', this.$store.getters.getNextPageCharacters);
      }
  },
  created() {
      this.$store.dispatch('fetchCharactersAct', this.page);
  }
  
}
</script>

<style scoped>
.characters {
  margin: 0 auto;
  max-width: 1000px;
}

.characters h2 {
  color: white;
}
.characters-card {
  text-align: left;
  border-radius: 15px;
  margin: 2rem 0;
  padding: 1.5rem;
  color: white;
  background: var(--card);
  border: 1px solid #ffffff;
}

.characters-card h3 {
  color: var(--red);
  font-size: 140%;
}
</style>