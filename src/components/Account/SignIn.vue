<template>
  <div class="signInDiv">
    <b-container class="signin_main" fluid="md">
      <img class="impakterLogo" src="@/assets/logo_index.png"/>
      <h1>Sign In to Index Certificate Tool</h1>
      <p>We suggest you to sign in with the email address you use at work.</p>
      <b-alert
          :show="toggleStatusMessage"
          @dismissed="toggleStatusMessage = false"
          variant="danger"
          dismissible
          fade
      >{{ statusMessage }}
      </b-alert
      >
      <b-button class="GoogleButton" v-on:click="login('GOOGLE')">
        <img class="googleLogo" src="@/assets/google_logo.png"/>
        Sign in with Google
      </b-button>
      <div class="separator">
        <hr/>
        <h5>OR</h5>
        <hr/>
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
          :show="toggleButtonLoading"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="primary"
          @hidden="toggleButtonLoading"
      >
        <b-button class="signInButton" v-on:click="login('DIRECT')">
          Sign in With Email
        </b-button>
      </b-overlay>
      <hr/>
      <p>
        Don’t have an account?
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </b-container>
  </div>
</template>

<script>
import CommonMixin from "@/mixins/CommonMixin";
import AccountMixin from "@/mixins/AccountMixin";
import {transportCodes} from "../../../../SHARED.CODE/Constants/Transport";

export default {
  name: "SignIn",
  data() {
    return {
      toggleButtonLoading: false,
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
              this.response = await this.$store.dispatch(
                  "account/login",
                  this.request
              );
              await this.afterLogin();
            })
            .catch((err) => {
              console.error(err);
              this.statusMessage = "Google login failed. Please retry";
              this.toggleStatusMessage = true;
            });
      }
      else {
        this.toggleButtonLoading = true;
        this.request.status.case = this.loginCases.DIRECT;
        this.request.data = this.user;
        this.response = await this.$store.dispatch(
            "account/login",
            this.request
        );
        await this.afterLogin();
      }
    },
    async afterLogin() {
      console.log("executing SignIN component: afterLogin")
      //this.$store.commit("global/toggleLoading", "on");
      let responseStatus = this.response.status;
      if (responseStatus.code === transportCodes.SUCCESS) {
        this.toggleButtonLoading = false;
        if (responseStatus.case === this.loginCases.SUCCESS) {
          console.log("Login Success");
          this.$store.commit("global/toggleLoading", "on");
          await this.$store.dispatch("account/afterLogin", this.response.data);
          this.$store.commit("global/toggleLoading", "off");
          await this.$router.push("/dashboard");
        }
        else if (responseStatus.case === this.loginCases.NEWUSER) {
          this.statusMessage =
              "Email is not registered. Please sign up instead";
          this.toggleStatusMessage = true;
        }
        else if (responseStatus.case === this.loginCases.INCORRECTPASSWORD) {
          this.statusMessage = responseStatus.message;
          this.toggleStatusMessage = true;
        }
        else if (responseStatus.case === this.loginCases.FAILEDLOGIN) {
          this.statusMessage = responseStatus.message;
          this.toggleStatusMessage = true;
        }
      }
      else if (responseStatus.code === transportCodes.FAILURE) {
        this.toggleButtonLoading = false;
        this.statusMessage =
            "Sign in failed. Please try again in a bit or contact administrator";
        this.toggleStatusMessage = true;
      }
    },
  },
  watch: {
    toggleStatusMessage: function () {
      if (this.toggleStatusMessage) {
        this.toggleButtonLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.signInDiv {
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