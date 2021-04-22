<template>
  <b-container fluid="md" id="signup_main">
      <img src="@/assets/logo_index.png" id="impakterLogo"/>

      <h1>Sign-up</h1>

      <h4>Contact info</h4>
        
      <b-form-input
          id="identifier"
          v-model="identifier"
          placeholder="Name"
          required>
      </b-form-input>
       
      <b-form-input
          id="identifier"
          v-model="identifier"
          placeholder="Lastname"
          required>
      </b-form-input>

      <b-form-input
          id="identifier"
          v-model="identifier"
          placeholder="Email Address"
          required>
      </b-form-input>
        
      <b-button @click="login" id="action_btt">Continue ></b-button>
      
  </b-container>
  
</template>

<script>
export default {
  name: "SignUp",
  
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
#identifier{
    margin-top: 10px;
    margin-bottom: 10px;
}

#signup_main{
  margin-top: 10px;
  max-width: 500px;
}

#impakterLogo{
  margin-left:60px;
  padding: 10px;
  max-width: 300px;
}


  #action_btt{
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
    padding: 10px;
    display: flex;
    align-items: center;
  }

  .separator h5{
    padding: 0 2rem; /* creates the space */
  }

  #emailForm{
    padding: 10px;
  }

</style>