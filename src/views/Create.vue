<template>
  <div class="row bcg" style="margin-bottom: 0">
    <div class="col s6 offset-s3 create">
      <div class="create__top">
        <div class="create__text">CREATE TASK</div>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input id="title" v-model="title" type="text" class="validate" required>
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
        </div>

        <div class="chips" ref="chips"></div>

        <div class="input-field">
          <textarea maxlength="120" v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Description</label>
          <div class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/120</div>
        </div>

        <input type="text" ref="datepicker">

        <button class="btn" type="submit">Create task</button>
      </form>

    </div>



  </div>
</template>

<script>
  export default {
    name: 'create',
    data: () => ({
      description: '',
      title: '',
      chips: null,
      date: null,
    }),
    mounted() {
      this.chips = M.Chips.init(this.$refs.chips, {
        placeholder: 'Task tags'
      });
      this.date = M.Datepicker.init(this.$refs.datepicker, {
        format: 'dd.mm.yyyy',
        defaultDate: new Date(),
        setDefaultDate: true
      })
    },
    methods: {
      submitHandler() {
        const task = {
          title: this.title,
          description: this.description,
          id: Date.now(),
          status: 'active',
          tags: this.chips.chipsData,
          date: this.date.date
        };
        this.$store.dispatch('createTask', task);
        this.$router.push('/list')
      }
    },
    destroyed() {
      if (this.date && this.date.destroy) {
        this.date.destroy()
      }
      if (this.chips && this.chips.destroy) {
        this.chips.destroy()
      }
    }
  }
</script>

<style scoped lang="sass">
  .bcg
    background: #ebeeef
    width: 100%
    min-height: calc(100vh - 64px)

  .create
    margin-top: 150px
    padding: 30px
    background: white
    border-radius: 20px

    &__top
      padding: 0
      margin: 0
      height: 100px
      background: url("../assets/image/bcg-main-page.png") no-repeat center center
      background-size: cover

</style>
