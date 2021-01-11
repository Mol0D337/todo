<template>

  <nav class="transparent" style="z-index: 99; position: absolute">
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <router-link
                tag="li"
                to="/create"
                exact
                style="width: 100px;text-align: center"
        >
          <a href="#">{{$t('create.create')}}</a>
        </router-link>
        <router-link
                tag="li"
                to="/lol"
                exact
                style="width: 100px;text-align: center"
        >
          <a href="#">{{$t('create.list')}}</a>
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
                to="/shop"
                exact
                style="width: 100px;text-align: center"
        >
          <a href="#">{{$t('create.shop')}}</a>
        </router-link>
        <router-link
                tag="li"
                to="/profile"
                exact
                style="width: 100px;text-align: center"
        >
          <a href="#">{{$t('create.profile')}}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavBar",
  }
</script>

<style lang="sass" scoped>
  nav
    padding: 0 2rem

  a
    text-transform: uppercase

</style>
