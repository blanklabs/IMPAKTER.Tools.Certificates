<template>
  <div class="signUpDiv">
    <b-container class="signup_main" fluid="md">
      <img class="impakterLogo" src="@/assets/logo_index.png"/>

      <h1>Sign-up</h1>
      <b-button class="GoogleButton" v-on:click="login('GOOGLE')">
        <img class="googleLogo" src="@/assets/google_logo.png"/> Sign up with
        Google
      </b-button>
      <div class="separator">
        <hr/>
        <h5>OR</h5>
        <hr/>
      </div>
      <h4>Contact info</h4>
        <p v-if = "errors.length">
          <ul>
            <li v-for = "e in errors" v-bind:key = "e.id">
              {{ e }}
            </li>
          </ul>
        </p>
      <b-alert
          :show="toggleStatusMessage"
          @dismissed="toggleStatusMessage = false"
          variant="danger"
          dismissible
          fade
      >{{ statusMessage }}
      </b-alert
      >
      <b-form @submit="onSubmit">
        <b-form-input
            class="identifier"
            id="name"
            v-model="userObj.user.firstName"
            placeholder="First Name"
            @change="validateName"
            required
        >

        </b-form-input>

        <b-form-input
            class="identifier"
            id="lastName"
            v-model="userObj.user.lastName"
            placeholder="Last Name"
            @change="validateLname"
            required
        >
        </b-form-input>

        <b-form-input
            class="identifier"
            id="email"
            type = "email"
            v-model="userObj.user.email"
            placeholder="Email Address"
            @change="validateEmail"
            required
        >
        </b-form-input>
        <b-form-input
            class="identifier"
            id="password"
            type = "password"
            v-model="userObj.user.password"
            placeholder="New Password"
            @change="validatePassword"
            required
        >
        </b-form-input>

        <b-form-input
            class="identifier"
            id="confirmationPassword"
            type = "password"
            v-model="passwordConfirmation"
            placeholder="Confirm Password"
            @change="validatePassword"
            required
        >
        </b-form-input>
        <b-button class="action_btt" type="submit" variant="primary"
        >Sign-up
        </b-button
        >
      </b-form>
    </b-container>
  </div>
</template>


<script>
import AccountMixin from "@/mixins/AccountMixin";
import CommonMixin from "@/mixins/CommonMixin";


export default {
  name: "SignUp",
  data() {
    return {
      errors: [],
      errorLabels: {firstNameErrorMessage : "First Name cannot be empty and cannot conatin numbers", lastNameErrorMessage:"Last Name cannot be empty and cannot conatin numbers", passwordErrorMessage : "Password cannot be empty and must contain a Number and a Capital letter and must be minimum of 8 letters and maximum of 15 letters", emailErrorMessage : "Email is not valid"},
      passwordConfirmation: null,
    };
  },
  mixins: [AccountMixin, CommonMixin],
  methods: {
    validateName(){
      const nameregex = /^[a-zA-Z]+$/;
      const firstnamematch = nameregex.test(this.userObj.user.firstName)
      if((!firstnamematch) || (this.userObj.user.firstname == undefined || this.userObj.user.firstname == "")){
        this.errors = []
        this.errors.push(this.errorLabels.firstNameErrorMessage) 
      }
      var checkerror = this.errors.includes(this.errorLabels.firstNameErrorMessage)
      if(checkerror && firstnamematch){
        const index = this.errors.indexOf(this.errorLabels.firstNameErrorMessage);
        if (index > -1) {
          this.errors.splice(index, 1);
        }
      }
    },
    validateLname(){
      const nameregex = /^[a-zA-Z]+$/;
      const lastnamematch = nameregex.test(this.userObj.user.lastName)
      if((!lastnamematch) || (this.userObj.user.lastname == undefined || this.userObj.user.lastname == "")){
        this.errors = []
        this.errors.push(this.errorLabels.lastNameErrorMessage) 
      }
      var checkerror = this.errors.includes(this.errorLabels.lastNameErrorMessage)
      if(checkerror && lastnamematch){
        const index = this.errors.indexOf(this.errorLabels.lastNameErrorMessage);
        if (index > -1) {
          this.errors.splice(index, 1);
        }
      }
    },
    validatePassword(){
      const passwordregex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,15}$/;
      const passwordmatch = passwordregex.test(this.userObj.user.password)
      if((!passwordmatch) || (this.userObj.user.password == undefined || this.userObj.user.password == "")){
        this.errors = []
        this.errors.push(this.errorLabels.passwordErrorMessage) 
      }
      var checkerror = this.errors.includes(this.errorLabels.passwordErrorMessage)
      if(checkerror && passwordmatch){
        const index = this.errors.indexOf(this.errorLabels.passwordErrorMessage);
        if(index > -1){
          this.errors.splice(index,1)
        }
      }
    },
    validateEmail(){
      const emailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
      const emailmatch = emailregex.test(this.userObj.user.email)
      if((!emailmatch) || (this.userObj.user.email == undefined || this.userObj.user.email == "")){
        this.errors = []
        this.errors.push(this.errorLabels.emailErrorMessage)
      }
      var checkerror = this.errors.includes(this.errorLabels.emailErrorMessage)
      if(checkerror && emailmatch){
        const index = this.errors.indexOf(this.errorLabels.emailErrorMessage);
        if (index > -1) {
          // this.errors.length = 0
          // this.errors.pop()
          this.errors.splice(index, 1);
        }
      }
    },
    async onSubmit(event) {
      event.preventDefault();
      if(this.userObj.user.password == this.passwordConfirmation){
              this.request.data = this.userObj;
              this.response = await this.$store.dispatch(
                  "user/checkUser",
                  this.request
              );
              let responseStatus = this.response.status;
              if (responseStatus.case === this.signupCases.NEWUSER) {
                await this.$store.commit("account/setUser", this.userObj);
                await this.$router.push("/signup/continue");
              }
              else if (responseStatus.case === this.signupCases.EXISTING) {
                this.statusMessage =
                    "You are already signed up. Please sign in instead";
                this.toggleStatusMessage = true;
              }
              else if (responseStatus.case === this.signupCases.FAILED) {
                this.statusMessage = responseStatus.message;
                this.toggleStatusMessage = true;
              }
      }else{
        this.errors.push("Password doesn't match")
      }
    },
  },
};


</script>

<style scoped>
.signUpDiv {
  display: flex;
  margin: 0 0 -35px -400px;
}
.signup_main {
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
.identifier {
  margin-top: 10px;
  margin-bottom: 10px;
}
.impakterLogo {
  margin-left: 40px;
  padding: 10px;
  max-width: 300px;
}
.action_btt {
  display: inline-block;
  background: white;
  color: #1d2029;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #989898;
  white-space: nowrap;
  font-weight: bold;
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
.separator {
  padding: 10px;
  display: flex;
  align-items: center;
}
.separator h5 {
  padding: 0 2rem;
}
</style>



