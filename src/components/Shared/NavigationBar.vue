<template>
  <div>
    <b-navbar class="nav" toggleable="lg" type="light" fixed="top" >
      <b-navbar-brand href="https://index.impakter.com">
        <img class="logo" src="@/assets/logo_index.png" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            ><router-link to="/"> <span>HOME</span></router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about">ABOUT US</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="#"> HOW IT WORKS</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/contact">CONTACT US</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/signin">
              <span disabled="!loggedIn" v-if="loggedIn" @click="logout"
                >SIGN-OUT</span
              >
              <span v-if="!loggedIn" @click="login">SIGN-IN</span>
            </router-link>
          </b-nav-item>
          <b-nav-item href="https://index.impakter.com" target="_blank">
            INDEX
          </b-nav-item>
          <b-nav-item href="https://eco.impakter.com/" target="_blank">
            MARKETPLACE
          </b-nav-item>
          <b-nav-item class="search">
            <b-icon icon="search" style="color: #ea5456"></b-icon>
            <div class="search-content">
              <b-nav-form>
                <input type="text" placeholder="Search..." />
              </b-nav-form>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    async logout() {
      this.loggedIn = false;
      await this.$store.dispatch("user/signOut");
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
    this.subscription = this.$store.getters["user/logInEvent"].subscribe(
      (message) => {
        if (message) {
          // add message to local state if not empty
          this.loggedIn = !this.loggedIn;
        } else {
          // clear messages when empty message received
          this.messages = [];
        }
      }
    );
  },
  beforeDestroy() {
    this.subscription.unsubscribe();
  },
};
</script>
<style scoped>
.nav {
  font-family: Montserrat;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
.nav a {
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

.router-link-exact-active {
  padding-bottom: 10px;
  border-bottom-style: solid;
  border-bottom-color: #fe6663;
}

.logo {
  width: 190px;
}
.search {
  position: relative;
}
.search-content {
  display: none;
  position: absolute;
  min-width: 160px;
  right: 0;
  background: none;
}

.search-content input {
  border: none;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  margin-top: 20px;
  width: 250px;
  text-decoration: none;
  display: inline-block;
}
.search-content a:hover {
  background-color: #ddd;
}

.search:hover .search-content {
  display: block;
}
</style>