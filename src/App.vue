<template>
  <div id="app">
   
    <b-container>
      <b-row v-if="loggedIn">
        <DashBoardNav/>
        <Sidebar />
        <!--<dash-board-tab-nav :tabs="tabs" :selected="'Home'" />-->
      </b-row>
      <b-row v-else>
       
        <NavigationBar />
        <!--<dash-board-tab-nav :tabs="tabs" :selected="'Home'" />-->
      </b-row>
      <!-- <b-row>
        <div id="spacer"></div>
      </b-row> -->
      <b-row>
        <b-container id="router_view_container">
          <router-view />
        </b-container>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavigationBar from "./components/Shared/NavigationBar";
//import DashBoardTabNav from "./components/Shared/DashBoardTabNav.vue";
import Sidebar from "./components/Shared/Sidebar";
import DashBoardNav from "./components/Shared/DashBoardNav";
import { messageService } from "./messageService";

export default {
  data() {
    return {
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
    this.$root.$on("myEvent", () => {
      // here you need to use the arrow function
      this.loggedIn = true;
    });
  },
  methods: {},
  components: { NavigationBar, Sidebar, DashBoardNav },
  created() {
    document.title = "Impakter - Certificates";
    this.subscription = messageService.getMessage().subscribe((message) => {
      if (message) {
        // add message to local state if not empty
        this.messages.push(message);
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #010101;
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