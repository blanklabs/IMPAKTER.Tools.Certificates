<template>
  <b-container fluid="md" id="signup_main">
    <img src="@/assets/logo_index.png" id="impakterLogo" />

    <h1>Sign-up</h1>

    <h4>Contact info</h4>

    <b-form @submit="onSubmit">
      <b-form-input
        id="identifier"
        v-model="signupModel.details.company"
        placeholder="Company Name"
        required
      >
      </b-form-input>

      <b-form-input
        id="identifier"
        v-model="signupModel.details.role"
        placeholder="Your Role"
      >
      </b-form-input>
      <b-button id="action_btt" type="submit" variant="primary"
        >Sign Up</b-button
      >
    </b-form>
  </b-container>
</template>

<script>
import { ServicesFactory } from "@/services/ServicesFactory";
const account = ServicesFactory.get("account");
import SignUpMixin from "@/mixins/SignUpMixin";
import CommonMixin from "@/mixins/CommonMixin";

export default {
  name: "SignUp-Part2",
  mixins: [SignUpMixin, CommonMixin],
  methods: {
    async onSubmit() {
      console.log(this.signupModel);
      this.request.data = this.signupModel;
      let response = await account.signup(this.request);
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