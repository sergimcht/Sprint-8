import { createStore } from "vuex";
import axios from "axios";
import router from "../router/index";

export default createStore({
  state: {
    starshipsList: [],
    oneStarship: {},
    starshipsPage: 1,
    starshipPilotsArray: [],

    charactersList: [],
    charactersPage: 1,

    showSignupModal: false,
    showLoginModal: false,

    registeredUsers: [{name: 'a', username: 'a', email: 'a@a.com', password: 'aaaaa'}],
    loggedIn: false,
    currentUser: ""
  },

  getters: {
    getNextPageStarships(state) {
      return state.starshipsPage;
    },
    getNextPageCharacters(state) {
      return state.charactersPage;
    },
  },

  mutations: {
    fetchStarshipsMut(state, starshipsData) {
      let control;
      let models = state.starshipsList.map(starship => starship.model)
      for (let i = 0; i < starshipsData.length; i++) {
        control = models.indexOf(starshipsData[i].model)
      }
      if (state.starshipsList[0] == undefined || control == -1) {
        state.starshipsList = state.starshipsList.concat(starshipsData)
      }
    },
    fetchOneStarshipMut(state, oneStarshipData) {
      state.oneStarship = oneStarshipData
    },
    viewMoreStarships(state) {
      state.starshipsPage++
    },
    fetchCharactersMut(state, charactersData) {
      let control;
      let names = state.charactersList.map(character => character.name)
      for (let i = 0; i < charactersData.length; i++) {
        control = names.indexOf(charactersData[i].name)
      }
      if (state.charactersList[0] == undefined || control == -1) {
        state.charactersList = state.charactersList.concat(charactersData)
      }
    },
    viewMoreCharacters(state) {
      state.charactersPage++
    },
    swapSignupModal(state) {
      state.showSignupModal = !state.showSignupModal;
    },
    swapLoginModal(state) {
      state.showLoginModal = !state.showLoginModal;
    },
    addUser(state, userDataObject) {
      if (state.registeredUsers.length!=0) {
        const emailOnly = state.registeredUsers.map((user) => user.email.toLowerCase());
        const usernameOnly = state.registeredUsers.map((user) => user.username.toLowerCase());
        if ((!emailOnly.includes(userDataObject.email.toLowerCase())) & (!usernameOnly.includes(userDataObject.username.toLowerCase()))) {
          state.registeredUsers.push(userDataObject);
          state.showSignupModal = false;
          alert("User Registered succesfully");
        } else {
          alert("User already registered");
        }
      } else {
        state.registeredUsers.push(userDataObject);
        state.showSignupModal = false;
        alert("User Registered succesfully");
      }
      console.table(state.registeredUsers);
    },
    logIn(state, userDataObject) {
      let isSignedUp = false;

      if (state.registeredUsers.length) {
        state.registeredUsers.some((user) => {
          if (user.username === userDataObject.username && user.password === userDataObject.password) {
            return (isSignedUp = true);
          } else {
            isSignedUp = false;
          }
        });

        if (isSignedUp) {
          state.currentUser = userDataObject.username;
          state.loggedIn = true;
          state.showLoginModal = false;
          alert("User logged in");
        } else {
          state.loggedIn = false;
          alert("Invalid username or password");
        }
      } else {
        state.loggedIn = false;
        alert("No user with this username registered yet");
      }
    },
    logOut(state) {
      state.loggedIn = false;
      state.currentUser = "";

      router.push({ name: "home" });
      alert("User logged out");
    },
  },
  actions: {
    async fetchStarshipsAct({ commit }, starshipsPage) {
      const starshipsData = await axios.get(`https://swapi.py4e.com/api/starships/?page=${starshipsPage}`).then(response => response.data.results)
      commit('fetchStarshipsMut', starshipsData)
    },
    async fetchOneStarshipAct({ commit }, url) {
      const oneStarshipData = await axios.get(`${url}`).then(response => response.data)
      commit('fetchOneStarshipMut', oneStarshipData)
    },
    async fetchCharactersAct({ commit }, charactersPage) {
      const charactersData = await axios.get(`https://swapi.py4e.com/api/people/?page=${charactersPage}`).then(response => response.data.results)
      commit('fetchCharactersMut', charactersData)
    },
  },
});
