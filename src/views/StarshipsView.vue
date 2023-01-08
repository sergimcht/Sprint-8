<template>
  <div class="starships" v-if="starshipsList.length">
    <div class="starships-card" v-for="(ship, i) in starshipsList" :key="i">
      <router-link :to="{ name: 'details', params: { id: (ship.url) } }">
          <h3>{{ ship.name.toUpperCase() }}</h3>
          <p>{{ ship.model }}</p>
        </router-link>
      </div>
    <div class="load-more" v-if="(starshipsList.length < 36)">
      <button @click="moreStarships">LOAD MORE</button>
    </div>
  </div>
  <div v-else>
    <h2>Loading ships, may the force of the patience be with you!</h2>
  </div>
</template>
  
<script>
import { mapState } from 'vuex'

export default {
  data() {
      return {
          page: 1
      }
  },
  computed: {
      ...mapState(['starshipsList'])
  },
  methods: {
    moreStarships() {
        this.$store.commit('viewMoreStarships');
        this.$store.dispatch('fetchStarshipsAct', this.$store.getters.getNextPageStarships);
      }
  },
  created() {
      this.$store.dispatch('fetchStarshipsAct', this.page);
  }
}
</script>

<style scoped>
.starships {
  margin: 0 auto;
  max-width: 1000px;
}
.starships-card {
  text-align: center;
  border-radius: 15px;
  margin: 2rem 0;
  padding: 1.5rem;
  color: white;
  background: var(--card);
  border: 1px solid #ffffff;
}

.starships-card h3 {
  font-family: 'Poller One';
}

.starships-card h3:hover {
  color: var(--red);
}

.starships-card p, .starships-card h3{
  color: white;
}


</style>
  