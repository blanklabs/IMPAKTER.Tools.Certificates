<template>
  <b-container fluid="md" id="signin_main">
    <img id="impakterLogo" src="@/assets/logo_index.png" />
    <h1>Sign In to Index Certificate Tool</h1>
    <p>We suggest you to sign in with the email address you use at work.</p>
    <b-button id="GoogleButton" v-on:click="login">
      <img src="@/assets/google_logo.png" id="googleLogo" /> Sign in with Google
    </b-button>
    <div class="separator">
      <hr />
      <h5>OR</h5>
      <hr />
    </div>
    <b-form-input
      id="identifier"
      v-model="user.email"
      placeholder="name@work-email.com"
      required
    >
    </b-form-input>

    <b-form-input
      id="identifier"
      v-model="user.password"
      placeholder="password"
      required
    >
    </b-form-input>

    <b-button v-on:click="login" id="signInButton">Sign in with Email</b-button>
    <hr />
    <p>
      Don’t have an account? <router-link to="/signup">Sign Up</router-link>
    </p>
  </b-container>
</template>

<script>
import { ServicesFactory } from "@/services/ServicesFactory";
const account = ServicesFactory.get("account");
import CommonMixin from "@/mixins/CommonMixin";

export default {
  name: "SignIn",
  data() {
    return {};
  },
  mixins: [CommonMixin],
  methods: {
    async login() {
      console.log(this.user.email, this.user.password);
      this.request.status.code = this.transportCodes.SUCCESS;
      this.request.data = this.user;
      let response = await account.login(this.request);
      let user = response.data.data;
      window.localStorage.setItem("user", user.email);
      console.log(user);
    },
  },
};
</script>

<style scoped>
h1 {
  padding: 10px;
  font-weight: bold;
}

hr {
  flex: 1;
  height: 1px;
  background-color: #bbbbbb;
}

a:link {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

#signin_main {
  margin-top: 10px;
  max-width: 500px;
}

#impakterLogo {
  margin-left: 60px;
  padding: 10px;
  max-width: 300px;
}

#googleLogo {
  display: inline-block;
  margin-right: 15px;
  max-width: 25px;
}

#GoogleButton {
  display: inline-block;
  background: white;
  color: #0f993e;
  width: 100%;
  border-radius: 5px;
  border: thin solid #0f993e;
  white-space: nowrap;
  font-weight: bold;
}

#signInButton {
  display: inline-block;
  background: white;
  color: #1d2029;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #989898;
  white-space: nowrap;
  font-weight: bold;
}

.separator {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.separator h5 {
  padding: 0 2rem; /* creates the space */
}
#identifier {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>