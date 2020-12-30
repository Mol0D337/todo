<template>

  <nav class="blue darken-3">
    <div class="nav-wrapper">
      <router-link
              to="/"
              class="brand-logo center"
      >
        MOLOD
      </router-link>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <router-link
                tag="li"
                to="/create"
                exact
                style="width: 100px;text-align: center"
        >
          <a href="#">Create</a>
        </router-link>
        <router-link
                tag="li"
                to="/list"
                style="width: 100px;text-align: center"
        >
          <a href="#">List</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {}
</script>

<style lang="sass" scoped>
  nav
    padding: 0 2rem

</style>
