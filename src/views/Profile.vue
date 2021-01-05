<template>
  <div class="waveWrapper waveAnimation">

    <div class="bck">
      <ConversationalForm @submit="submit" class="position">
        <fieldset>
          <label for="email" >Привет! Как ваше имя?</label>
          <input pattern="^[a-zA-ZА-Яа-я]+$"
                 data-invalid="Введите коректное имя."
                 data-question="Привет! Как ваше имя? "
                 type="text"
                 name="email"
                 id="name">
        </fieldset>
        <fieldset>
          <label for="surname">{email}, Как ваша фамилия?</label>
          <input required
                 pattern="^[a-zA-ZА-Яа-я]+$"
                 data-invalid="Введите коректную фамилию."
                 data-question="{email}, Как ваша фамилия? "
                 type="text" name="surname" id="surname">
        </fieldset>
        <fieldset>
          <label for="name">Пол</label><br />
          <input type="radio" data-question="{email} {surname}, Какого вы пола?" name="gender" value="male" data-text="Мужского" /> Мужского<br>
          <input type="radio" name="gender" value="female" data-text="Женского" /> Женского<br>
          <input type="radio" name="gender" value="other" data-text="Я Телепузик" /> Я Телепузик
        </fieldset>

        <fieldset>
          <label for="age">{email} {surname}, Какой у вас возраст?</label>
          <input required
                 pattern="[0-9]{2}"
                 data-invalid="Введите коректный возраст."
                 data-question="{email} {surname}, Какой у вас возраст? "
                 type="number" name="age" id="age">
        </fieldset>

        <fieldset>
          <label for="opinion">{email} {surname}, Какая у вас профессия?</label>
          <select data-question="{email} {surname}, Какая у вас профессия?" name="opinion" id="opinion">
            <option></option>
            <option>HR</option>
            <option>Team Lead</option>
            <option>Пиченька</option>
          </select>
        </fieldset>
        <fieldset>
          <label for="company">Company</label>
          <input data-question="{opinion}, отлично! В какой компанией вы работаете?" type="text" name="company" id="company">
        </fieldset>
        <fieldset>
          <label >{email} {surname}, Вы готовы отправить форму?</label>
          <button data-question="{email} {surname}, Вы готовы отправить форму?" data-success="Отправлено! Ура! 😄" name="submit" type="submit" data-cancel="Нет">Да</button>
        </fieldset>
        <fieldset>
          <label >Хотите начать все сначала?</label>
          <button data-question="Хотите начать все сначала?" name="reset" type="reset" data-cancel="Нет">Да</button>
        </fieldset>
      </ConversationalForm>
    </div>

    <div class="waveWrapperInner bgTop">
      <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
    </div>
    <div class="waveWrapperInner bgMiddle">
      <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
    </div>
    <div class="waveWrapperInner bgBottom">
      <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
    </div>
  </div>

</template>

<script>
  import ConversationalForm from 'vue-conversational-form'
  export default {
    name: "Profile",
    components: {
      ConversationalForm
    },
    methods: {
      submit (profile) {
        localStorage.setItem('userProfile', 'yes');
        this.$store.dispatch('createProfile', profile);
        setTimeout(function(){
          location.reload()
        }, 1800);
        this.$router.push('/profile');
      }
    }
  }
</script>

<style scoped lang="sass">
  .bck
    z-index: 50
    width: 100vw
    height: calc(100vh - 64px)
    margin-top: 50px
    display: flex
    align-items: center
    justify-content: center
    position: absolute

  .position
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)

</style>
