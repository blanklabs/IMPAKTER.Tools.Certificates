<template>
  <div class="signInDiv">
    <b-container class="signin_main" fluid="md">
      <img class="impakterLogo" src="@/assets/logo_index.png" />
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
      <b-button class="GoogleButton" v-on:click="login('GOOGLE')">
        <img class="googleLogo" src="@/assets/google_logo.png" /> Sign in with
        Google
      </b-button>
      <div class="separator">
        <hr />
        <h5>OR</h5>
        <hr />
      </div>
      <b-form-input
        class="identifier"
        v-model="user.email"
        id="email"
        placeholder="name@work-email.com"
        required
      >
      </b-form-input>

      <b-form-input
        class="identifier"
        id="password"
        v-model="user.password"
        placeholder="password"
        required
      >
      </b-form-input>
      <b-overlay
        :show="loading"
        rounded
        opacity="0.6"
        spinner-small
        spinner-variant="primary"
        class="d-inline-block"
        @hidden="onHidden"
      >
        <b-button class="signInButton" v-on:click="login('DIRECT')">
          Sign in with Email
        </b-button>
      </b-overlay>
      <hr />
      <p>
        Don’t have an account? <router-link to="/signup">Sign Up</router-link>
      </p>
    </b-container>
  </div>
</template>

<script>
import { ServicesFactory } from "@/services/ServicesFactory";
const account = ServicesFactory.get("account");
import CommonMixin from "@/mixins/CommonMixin";
import AccountMixin from "@/mixins/AccountMixin";

export default {
  name: "SignIn",
  data() {
    return {
      loading: false,
    };
  },
  mixins: [CommonMixin, AccountMixin],
  methods: {
    async login(type) {
      if (type == "GOOGLE") {
        console.log("Executing Google login");
        this.$gAuth
          .signIn()
          .then(async (GoogleUser) => {
            console.log("Google login success");
            this.request.status.case = this.loginCases.GOOGLE;
            this.request.data = GoogleUser;
            try {
              let webResponse = await account.login(this.request);
              this.response = webResponse.data;
              this.afterLogin();
            } catch (err) {
              console.error(err);
              this.statusMessage = "Something went wrong. Please retry";
              this.isStatusMessage = true;
            }
          })
          .catch((err) => {
            console.error(err);
            this.statusMessage = "Google login failed. Please retry";
            this.isStatusMessage = true;
          });
      } else {
        this.request.status.case = this.loginCases.DIRECT;
        this.request.data = this.user;
        try {
          let webResponse = await account.login(this.request);
          this.response = webResponse.data;
          this.afterLogin();
        } catch (err) {
          console.error(err);
          this.statusMessage = "Something went wrong. Please retry";
          this.isStatusMessage = true;
        }
      }
    },
    async afterLogin() {
      //this.$store.commit("global/toggleLoading", "on");
      this.loading = true;
      let responseStatus = this.response.status;

      //console.log("this.response.status:", this.response.status);
      //console.log("responseStatus:", responseStatus);
      if (responseStatus.code == 1) {
        console.log("Impakter login Success");
        if (responseStatus.case == this.loginCases.SUCCESS) {
          let responseData = this.response.data;
          if (responseData.accessToken) {
            let payload = {
              accessToken: responseData.accessToken,
              user: responseData.user,
              org: responseData.org,
              case: "LOGIN",
            };
            await this.$store.dispatch("account/login", payload);
            this.$store.commit("global/toggleLoading", "off");
            this.loading = false;
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
  watch: {
    isStatusMessage: function () {
      if (this.isStatusMessage) {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.signInDiv{
    height: 55vh;
    display: flex;
    margin: 0 0 0 -400px;
}
.signin_main {
  max-width: 500px;
  height: 100%;
}

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



.impakterLogo {
  margin-left: 40px;
  padding: 10px;
  max-width: 300px;
}

.googleLogo {
  display: inline-block;
  margin-right: 15px;
  max-width: 25px;
}

.GoogleButton {
  display: inline-block;
  background: white;
  color: #0f993e;
  width: 100%;
  border-radius: 5px;
  border: thin solid #0f993e;
  white-space: nowrap;
  font-weight: bold;
}

.signInButton {
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
  padding: 0 2rem;
}
.identifier {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>