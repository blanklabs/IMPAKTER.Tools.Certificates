<template>
  <div id="app">
    <!--<Sidebar v-if="isInside" />-->
    <rise-loader :loading="loading" :color="color" :size="size"></rise-loader>

    <b-container class="page-wrap">
      <b-row v-if="isLoggedIn">
        <NavDashboard />
        <Sidebar />
        <!--<dash-board-tab-nav :tabs="tabs" :selected="'Home'" />-->
      </b-row>
      <b-row v-else>
        <NavigationBar />
      </b-row>
      <b-row>
        <b-container>
          <b-alert
            v-if="showMessage"
            :variant="messageType"
            show
            dismissible
            fade
            >{{ message }}</b-alert
          >
        </b-container>
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

//import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import RiseLoader from "vue-spinner/src/RiseLoader.vue";

export default {
  data() {
    return {
      isLoggedIn: false,
      messages: [],
      tabs: ["Home", "Hello"],
      loading: false,
      showMessage: false,
      messageType: "success",
      message: "hello there",
    };
  },
  methods: {},
  components: {
    NavigationBar,
    Sidebar,
    NavDashboard,
    RiseLoader,
  },
  async mounted() {
    this.isLoggedIn = await this.$store.dispatch("user/checkLoginStatus");
  },
  created() {
    document.title = "Impakter - Certificates";
    this.logInEventSubscription = this.$store.getters[
      "user/logInEvent"
    ].subscribe((message) => {
      console.log("message from subscription on App.vue:", message);
      if (message == "loggedIn") {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.networkEventSubscription = this.$store.getters[
      "global/networkEvent"
    ].subscribe((payload) => {
      console.log(
        "message from network subscription on App.vue:",
        payload.message
      );
      if (payload.type == 0) {
        this.$alert("Network failure: Please contact Administrator");
      } else {
        this.$alert(payload.message);
      }
    });

    this.loadingEventSubscription = this.$store.getters[
      "global/loadingEvent"
    ].subscribe((payload) => {
      if (payload == "on") {
        this.loading = true;
      } else {
        this.loading = false;
      }
    });
  },
  beforeDestroy() {
    this.logInEventSubscription.unsubscribe();
    this.networkEventSubscription.unsubscribe();
    this.loadingEventSubscription.unsubscribe();
  },
};
</script>

<style lang="scss">
@import "assets/custom-vars.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";

* {
  font-family: "Montserrat";
}
#app {
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
  height: 50px;
  background: white;
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

#router_view_container {
  margin-top: 60px;
  margin-left: 20px;
}

.pagination {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>