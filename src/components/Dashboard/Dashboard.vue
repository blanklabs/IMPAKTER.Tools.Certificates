<template>
  <div id="dashBoard">
    <Sidebar />
    <div>
      <b-alert v-if="isSignupSuccess" variant="success" show dismissible fade
        >Profile updated successfully. Please verify your email address by
        checking your inbox.</b-alert>
        <!-- <p>Main</p> -->
    </div>
    <!-- When User has 0 certificates -->
    <b- v-if="noCertificates">
      <div>
        <img  id="headerImg" src="../../assets/LandingPage/dummyHeader.png"/>
        <div id="headerSection">
          <h1>Welcome Message</h1>
          <ActionButton btnIcon="person-circle" btnDescription="Complete your Profile"/>
          <ActionButton btnIcon="file-earmark-text" btnDescription="Fill your First Certificate"/>

        </div>
      </div>  
    </b->
    <b- v-else>
    <div>
       <b-row id="smallCards">
            <b-col><CardItem cardIcon="files" cardTitle="Certificates" iconColor="#8EC184"><h1>4</h1></CardItem></b-col>
            <b-col><CardItem cardIcon="file-text" cardTitle="Drafts" iconColor="#E2CB2C"><h1>4</h1></CardItem></b-col>
            <b-col><CardItem cardIcon="file-earmark" cardTitle="Articles" iconColor="#F79755"><h1>4</h1></CardItem></b-col>
        </b-row>
        <b-row id="smallCards">
            <b-col><CardItem cardIcon="newspaper" cardTitle="News" iconColor="#2880C3"><h1>4</h1></CardItem></b-col>
            <b-col><CardItem cardIcon="folder2-open" cardTitle="Documents" iconColor="#2880C3"><h1>4</h1></CardItem></b-col>
            <b-col><CardItem cardIcon="check2-all" cardTitle="Matches" iconColor="#2880C3"><h1>4</h1></CardItem></b-col>
        </b-row>
    </div>
    </b->
  </div>
      
</template>
<script>
import { ActionButton, CardItem } from "uicomponents"
import Sidebar from "../Shared/Sidebar";
export default {
  name: "Dashboard",
  data() {
    return {
      isSignupSuccess: false,
      noCertificates: false,
    };
  },
  components: {
    Sidebar,
    ActionButton,
    CardItem,
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
 #smallCards{
   padding: 30px;
 }
</style>
