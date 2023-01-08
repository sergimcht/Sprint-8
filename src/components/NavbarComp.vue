<template>
    <div v-if="loggedIn" class="current-user">
        <p>WELCOME BACK, {{ currentUser.toUpperCase() }}</p>
    </div>
    <div class="login-bar">
      <div class="media-links">
        <fa class="fa-icon tw" :icon="['fab', 'twitter']" />
        <fa class="fa-icon yt" :icon="['fab', 'youtube']" />
        <fa class="fa-icon ig" :icon="['fab', 'instagram']" />
        <fa class="fa-icon fb" :icon="['fab', 'facebook']" />
      </div>
      <div class="logo">
        
        <p><router-link :to="{ name: 'home' }"><img alt="Star Wars logo" src="../assets/StarWarsLogo.png"/></router-link></p>
      </div>
  
      <div class="login-links">
        <a href="#">
          <span v-if="!loggedIn" @click="swapLoginModal"> LOG IN </span>
          <span v-else @click="logOut"> LOG OUT </span> </a
          >|
          <a href="#" @click="swapSignupModal"> SIGN UP </a>
        </div>
    </div>
    <nav>
      <div class="navigation-links">
        <span class="home-link"><p><router-link :to="{ name: 'home' }">HOME</router-link></p></span>
        <span class="starhips-link"><p><router-link :to="{ name: 'starships' }">STARSHIPS</router-link></p></span>
        <span class="characters-link"><p><router-link :to="{ name: 'characters' }">CHARACTERS</router-link></p></span>
      </div>
    </nav>
    <div v-if="showSignupModal">
      <SignupComp/>
    </div>
    <div v-if="showLoginModal">
      <LoginComp/>
    </div>
  </template>
  
  <script>
  import SignupComp from "@/components/SignupComp.vue";
  import LoginComp from "@/components/LoginComp.vue";
  
  import { mapState, mapMutations } from "vuex";
  
  export default {
    components: { SignupComp, LoginComp },
  
    methods: {
      ...mapMutations(["swapSignupModal", "swapLoginModal", "logOut"]),
    },
  
    computed: {
      ...mapState(["showSignupModal", "showLoginModal", "loggedIn", "currentUser"]),
    },
  };
  </script>
  
  <style scoped>
  .login-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bg);
  }

  .media-links {
    flex-grow: 5;
  }

  .fa-icon {
    cursor: pointer;
    color: white;
    margin: 0 .2rem;
    font-size: 2rem;
  }

  .fa-icon:hover {
    color: var(--red);
  }

  .logo {
    flex-grow: 3;
  }

  .logo img {
    width: 250px;
    margin: 2rem 1rem;
    color: white;

  }

  .login-links {
    flex-grow: 5;
    width: 10rem;
    color: white;
    font-family: 'Poller One';
    font-size: 1.25rem
  }

  .login-links :hover {
    color: var(--red);
  }

  .current-user {
    border-bottom: 2px solid #ffffff;
    background-color: var(--bg);
    color: white;
    font-family: 'Poller One';
    font-size: 1rem;
    padding: .8rem;
  }

  nav {
  border-bottom: 2px solid #ffffff;
  border-top: 2px solid #ffffff;
  }
  
  .navigation-links {
    background-color: var(--card);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .navigation-links > span {
    width: 20rem;
    margin: 0.75rem 0;
  }
  
  nav a {
  font-size: 1.4rem;
  color: white;
  font-family: 'Poller One';
  }

  nav a.router-link-exact-active {
  color: var(--red);
}

  </style>

<style>
.modal-wrapper {
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    width: 500px;
    background: #131515;
    padding: 2rem;
    position: relative;
    border-radius: 5%
}

.modal h2 {
    font-family: 'Poller One';
    font-size: 1.3rem;
    color: var(--red);
}

.modal-header img {
    width: 100px;
}

.form-container {
    text-align: left;
    width: 300px;
    margin: 2rem auto;
}

.form input[type="text"],
.form input[type="password"] {
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin: 1rem auto;
    width: 300px;
    color: #131515;
    display: block;
}
.form input:focus-visible {
    outline: 2px solid var(--red);
    background: rgba(255, 0, 0, 0.2);
    color: white;
}

.form button {
    margin: 2rem auto;
    width: 300px;
    display: block;
    border: none;
    outline: none;
    background: var(--red);
    color: white;
    font-weight: bold;
    padding: 0.5rem 0.8rem;
    cursor: pointer;
}

.form button:hover {
  background-color: rgba(255, 0, 0, 0.637);
}

.error {
  color: var(--red);
  font-weight: bold;
}

.close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
}

.fa-icon {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.25);
}

.fa-icon:hover {
  color: rgba(255, 255, 255, 0.411);
}

.swap-modal {
    color: var(--red);
    display: flex;
    justify-content: center;
    align-items: center;
}

.swap-modal a {
    color: white;
    font-weight: bold;
}
</style>
  