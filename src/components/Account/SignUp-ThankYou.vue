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


#signup_main{
  margin-top: 10px;
  max-width: 500px;
}



</style>