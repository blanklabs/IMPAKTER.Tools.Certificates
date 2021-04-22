<template>
  <b-container fluid="md" id="signup_main">
      <img src="@/assets/logo_index.png" id="impakterLogo"/>

      <h4>Thank you for signing up.</h4>
      <p>We will review your application and send you  a confirmation email with your Signin information.</p>
        
      
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


</style>