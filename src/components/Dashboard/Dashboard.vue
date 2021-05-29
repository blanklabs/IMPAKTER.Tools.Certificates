<template>
  <div class="dashBoard">
    <div>
      <b-alert v-if="isSignupSuccess" variant="success" show dismissible fade
        >Profile updated successfully. Please verify your email address by
        checking your inbox.</b-alert
      >
    </div>
    <!-- When User has 0 certificates -->
    <div v-if="certificatesCount > 0">
      <b-row class="smallCards">
        <b-col
          ><CardItem
            cardIcon="files"
            cardTitle="Certificates"
            iconColor="#8EC184"
            buttonIcon="arrow-right"
            btnLink="/certificates"
            ><h1>{{ certificatesCount }}</h1>
          </CardItem>
        </b-col>

        <b-col
          ><CardItem
            cardIcon="file-text"
            cardTitle="Drafts"
            iconColor="#E2CB2C"
            buttonIcon="arrow-right"
            btnLink="#"
            ><h1>4</h1>
          </CardItem>
        </b-col>
        <b-col
          ><CardItem
            cardIcon="file-earmark"
            cardTitle="Articles"
            iconColor="#F79755"
            buttonIcon="arrow-right"
            btnLink="/publications"
            ><h1>{{ publicationsCount }}</h1>
          </CardItem>
        </b-col>
      </b-row>
      <b-row id="smallCards">
        <b-col
          ><CardItem
            cardIcon="newspaper"
            cardTitle="News"
            iconColor="#9966FF"
            buttonIcon="arrow-right"
            btnLink="/news"
            ><h1>{{ newsCount }}</h1>
          </CardItem>
        </b-col>
        <b-col
          ><CardItem
            cardIcon="folder2-open"
            cardTitle="Documents"
            iconColor="#2880C3"
            buttonIcon="arrow-right"
            btnLink="/library"
            ><h1>5</h1>
          </CardItem>
        </b-col>
        <b-col>
          <CardItem
            cardIcon="check2-all"
            cardTitle="Matches"
            iconColor="#CC0000"
            btnLink="#"
            ><h3>Comming Soon</h3>
          </CardItem>
        </b-col>
      </b-row>
    </div>

    <div v-else>
      <img class="headerImg" src="../../assets/LandingPage/dummyHeader.png" />

      <div class="headerSection">
        <h1>Welcome Message</h1>
        <div class="headerButtons">
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
    </div>
  </div>
</template>
<script>
import { ActionButton } from "uicomponents";
import CardItem from "@/components/Shared/CardItem";

export default {
  name: "Dashboard",
  data() {
    return {
      isSignupSuccess: false,
      newsCount: 0,
      certificatesCount: 0,
      publicationsCount: 0,
      isSessionActive: true,
    };
  },
  components: {
    ActionButton,
    CardItem,
  },

  async mounted() {
    //this.isSessionActive = this.$store.getters["account/isSessionActive"];
    if (!this.isSessionActive) {
      this.$store.commit("global/toggleLoading", "on");
      await this.$store.dispatch("account/afterLogin");
      this.$store.commit("global/toggleLoading", "off");
    }
    this.isSignupSuccess = this.$store.getters["account/signupStatus"];
    this.certificatesCount = this.$store.getters[
      "certificate/getCertificatesCount"
    ];
    this.newsCount = this.$store.getters["news/getNewsCount"];
    this.publicationsCount = this.$store.getters[
      "publication/getPublicationsCount"
    ];
  },
};
</script>

<style scoped>
.dashBoard {
  font-family: "Montserrat", sans-serif;
  justify-content: center;
  margin-left: 500px;
}
.headerImg {
  max-height: auto;
  max-width: 1000px;
}
.headerSection {
  margin: 20px;
}
.headerButtons {
  display: flex;
  justify-content: center;
  column-gap: 20px;
  padding: 20px;
}
.smallCards {
  padding-bottom: 30px;
  padding-top: 30px;
}
.col {
  margin: 10px;
}
h1 {
  font-size: 60px;
  font-weight: bolder;
  text-align: center;
}
h3 {
  text-align: center;
  margin-top: 50px;
}
</style>
