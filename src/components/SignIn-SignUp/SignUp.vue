<template>
  <b-container fluid="md" id="signup_main">
    <img src="@/assets/logo_index.png" id="impakterLogo" />

    <h1>Sign-up</h1>
    <b-button id="GoogleButton" v-on:click="login('GOOGLE')">
      <img src="@/assets/google_logo.png" id="googleLogo" /> Sign up with Google
    </b-button>
    <div class="separator">
      <hr />
      <h5>OR</h5>
      <hr />
    </div>
    <h4>Contact info</h4>
    <b-alert
      :show="isStatusMessage"
      @dismissed="isStatusMessage = false"
      variant="danger"
      dismissible
      fade
      >{{ statusMessage }}</b-alert
    >
    <b-form @submit="onSubmit">
      <b-form-input
        id="identifier"
        v-model="user.firstName"
        placeholder="First Name"
        required
      >
      </b-form-input>

      <b-form-input
        id="identifier"
        v-model="user.lastName"
        placeholder="Last Name"
      >
      </b-form-input>

      <b-form-input
        id="identifier"
        v-model="user.email"
        placeholder="Email Address"
      >
      </b-form-input>
      <b-form-input
        id="identifier"
        v-model="user.password"
        placeholder="New Password"
      >
      </b-form-input>

      <b-form-input
        id="identifier"
        v-model="passwordConfirmation"
        placeholder="Confirm Password"
      >
      </b-form-input>
      <b-button id="action_btt" type="submit" variant="primary"
        >Sign up</b-button
      >
    </b-form>
  </b-container>
</template>

<script>
import AccountMixin from "@/mixins/AccountMixin";
import CommonMixin from "@/mixins/CommonMixin";

import { ServicesFactory } from "@/services/ServicesFactory";
const account = ServicesFactory.get("account");

export default {
  name: "SignUp",
  data() {
    return {
      passwordConfirmation: "",
    };
  },
  mixins: [AccountMixin, CommonMixin],
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      this.request.data = this.user;
      try {
        let webResponse = await account.signup(this.request);
        this.response = webResponse.data;
      } catch (err) {
        this.statusMessage = "Something went wrong. Please retry";
        this.isStatusMessage = true;
      }
      let responseStatus = this.response.status;

      if (responseStatus.code == 1) {
        if (responseStatus.case == this.signupCases.SUCCESS) {
          let responseData = this.response.data;
          if (responseData.accessToken) {
            let payload = {
              accessToken: responseData.accessToken,
              case: "SIGNUP",
            };
            this.$store.dispatch("user/login", payload);
            this.$router.push("/signup/continue");
          } else {
            this.statusMessage = "Something went wrong. Please retry";
            this.isStatusMessage = true;
          }
        } else if (responseStatus.case == this.signupCases.EXISTING) {
          this.statusMessage =
            "You are already signed up. Please sign in instead";
          this.isStatusMessage = true;
        } else if (responseStatus.case == this.signupCases.FAILED) {
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
#identifier {
  margin-top: 10px;
  margin-bottom: 10px;
}

#signup_main {
  margin-top: 10px;
  max-width: 500px;
}

#impakterLogo {
  margin-left: 60px;
  padding: 10px;
  max-width: 300px;
}

#action_btt {
  display: inline-block;
  background: white;
  color: #1d2029;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #989898;
  white-space: nowrap;
  font-weight: bold;
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


.separator {
  padding: 10px;
  display: flex;
  align-items: center;
}

.separator h5 {
  padding: 0 2rem; /* creates the space */
}

#emailForm {
  padding: 10px;
}
</style>