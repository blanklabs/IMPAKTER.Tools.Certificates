<template>
  <b-container fluid="md" id="signin_main">
    <img id="impakterLogo" src="@/assets/logo_index.png" />
    <h1 >Sign In to Index Certificate Tool</h1>
    <p>We suggest you to sign in with the email address you use at work.</p>
    <b-button id="GoogleButton" @click="login">
      <img src="@/assets/google_logo.png" id="googleLogo"/> Sign in with Google
    </b-button>
    <div class="separator">
      <hr><h5>OR</h5><hr>
    </div>
    <b-form-input id="identifier"
        v-model="email"
        placeholder="name@work-email.com"
        required>
    </b-form-input>

    <b-form-input id="identifier"
                  v-model="password"
                  placeholder="password"
                  required>
    </b-form-input>


    <b-button @click="login" id="signInButton">Sign in with Email</b-button>
    <hr>
    <p>Don’t have an account? <a href="#">Sign Up</a></p>
  </b-container>
</template>

<script>
export default {
  name: "SignIn",
  data(){
    return{
      email:null,
      password:null
    }
  },
  methods:{
    login(){
      console.log(this.email, this.password)
    }
  }
};

</script>

<style scoped>
h1{
  padding: 10px;
  font-weight: bold;
}

hr{
  flex: 1;
  height: 1px;
  background-color: #BBBBBB;
}

a:link {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

#signin_main{
  margin-top: 10px;
  max-width: 500px;
}

#impakterLogo{
  margin-left:60px;
  padding: 10px;
  max-width: 300px;
}

#googleLogo{
  display: inline-block;
  margin-right: 15px;
  max-width: 25px;
}

 #GoogleButton{
    display: inline-block;
    background: white;
    color: #0F993E;
    width: 100%;
    border-radius: 5px;
    border: thin solid #0F993E;
    white-space: nowrap;
    font-weight: bold;
 }


  #signInButton{
    display: inline-block;
    background: white;
    color: #1D2029;
    width: 100%;
    border-radius: 5px;
    border: 2px solid #989898;
    white-space: nowrap;
    font-weight: bold;
  }

  .separator{
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

  .separator h5{
    padding: 0 2rem; /* creates the space */
  }
  #identifier{
    margin-top: 10px;
    margin-bottom: 10px;
}


</style>