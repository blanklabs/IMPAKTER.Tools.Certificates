<template>
  <div class="profileMain">
    <h1 class="sectionTitle">
      Profile |
      <router-link to="/org/edit">
        <b-icon icon="pencil"></b-icon>
      </router-link>
    </h1>
    <hr />
    <b-row>
      <b-col class="columnLeft">
        <div class="sectionDiv">
          <img class="image" :src="org.logoUrl" />
          <h1>{{ org.organization.name }}</h1>
        </div>

        <div class="sectionDiv">
          <h2>INDUSTRY CATEGORY</h2>
          <p>MultiIndustry</p>
        </div>

        <div class="sectionDiv">
          <h2>TARGET AUDIENCE</h2>
          <p>B2B</p>
        </div>

        <div class="sectionDiv">
          <h2>APPLIES TO</h2>
          <p>Multiproduct</p>
        </div>

        <div class="sectionDiv">
          <h2>KEY SDGs</h2>
          <p>{{ org.orgSustainability.sdgs }}</p>
        </div>
        <div class="sectionDiv">
          <h2>PHONE</h2>
          <p>{{ org.orgCommunication.phone }}</p>
        </div>
        <div class="sectionDiv">
          <h2>EMAIL</h2>
          <p>{{ org.orgCommunication.email }}</p>
        </div>
        <div class="sectionDiv">
          <h2>WEBSITE</h2>
          <p>
            <b-icon icon="box-arrow-up-right"></b-icon
            ><a :href="org.url" target="_blank">{{ org.organization.url }}</a>
          </p>
        </div>
        <div class="sectionDiv">
          <h2>SOCIAL MEDIA</h2>
          <p>
            Facebook: <b-icon icon="box-arrow-up-right"></b-icon
            ><a :href="org.orgCommunication.facebookUrl" target="_blank">{{
              org.orgCommunication.facebookUrl
            }}</a>
          </p>
          <p>
            Twitter: <b-icon icon="box-arrow-up-right"></b-icon
            ><a :href="org.orgCommunication.twitterUrl" target="_blank">{{
              org.orgCommunication.twitterUrl
            }}</a>
          </p>
          <p>
            Instagram: <b-icon icon="box-arrow-up-right"></b-icon
            ><a :href="org.orgCommunication.instagramUrl" target="_blank">{{
              org.orgCommunication.instagramUrl
            }}</a>
          </p>
        </div>
      </b-col>

      <b-col class="columnRight">
        <div class="sectionDiv">
          <h2>DESCRIPTION</h2>
          <p>{{ org.organization.description }}</p>
        </div>

        <div class="sectionDiv">
          <h2>CERTIFICATE LIST</h2>
          <p>- Aquaculture Stewardship Council</p>
          <p>- B Corporation</p>
          <p>- CARES Sustainability Schemes</p>
          <p>- Content Claim Standard</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "OrgProfile",
  data() {
    return {
      org: {},
    };
  },

  async mounted() {
    this.org = await this.$store.dispatch("org/fetchOrg");
  },
};
</script>
<style scoped>
* {
  text-align: left;
}

.head {
  font-size: 34px;
}
h2 {
  font-size: 20px;
  font-weight: 600;
}
.image {
  margin-bottom: 10px;
}

.profileMain {
  width: 85%;
  min-height: 50vh;
}
.sectionDiv {
  margin: 30px 0 30px 0;
  padding: 5px 0 5px 0;
}
hr {
  margin-top: 0;
  padding-top: 0;
  height: 3px;
  background-color: #ebebeb;
  border: none;
}

.addBtn {
  margin-top: -50px;
  float: right;
}
</style>

