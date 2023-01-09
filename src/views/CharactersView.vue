<template>
    <div class="characters" v-if="charactersList.length">
    <div class="characters-card" v-for="character in charactersList" :key="character">
        <div class="characters-elements">
          <h3>{{ character.name.toUpperCase() }}</h3>
          <p>Gender: {{ character.gender }}</p>
          <p>Height: {{ character.height }}</p>
          <p>Mass: {{ character.mass }}</p>
          <p>Skin Color: {{ character.skin_color }}</p>
          <p>Birth Year: {{ character.birth_year }}</p>
          <p>Eye Color: {{ character.eye_color }}</p>
          <MoviesComp :moviesArray="character.films" />
          <StarshipsComp :starshipsArray="character.starships" />
        </div>
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
  font-size: 130%;
}

.characters h2 {
  color: white;
}

.characters-elements {
  margin: 0 1rem;
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

.characters-card p {
  margin: .4rem 0;
}
</style>