<template>
  <div id="app">
    <NavBar/>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="sass">
  @import "~materialize-css/dist/css/materialize.min.css"
</style>
<script>
  import NavBar from "./components/NavBar";
  export default {
    components: {NavBar}
  }
</script>
