<template>
  <b-container fluid="md" id="signin_main">
    <img id="impakterLogo" src="@/assets/logo_index.png" />
    <h1>Sign In to Index Certificate Tool</h1>
    <p>We suggest you to sign in with the email address you use at work.</p>
    <b-alert
      :show="isStatusMessage"
      @dismissed="isStatusMessage = false"
      variant="danger"
      dismissible
      fade
      >{{ statusMessage }}</b-alert
    >
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
import AccountMixin from "@/mixins/AccountMixin";

export default {
  name: "SignIn",
  data() {
    return {};
  },
  mixins: [CommonMixin, AccountMixin],
  methods: {
    async login() {
      this.request.status.code = this.transportCodes.SUCCESS;
      this.request.data = this.user;
      try {
        this.response = await account.login(this.request);
      } catch (err) {
        this.statusMessage = "Something went wrong. Please retry";
        this.isStatusMessage = true;
      }

      let responseStatus = this.response.data.status;

      if (responseStatus.code == 1) {
        if (responseStatus.case == this.loginCases.SUCCESS) {
          let responseData = this.response.data.data;
          if (responseData.accessToken) {
            window.localStorage.setItem(
              "accessToken",
              responseData.accessToken
            );
            this.$store.dispatch("user/setLoginStatus", true);
            this.$router.push("/dashboard");
          } else {
            this.statusMessage = "Something went wrong. Please retry";
            this.isStatusMessage = true;
          }
        } else if (responseStatus.case == this.loginCases.NEWUSER) {
          this.statusMessage =
            "Email is not registered. Please sign up instead";
          this.isStatusMessage = true;
        } else if (responseStatus.case == this.loginCases.INCORRECTPASSWORD) {
          this.statusMessage = responseStatus.message;
          this.isStatusMessage = true;
        }
      } else {
        if (responseStatus.code == 0) {
          this.statusMessage =
            "Sign up failed. Please try again in a bit or contact administrator";
          this.isStatusMessage = true;
        }
      }
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