<template>
  <div id="dashBoard">
    <div>
      <b-alert v-if="isSignupSuccess" variant="success" show dismissible fade
        >Profile updated successfully. Please verify your email address by
        checking your inbox.</b-alert
      >
      <!-- <p>Main</p> -->
    </div>
    <!-- When User has 0 certificates -->
    <b- v-if="noCertificates">
      <div>
        <img id="headerImg" src="../../assets/LandingPage/dummyHeader.png" />
        <div id="headerSection">
          <h1>Welcome Message</h1>
          <ActionButton
            btnIcon="person-circle"
            btnDescription="Complete your Profile"
          />
          <ActionButton
            btnIcon="file-earmark-text"
            btnDescription="Fill your First Certificate"
          />
        </div>
      </div>
    </b->
    <b- v-else>
      <div>
        <b-row id="smallCards">
          <b-col
            ><CardItem
              cardIcon="files"
              cardTitle="Certificates"
              iconColor="#8EC184"
              buttonIcon="arrow-right"
              btnLink="/certificates"

              ><h1>4</h1></CardItem
            ></b-col
          >
          <b-col
            ><CardItem
              cardIcon="file-text"
              cardTitle="Drafts"
              iconColor="#E2CB2C"
              buttonIcon="arrow-right"
              btnLink="#"
              ><h1>4</h1></CardItem
            ></b-col
          >
          <b-col
            ><CardItem
              cardIcon="file-earmark"
              cardTitle="Articles"
              iconColor="#F79755"
              buttonIcon="arrow-right"
              btnLink="/publications"
              ><h1>4</h1></CardItem
            ></b-col
          >
        </b-row>
        <b-row id="smallCards">
          <b-col
            ><CardItem 
              cardIcon="newspaper"
              cardTitle="News" 
              iconColor="#2880C3" 
              buttonIcon="arrow-right"
              btnLink="/news"
              ><h1>4</h1></CardItem
            ></b-col
          >
          <b-col
            ><CardItem
              cardIcon="folder2-open"
              cardTitle="Documents"
              iconColor="#2880C3"
              buttonIcon="arrow-right"
              btnLink="/library"
              ><h1>4</h1></CardItem
            ></b-col
          >
          <b-col
            ><CardItem
              cardIcon="check2-all"
              cardTitle="Matches"
              iconColor="#2880C3"
              ><h2>Comming Soon</h2></CardItem
            ></b-col
          >
        </b-row>
      </div>
    </b->
  </div>
</template>
<script>
import { ActionButton, CardItem } from "uicomponents";
//import Sidebar from "../Shared/Sidebar";
export default {
  name: "Dashboard",
  data() {
    return {
      isSignupSuccess: false,
      noCertificates: false,
    };
  },
  components: {
    ActionButton,
    CardItem,
  },
  mounted() {
    this.isSignupSuccess = this.$store.getters["user/signupStatus"];
  },
};
</script>

<style scoped>
#dashBoard {
  font-family: "Montserrat", sans-serif;
}
#headerImg {
  max-height: auto;
  max-width: 1000px;
}
#headerSection {
  align-content: center;

  padding: 20px;
}
#smallCards {
  padding: 30px;
}
</style>
