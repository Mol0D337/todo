<template>
  <div>
    <component :is="currentComponent"/>
  </div>
</template>

<script>
  import Login from "./Login";
  import Profile from "./Profile";
  import ProfileInfo from "./ProfileInfo";
  export default {
    name: "ProfileAllModuls",
    components: {ProfileInfo, Profile, Login},

    computed: {
      currentComponent () {
        const userAuth = localStorage.getItem('userAuth');
        const userProfile = localStorage.getItem('userProfile');
        if (userAuth !== "yes" || userAuth === "no" && userProfile !== "yes" || userProfile === "no") return Login;
        if (userAuth === "yes" && userProfile === "yes") return ProfileInfo;
        else return Profile;
      }
    }
  }
</script>

<style scoped>

</style>
