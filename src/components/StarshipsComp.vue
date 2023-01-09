<template>
    <div class="pilots" v-if="(characterStarshipsArray.length>0)">
        <span><h3><b>STARSHIPS</b></h3></span>
            <div class="pilots-card" v-for="(starship, i) in characterStarshipsArray" :key="i">
                <p>{{ starship.name }}</p>
            </div>
        </div>
</template>

<script>
export default {
    props: [ 'starshipsArray' ],
    data() {
        return {
            characterStarshipsArray: [],
        }
    },
    mounted() {
    this.starshipsArray.forEach((strshipID) => {
      fetch(strshipID)
        .then((res) => res.json())
        .then((data) => {
          this.characterStarshipsArray.push(data);
        });
    });
  },
}
</script>

<style>
.pilots h3 {
  color: var(--red);
  font-size: 120%;

}

.pilots-card p {
  margin: .4rem 0;
}
</style>