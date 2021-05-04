<template>
  <div>
    <Sidebar />
    <div>
      <b-alert v-if="isSignupSuccess" variant="success" show dismissible fade
        >Profile updated successfully. Please verify your email address by
        checking your inbox.</b-alert
      >
      <p>Main</p>
    </div>
  </div>
</template>
<script>
import Sidebar from "../Shared/Sidebar";
export default {
  name: "Footer",
  data() {
    return {
      isSignupSuccess: false,
    };
  },
  components: {
    Sidebar,
  },
  mounted() {
    this.isSignupSuccess = this.$store.getters["user/signupStatus"];
  },
};
</script>

<style scoped>
</style>
