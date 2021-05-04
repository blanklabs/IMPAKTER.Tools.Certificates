<template>
  <div id="dashBoard">
    <Sidebar />
    <div>
      <b-alert v-if="isSignupSuccess" variant="success" show dismissible fade
        >Profile updated successfully. Please verify your email address by
        checking your inbox.</b-alert>
        <p>Main</p>
    </div>
     <img  id="headerImg" src="../../assets/LandingPage/dummyHeader.png"/>
     <div id="headerSection">
         <h1>Welcome Message</h1>
            <ActionButton btnIcon="person-circle" btnDescription="Complete your Profile"/>
            <ActionButton btnIcon="file-earmark-text" btnDescription="Fill your First Certificate"/>

     </div>
      
  </div>
</template>
<script>
import { ActionButton } from "uicomponents"
import Sidebar from "../Shared/Sidebar";
export default {
  name: "Dashboard",
  data() {
    return {
      isSignupSuccess: false,
    };
  },
  components: {
    Sidebar,
    ActionButton,
  },
  mounted() {
    this.isSignupSuccess = this.$store.getters["user/signupStatus"];
  },
};
</script>

<style scoped>
#dashBoard{
    margin-left: 100px;
    font-family: 'Montserrat', sans-serif;
}
#headerImg{
    max-height: auto;
    max-width: 1000px;
}
#headerSection{
    align-content: center;
    
    padding: 20px;
}
</style>
