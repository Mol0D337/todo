<template>
  <div>
    <Login v-if="loginPage"/>
    <Profile v-if="profilePage"/>
    <ProfileInfo v-if="profileInfoPage"/>
  </div>
</template>

<script>
  import Login from "./Login";
  import Profile from "./Profile";
  import ProfileInfo from "./ProfileInfo";
  export default {
    name: "ProfileAllModuls",
    components: {ProfileInfo, Profile, Login},
    data() {
      return {
        loginPage: false,
        profilePage: false,
        profileInfoPage: false
      }
    },
    created() {
      const userAuth = localStorage.getItem('userAuth');
      const userProfile = localStorage.getItem('userProfile');
      if (userAuth !== "yes" || userAuth === "no" && userProfile !== "yes" || userProfile === "no") {
        this.loginPage = true;
        this.profilePage = false;
        this.profileInfoPage = false;
      }
      if (userAuth === "yes") {
        this.loginPage = false;
        this.profilePage = true;
        this.profileInfoPage = false;
      }
      if (userProfile === "yes") {
        this.loginPage = false;
        this.profilePage = false;
        this.profileInfoPage = true;
      }
    }
  }
</script>

<style scoped>

</style>
