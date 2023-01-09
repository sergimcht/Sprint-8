<template>
    <div class="modal-wrapper">
        <div class="modal">
            <h2>WELCOME BACK</h2>
            <div class="close-modal" @click="swapLoginModal">
                <fa class="fa-icon" :icon="['fa', 'fa-xmark']" />
            </div>
            <div class="form-container">
                <form class="form" @submit.prevent="validateAndLogin">
                    <input type="text" placeholder="Username" v-model="username" ref="lastName" />
                    <p class="error">{{ usernameError }}</p>
                    <input type="password" placeholder="Password" v-model="password" ref="password" />
                    <p class="error">{{ passwordError }}</p>
                    <button>CONTINUE</button>
                </form>
                <div class="swap-modal">
                    <p>Don't have an account? <a href="#" @click="swapModals">Sign up</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
    };
  },

  methods: {
    ...mapMutations(["swapLoginModal"]),
    swapModals() {
      this.$store.commit('swapSignupModal');
      this.$store.commit('swapLoginModal');
    },

    validateAndLogin() {
    let usernamePattern = /^[A-Za-z0-9._%+-]+$/;
    let usernameValidation = usernamePattern.test(this.username);
    if (!usernameValidation) {
        this.usernameError = "Type a valid email address.";
    } else {
        this.usernameError = "";
    }

    let passwordPattern = /^.{5,}$/;
    let passwordValidation = passwordPattern.test(this.password);
    if (!passwordValidation) {
        this.passwordError = "Password must be at least 5 characters.";
    } else {
        this.passwordError = "";
    }

    if (usernameValidation && passwordValidation) {
        this.$store.commit("logIn", { username: this.username.toLowerCase(), password: this.password })
    }
    },
}}
</script>

<style>

</style>