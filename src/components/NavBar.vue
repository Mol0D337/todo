<template>

  <nav class="teal darken-3">
    <div class="nav-wrapper">
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
                exact
                style="width: 100px;text-align: center"
        >
          <a href="#">list</a>
        </router-link>
        <router-link
                tag="li"
                to="/quotes"
                exact
                style="width: 100px;text-align: center"
        >
          <a href="#">quotes</a>
        </router-link>
      </ul>

      <router-link
              to="/"
              class="brand-logo center"
      >
        MOLOD
      </router-link>

      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link
                tag="li"
                to="/entry"
                exact
                style="width: 130px;text-align: center"
        >
          <a href="#">entry</a>
        </router-link>
        <router-link
                tag="li"
                to="/registration"
                exact
                style="width: 130px;text-align: center"
        >
          <a href="#">Registration</a>
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

  a
    text-transform: uppercase

</style>
