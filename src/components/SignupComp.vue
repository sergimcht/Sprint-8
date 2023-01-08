<template>
    <div class="modal-wrapper">
        <div class="modal">
            <h2>CREATE YOUR ACCOUNT</h2>
            <div class="close-modal" @click="swapSignupModal">
                <fa class="fa-icon" :icon="['fa', 'fa-xmark']" />
            </div>
            <div class="form-container">
                <form class="form" @submit.prevent="validateAndAdd">
                    <input type="text" placeholder="Name" v-model="name" ref="name" />
                    <p class="error">{{ nameError }}</p>
                    <input type="text" placeholder="Username" v-model="username" ref="lastName" />
                    <p class="error">{{ usernameError }}</p>
                    <input type="text" placeholder="Email Address" v-model="email" ref="email" />
                    <p class="error">{{ emailError }}</p>
                    <input type="password" placeholder="Password" v-model="password" ref="password" />
                    <p class="error">{{ passwordError }}</p>
                    <button>CONTINUE</button>
                </form>
                <div class="swap-modal">
                    <p>Already have an account?  <a href="#" @click="swapModals">Log in</a></p>
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
      name: "",
      nameError: "",
      username: "",
      usernameError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: ""
    };
  },

  methods: {
    ...mapMutations(["swapSignupModal", "addUser", "swapLoginModal"]),

    swapModals() {
      this.swapSignupModal();
      this.swapLoginModal();
    },

    validateAndAdd() {
        let namePattern = /^[A-Za-z]+$/;
        let nameValidation = namePattern.test(this.name);
        if (!nameValidation) {
            this.nameError = "Only letters allowed.";
        } else {
            this.nameError = "";
        }

        let usernamePattern = /^[A-Za-z0-9._%+-]+$/;
        let usernameValidation = usernamePattern.test(this.username);
        if (!usernameValidation) {
            this.usernameError = "Only letters, numbers and symbols allowed.";
        } else {
            this.usernameError = "";
        }

        let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let emailValidation = emailPattern.test(this.email);
        if (!emailValidation) {
            this.emailError = "Please enter a valid email address.";
        } else {
            this.emailError = "";
        }

        let passwordPattern = /^.{5,}$/;
        let passwordValidation = passwordPattern.test(this.password);
        if (!passwordValidation) {
            this.passwordError = "Password must be at least 5 characters.";
        } else {
            this.passwordError = "";
        }

        if (nameValidation && usernameValidation && emailValidation && passwordValidation) {
            this.addUser({ name: this.name, username: this.username.toLowerCase(), email: this.email.toLowerCase(), password: this.password });
            this.name = "";
            this.username = "";
            this.email = "";
            this.password = "";
        }
    },
    },
};
</script>

<style>

</style>