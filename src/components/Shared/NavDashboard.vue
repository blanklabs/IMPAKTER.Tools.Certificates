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
            <router-link to="/news">NEWS</router-link>
          </b-nav-item>

          <b-nav-item class="profile">
            <b-icon icon="person-circle" style="color: #ea5456"></b-icon>
            <div class="profile-content">
              <b-dropdown-item>
                <router-link to="/profile/">View Profile</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link to="/profile/edit">Edit Profile</router-link>
              </b-dropdown-item>
              <b-dropdown-item href="https://index.impakter.com" target="_blank"
                >Index</b-dropdown-item
              >
              <b-dropdown-item href="https://eco.impakter.com/" target="_blank"
                >Marketplace</b-dropdown-item
              >
              <hr />
              <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavDashboard",
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
#nav {
  font-family: "Montserrat";
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
  padding-bottom: 10px;
  border-bottom-style: solid;
  border-bottom-color: #fe6663;
}
button {
  margin-left: 10px;
}
#logo {
  width: 190px;
}
.profile {
  position: relative;
}
.profile-content {
  display: none;
  position: absolute;
  min-width: 160px;
  margin-top: 10px;
  background: white;
  right: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.profile-content input {
  border: none;

  padding: 12px 16px;
  width: 250px;
  text-decoration: none;
  display: inline-block;
}

.profile:hover .profile-content {
  display: block;
}
</style>