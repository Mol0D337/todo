<template>
  <div class="bck">
    <ConversationalForm @submit="submit" class="position">
      <fieldset>
        <label for="name">Привет! Как ваше имя?</label>
        <input required data-question="Привет! Как ваше имя? " type="text" name="name" id="name">
      </fieldset>
      <fieldset>
        <label for="surname">{name}, Как ваша фамилия?</label>
        <input required data-question="{name}, Как ваша фамилия? " type="text" name="surname" id="surname">
      </fieldset>
      <fieldset>
        <label for="name">Пол</label><br />
        <input type="radio" data-question="{name}, Какого вы пола?" name="gender" value="male" data-text="Мужского" /> Мужского<br>
        <input type="radio" name="gender" value="female" data-text="Женского" /> Женского<br>
        <input type="radio" name="gender" value="other" data-text="Я Телепузик" /> Я Телепузик
      </fieldset>
      <fieldset>
        <label for="age">{name}, Какой у вас возраст?</label>
        <input data-question="{name}, Какой у вас возраст? " type="number" name="age" id="age">
      </fieldset>
      <fieldset>
        <label for="opinion">{name}, Какая у вас профессия?</label>
        <select data-question="{name}, Какая у вас профессия?" name="opinion" id="opinion">
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
        <label >{name}, Вы готовы отправить форму?</label>
        <button data-question="{name}, Вы готовы отправить форму?" data-success="Отправлено! Ура! 😄" name="submit" type="submit" data-cancel="Нет">Да</button>
      </fieldset>
      <fieldset>
        <label >Хотите начать все сначала?</label>
        <button data-question="Хотите начать все сначала?" name="reset" type="reset" data-cancel="Нет">Да</button>
      </fieldset>
    </ConversationalForm>
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
        console.log(profile);
        this.$store.dispatch('createProfile', profile);
        this.$router.push('/profile/info');
      }
    }
  }
</script>

<style scoped lang="sass">
  .bck
    width: 100%
    min-height: calc(100vh - 64px)
    background: linear-gradient(-135deg, #c850c0, #4158d0)

  .position
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)

</style>
