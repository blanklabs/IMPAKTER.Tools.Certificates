<template>
 <div >
    <b-navbar toggleable="lg" type="dark" fixed="top" id="nav">
      <b-navbar-brand href="https://index.impakter.com">
        <img id="logo" src="@/assets/logo_index.png"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
         <b-navbar-nav class="ml-auto">
            <b-nav-item ><router-link to="/home">
                  <span>HOME</span></router-link>
              </b-nav-item>
              <b-nav-item>
                  <router-link to="#">ABOUT US</router-link>
              </b-nav-item>
              <b-nav-item href="#">
                  <router-link to="#"> HOW IT WORKS</router-link>
              </b-nav-item>
              <b-nav-item href="#">
                  <router-link to="#">CONTANCT US</router-link>
              </b-nav-item>
              <b-nav-item>
                  <span v-if="loggedIn" @click="logout">SIGN-OUT</span>
                  <span v-if="!loggedIn" @click="login">SIGN-IN</span>
              </b-nav-item> 
              <b-nav-item> | </b-nav-item> 
               <b-nav-item href="#">
                  <router-link to="#">INDEX</router-link>
              </b-nav-item>
                 <b-nav-item href="#">
                  <router-link to="#">MARKETPLACE</router-link>
              </b-nav-item>
             
                <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
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
        </b-nav-item-dropdown>

      
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div> 


</template>

<script>
export default {
  name: "NavLanding",
};
</script>
<style scoped>
#nav{
  font-family: Montserrat;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
}
</style>