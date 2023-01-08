<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  components: { NavbarComp, FooterComp }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poller+One&display=swap');

:root {
  --bg: #000000;
  --card: #080808;
  --red: #ce102c;
  --blue: #201652;
  --clr-5: #fee123;
  --clr-6: #3cbfaf;
  --clr-7: #f3dcb3;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a:link, a:visited, a:active {
    text-decoration:none;
    color: rgb(255, 255, 255);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-image: url("./assets/background-space.png");
}

.load-more button {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 20px;
  margin: 0 0 2rem 0;
  font-size: 1.2rem;
  color: white;
  font-family: 'Poller One';
}

.load-more button:hover {
  color: var(--red);
  cursor: pointer;
}
</style>