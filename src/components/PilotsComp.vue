<template>
    <div class="pilots" v-if="starshipPilotsArray.length">
      <span><h2><b>PILOTS</b></h2></span>
        <div class="pilots-card" v-for="(pilot, i) in starshipPilotsArray" :key="i">
            <h3>{{ pilot.name.toUpperCase() }}</h3>
            <div class="categories">Gender: {{ pilot.gender }}</div>
            <div class="categories">Height: {{ pilot.height }}</div>
            <div class="categories">Mass: {{ pilot.mass }}</div>
            <div class="categories">Skin Color: {{ pilot.skin_color }}</div>
            <div class="categories">Birth Year: {{ pilot.birth_year }}</div>
            <div class="categories">Eye Color: {{ pilot.eye_color }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'pilotsArray' ],
    data() {
        return {
            starshipPilotsArray: [],
        }
    },
    mounted() {
    this.pilotsArray.forEach((pilotID) => {
      fetch(pilotID)
        .then((res) => res.json())
        .then((data) => {
          this.starshipPilotsArray.push(data);
        });
    });
  },
}
</script>

<style scoped>
.pilots {
  margin: 0 auto;
  max-width: 1000px;
}

.pilots h2 {
  margin-top: 1rem;
  color: var(--red);
  font-family: 'Poller One';
  font-size: 2rem;
}

.pilots-card {
  text-align: left;
  border-radius: 15px;
  margin: 2rem 0;
  padding: 1.5rem;
  color: white;
  background: var(--card);
  border: 1px solid #ffffff;
}

.pilots-card h3 {
  color: var(--red);
  font-size: 120%;
  font-weight: bold;
}

.categories {
  font-size: 105%;
  margin: .4rem 0;
}
</style>