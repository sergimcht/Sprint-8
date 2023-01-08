<template>
    <div class="starships" v-if="(oneStarship != undefined)">
      <br><h2>{{ oneStarship.name.toUpperCase() }}</h2>
      <div class="starships-card">
        <p><b><span class="categories">Model: </span>{{ oneStarship.model }}</b></p>
        <p><b><span class="categories">Class: </span>{{ oneStarship.starship_class }}</b></p>
        <p><b><span class="categories">Manufacturer: </span>{{ oneStarship.manufacturer }}</b></p>
        <p><b><span class="categories">Cost: </span>{{ oneStarship.cost_in_credits }} credits</b></p>
        <p><b><span class="categories">Length: </span>{{ oneStarship.length }} m</b></p>
        <p><b><span class="categories">Atmosphering Maximum Speed: </span>{{ oneStarship.max_atmosphering_speed }} km/h</b></p>
        <p><b><span class="categories">Hyperdive Rating: </span>{{ oneStarship.hyperdrive_rating }}</b></p>
        <p><b><span class="categories">Maximum Megalights per Hour: </span>{{ oneStarship.MGLT }} MGLT</b></p>
        <p><b><span class="categories">Crew: </span>{{ oneStarship.crew }}</b></p>
        <p><b><span class="categories">Cargo Capacity: </span>{{ oneStarship.cargo_capacity }} Kg</b></p>
        <!--<p><b><span class="categories">Array: </span>{{ oneStarship.pilots }}</b></p>-->
      </div>
      <div class="pilots">
        <PilotsComp :pilotsArray="oneStarship.pilots"></PilotsComp>
      </div>
    </div>
  
    <div v-else>
      <h2>Loading ship details</h2>
    </div>
</template>
    
<script>
import PilotsComp from '@/components/PilotsComp.vue';
import { mapState } from 'vuex';

export default {
    components: { PilotsComp },
    props: [ "id" ],
    computed: {
        ...mapState(["oneStarship"])
    },
    data() {
      return {
          starshipURL: null,
      }
    },
    created() {
        this.starshipURL = this.id;
        this.$store.dispatch("fetchOneStarshipAct", this.starshipURL);
    },
}
</script>

<style scoped>
.starships {
  margin: 0 auto;
  max-width: 1000px;
}

.starships h2 {
  margin-top: 1rem;
  color: var(--red);
  font-family: 'Poller One';
  font-size: 2rem;
}
.starships-card {
  text-align: left;
  border-radius: 15px;
  margin: 2rem 0;
  padding: 1.5rem;
  color: white;
  background: var(--card);
  border: 1px solid #ffffff;
}

.starships-card p {
  margin: .8rem;
}

.categories {
  text-transform: uppercase;
  font-size: 105%;
  margin: .25rem;
}

</style>