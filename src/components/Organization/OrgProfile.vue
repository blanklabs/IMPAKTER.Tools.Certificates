<template>
  <div class="profileMain">
    <p>
      <span
        ><b class="head">Profile</b
        ><router-link to="/org/edit">- edit</router-link></span
      >
    </p>

    <hr />
    <b-row>
      <b-col class="columnLeft">
        <div class="sectionDiv">
          <img class="image" :src="org.logo" />
          <h1>{{ org.name }}</h1>
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
          <p>{{ org.keySDGs }}</p>
        </div>
        <div class="sectionDiv">
          <h2>PHONE</h2>
          <p>{{ org.phone }}</p>
        </div>
        <div class="sectionDiv">
          <h2>EMAIL</h2>
          <p>{{ org.email }}</p>
        </div>
        <div class="sectionDiv">
          <h2>WEBSITE</h2>
          <p>
            <b-icon icon="box-arrow-up-right"></b-icon
            ><a :href="org.url" target="_blank">{{ org.url }}</a>
          </p>
        </div>
        <div class="sectionDiv">
          <h2>SOCIAL MEDIA</h2>
          <p>
            Facebook: <b-icon icon="box-arrow-up-right"></b-icon
            ><a :href="org.facebookUrl" target="_blank">{{
              org.facebookUrl
            }}</a>
          </p>
          <p>
            Twitter: <b-icon icon="box-arrow-up-right"></b-icon
            ><a :href="org.twitterUrl" target="_blank">{{ org.twitterUrl }}</a>
          </p>
          <p>
            Instagram: <b-icon icon="box-arrow-up-right"></b-icon
            ><a :href="org.instagramUrl" target="_blank">{{
              org.instagramUrl
            }}</a>
          </p>
        </div>
      </b-col>

      <b-col class="columnRight">
        <div class="sectionDiv">
          <h2>Description</h2>
          <p>{{ org.description }}</p>
        </div>

        <div class="sectionDiv">
          <h2>Certificate List</h2>
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
}
.image {
  margin-bottom: 10px;
}
#router_view_container {
  margin-top: 0px;
  margin-left: 0px;
}
.profileMain {
  width: 100%;
  margin: 0 0 250px 400px;
}
.sectionDiv {
  margin-top: 20px;
  margin-bottom: 20px;
}
hr {
  margin-top: 0;
  padding-top: 0;
  height: 3px;
  background-color: #ebebeb;
  border: none;
}
</style>

