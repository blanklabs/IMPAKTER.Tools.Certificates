<template>
  <div>
    <b-navbar toggleable="lg" type="light" fixed="top" id="nav">
      <b-navbar-brand href="https://index.impakter.com">
        <img id="logo" src="@/assets/logo_index.png" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            ><router-link to="/dashboard"> <span>HOME</span></router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="#">ABOUT US</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="#"> HOW IT WORKS</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="#">CONTACT US</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/signin">
              <span v-if="loggedIn" @click="logout">SIGN-OUT</span>
              <span v-if="!loggedIn" @click="login">SIGN-IN</span>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="#">INDEX</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="#">MARKETPLACE</router-link>
          </b-nav-item>
          <!--<b-nav-item>
              <b-icon  icon="search" style="color: #EA5456"></b-icon>
              </b-nav-item>-->

          <!-- <b-nav-item-dropdown right>
      
          <template #button-content>
            <b-icon  icon="search" style="color: #EA5456"></b-icon>
          </template>
        <b-dropdown-item href="#"> <b-nav-form>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search">
                  </b-form-input>
                <b-button type="submit"><b-icon  icon="search" style="color: #EA5456"></b-icon></b-button>
              </b-nav-form>
              </b-dropdown-item>
        </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { messageService } from "../../messageService";

export default {
  name: "NavigationBar",
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    logout() {
      this.loggedIn = false;
      this.$store.dispatch("user/signOut");
      this.$router.push("/signin");
    },
    login() {
      this.$router.push("/signin");
    },
  },
  mounted() {
    this.loggedIn = this.$store.getters["user/isLoggedin"];
  },
  created() {
    document.title = "Impakter - Certificates";
    this.subscription = messageService.getMessage().subscribe((message) => {
      if (message) {
        // add message to local state if not empty
        this.loggedIn = !this.loggedIn;
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
<style scoped>
#nav {
  font-family: Montserrat;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
#nav a {
  font-weight: bold;
  font-size: 14px;
  color: #222222;
  text-decoration: none;
}
.nav-item {
  padding-left: 8px;
  padding-right: 8px;
}
.nav-item:hover {
  border-bottom-style: solid;
  border-bottom-color: #fe6663;
}
a.router-link-exact-active {
  border-bottom-style: solid;
  border-bottom-color: #fe6663;
}
button {
  margin-left: 10px;
}
#logo {
  width: 190px;
}
</style>