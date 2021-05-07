<template>
  <div class="sidenav">
    <b-nav vertical>
      <div class="p-4">
        <img id="image" src="../../assets/dummy-profile-pic.png" />
        <h5>Company Name</h5>
      </div>
      <b-nav-item>
        <router-link to="/certificates"
          >My Certificates</router-link
        ></b-nav-item
      >
      <b-nav-item> <router-link to="/news">News</router-link></b-nav-item>
      <b-nav-item href="#">Publications</b-nav-item>
      <b-nav-item href="#">Matches</b-nav-item>
      <b-nav-item href="#">Library</b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidenav {
  font-family: "Montserrat";
  height: 100%;
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
#image {
  margin: 0;
  max-height: 150px;
  max-height: 150px;
  border-radius: 50%;
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
}
.nav-item:hover {
  border-left: 5px solid #fe6663;
}
.nav-item:active {
  border-left: 5px solid #fe6663;
}
</style>