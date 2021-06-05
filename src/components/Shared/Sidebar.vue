<template>
  <div class="sidenav">
    <b-nav vertical>
      <div class="p-4">
        <img class="image" :src="org.organization.logoUrl" />
        <h5>{{ org.organization.name }}</h5>
      </div>

      <b-nav-item
        @click="tab = 'dashboard'"
        :class="{ active: tab === 'dashboard' }"
      >
        <router-link to="/dashboard">Dashboard</router-link>
      </b-nav-item>
      <b-nav-item
        @click="tab = 'certificates'"
        :class="{ active: tab === 'certificates' }"
      >
        <router-link to="/certificates"
          >My Certificates</router-link
        ></b-nav-item
      >
      <b-nav-item @click="tab = 'news'" :class="{ active: tab === 'news' }">
        <router-link to="/news">News</router-link>
      </b-nav-item>
      <b-nav-item
        @click="tab = 'publications'"
        :class="{ active: tab === 'publications' }"
      >
        <router-link to="/publications">Publications</router-link>
      </b-nav-item>
      <b-nav-item
        @click="tab = 'matches'"
        :class="{ active: tab === 'matches' }"
      >
        <router-link to="/matches">Matches</router-link>
      </b-nav-item>
      <b-nav-item
        @click="tab = 'library'"
        :class="{ active: tab === 'library' }"
      >
        <router-link to="/library">Library</router-link>
      </b-nav-item>

      <div class="bottomSection">
        <hr />
        <b-nav-item @click="tab = 'faq'" :class="{ active: tab === 'faq' }">
          <router-link to="/FAQ">FAQ</router-link>
        </b-nav-item>
        <b-nav-item
          @click="tab = 'contact'"
          :class="{ active: tab === 'contact' }"
        >
          <router-link to="/contact">Contact Us</router-link>
        </b-nav-item>
      </div>
    </b-nav>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      tab: "",
      org: {},
    };
  },
  mounted() {
    this.org = this.$store.getters["org/organization"];
  },
};
</script>

<style scoped>
.sidenav {
  font-family: "Montserrat";
  min-height: 100vh;
  width: 230px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #f8f8f8;
  overflow-x: hidden;
  padding-top: 60px;
  text-align: left;
}
.image {
  margin: 0;
  padding: 10px;
  max-height: 150px;
  max-height: 150px;
  border-radius: 10%;
}
h5 {
  padding-top: 15px;
  font-size: 18px;
  font-weight: bolder;
}
.sidenav a {
  text-decoration: none;
  font-size: 18px;
  color: #1d2029;
  display: block;
}
.nav-item {
  padding: 10px;
  border-left: 5px solid transparent;
}
.nav-item:hover {
  border-left: 5px solid #fe6663;
}

.active {
  border-left: 5px solid #fe6663;
}
.bottomSection {
  margin-top: 50%;
  font-size: 10px;
}
</style>