<template>
  <div id=app>
    <Sidebar v-if="isInside" />
    <b-container class="page-wrap">
      <b-row v-if="loggedIn">
        <NavDashboard />
        <Sidebar />
        <!--<dash-board-tab-nav :tabs="tabs" :selected="'Home'" />-->
      </b-row>
      <b-row v-else>
        <NavigationBar />
      </b-row>
      <b-row>
        <b-container id="router_view_container">
          <router-view />
        </b-container>
      </b-row>
     
    </b-container>
      <footer class="site-footer">
      <p>2021 Copyright © ImpakterLimited</p>
    </footer>
 
  </div>
  
</template>

<script>
import NavigationBar from "./components/Shared/NavigationBar";
//import DashBoardTabNav from "./components/Shared/DashBoardTabNav.vue";
import Sidebar from "./components/Shared/Sidebar";
import NavDashboard from "./components/Shared/NavDashboard";
import { messageService } from "./messageService";

export default {
  data() {
    return {
      isInside: false,
      messages: [],
      tabs: ["Home", "Hello"],
    };
  },
  computed: {
    loggedIn: function () {
      return this.$store.state.IsloggedIn;
    },
  },
  mounted() {
    this.isInside = this.$store.getters["user/isLoggedin"];
    this.$root.$on("myEvent", () => {
      // here you need to use the arrow function
      this.loggedIn = true;
    });
  },
  methods: {},
  components: {
    NavigationBar, 
    Sidebar, 
    NavDashboard,
    },
  created() {
    document.title = "Impakter - Certificates";
    this.subscription = messageService.getMessage().subscribe((message) => {
      if (message) {
        // add message to local state if not empty
        this.isInside = !this.isInside;
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  },
  beforeDestroy() {
    this.subscription.unsubscribe();
  },
};
</script>

<style lang="scss">
@import "assets/custom_vars.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";

// html, body {
//   height: 100%;
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #010101;
}
.page-wrap {
  /* equal to footer height */
  margin-bottom: 100%; 
}
.page-wrap:after {
  content: "";
  display: block;
}

.site-footer {
  padding-top: 15px;
  justify-content: center;
  text-align: center;
  height: 50px; background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}


button {
  margin-left: 10px;
}

#logo {
  width: 190px;
}

#refresh {
  color: rgb(79, 167, 162);
}

.main_row {
  margin-top: 0px;
}

.buttons_row {
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
}

.buttons_row * {
  margin-right: 10px;
  margin-left: 10px;
}

.flex_and_start {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left !important;
}

#checkbox-group-1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left !important;
}

#input-group-1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left !important;
}

#input-group-2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left !important;
}

#spacer {
  background-color: white;
  position: fixed;
  z-index: 90;
  padding: 50px;
  width: 100%;
}

#router_view_container {
  margin-top: 100px;
  margin-left: 100px;
}

.pagination {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>