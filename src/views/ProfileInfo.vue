<template>
  <div class="bcg">
    <div class="entry__wrapper">


      <form @submit.prevent="submitHandler" style="width: 700px">

        <div class="h1">ВАШ ПРОФИЛЬ</div>

        <div >
          <div
                  v-for="profile of profiles"
                  :key="profile.id"
          >

            <div class="input-field">
              <input v-model="profile.name" id="first_name" type="text" class="validate" required>
              <label for="first_name">Имя</label>
              <span class="helper-text" data-error="Укажите имя"></span>
            </div>

            <div class="input-field">
              <input v-model="profile.surname" id="last_name" type="text" class="validate" required>
              <label for="first_name">Фамилия</label>
              <span class="helper-text" data-error="Укажите фамилию"></span>
            </div>

            <label>Пол</label>
            <div class="range__input" style="margin: 15px 0 20px">
              <label>
                <input v-model="profile.gender" class="with-gap" name="group1" type="radio"/>
                <span>Я Телепузик</span>
              </label>
              <label>
                <input v-model="profile.gender" class="with-gap" name="group1" type="radio"  />
                <span>Женский</span>
              </label>
              <label>
                <input v-model="profile.gender" class="with-gap" name="group1" type="radio"  />
                <span>Мужской</span>
              </label>
            </div>

            <label>Возраст</label>
            <div class="range-field" style="margin: 40px 0px 8px;">
              <input v-model="profile.age" type="range" id="test5" min="0" max="100" class="active" />
              <span class="thumb active"
                    :style="{'left': + (6.84 * profile.age) + 'px'}"
                    style="height: 30px; width: 30px; top: -30px; margin-left: -7px;">
                <span class="value">{{profile.age}}</span>
              </span>
            </div>

            <label>Должность</label>
            <div class="range__input" style="margin-top: 15px">
              <label>
                <input v-model="profile.opinion" class="with-gap" name="group2" type="radio"  />
                <span>Пиченька</span>
              </label>
              <label>
                <input v-model="profile.opinion" class="with-gap" name="group2" type="radio"  />
                <span>Team Lead</span>
              </label>
              <label>
                <input v-model="profile.opinion" class="with-gap" name="group2" type="radio"  />
                <span>HR</span>
              </label>
            </div>


            <div class="input-field" style="margin-top: 30px">
              <input v-model="profile.company" id="company" type="text" class="validate" required>
              <label for="first_name">Компания</label>
              <span class="helper-text" data-error="Укажите компанию"></span>
            </div>

            <button style=" border-radius: 5px; width: 100px"
                    class="btn waves-effect" type="submit"
            >
              Update
            </button>

          </div>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileInfo",
    data: () => ({
      description: '',
    }),
    mounted() {
      setTimeout(() => {
        M.updateTextFields()
      }, 0)
    },
    computed: {
      profiles() {
        return this.$store.getters.profiles
      },
    },
  }
</script>

<style lang="sass" scoped>
  .bcg
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    background: linear-gradient(-135deg, #c850c0, #4158d0)
    width: 100%
    min-height: calc(100vh - 64px)


  .entry__wrapper
    width: 760px
    background: #fff
    border-radius: 10px
    overflow: hidden
    padding: 30px
    display: flex
    justify-content: space-between
    align-items: flex-start

  .h1
    font-size: 2.5rem
    font-weight: normal
    color: #444
    text-align: center
    margin: 1rem 0 3rem
    line-height: 110%

  .range__input
    display: flex
    align-items: center

    label
      flex-basis: 34%

</style>
