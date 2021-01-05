<template>
  <div class="row bcg">
    <div class="col s6 offset-s3">
      <h1>PROFILE INFO</h1>

      <form @submit.prevent="submitHandler">

        <div >
          <div
                  v-for="profile of profiles"
                  :key="profile.id"
          >
            <div
                  v-for="user of users"
                 :key="user.id"
            >
              {{user.email}}
            </div>
            <div class="input-field">
              <input v-model="profile.name" id="first_name" type="text" class="validate">
              <label for="first_name">First Name</label>
            </div>
            <h1>{{profile.name}}</h1>
            <h1>{{profile.surname}}</h1>
            <h1>{{profile.gender}}</h1>
            <h1>{{profile.age}}</h1>
            <h1>{{profile.opinion}}</h1>
            <h1>{{profile.company}}</h1>

          </div>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileInfo",
    computed: {
      profiles() {
        return this.$store.getters.profiles
      },
      users() {
        return this.$store.getters.users
      },
    },
  }
</script>

<style lang="sass" scoped>
  .bcg
    background: #f4f9f3
    width: 100%
    min-height: calc(100vh - 64px)


</style>
