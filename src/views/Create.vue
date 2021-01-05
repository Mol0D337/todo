<template>
  <div class="bcg" style="margin-bottom: 0">

    <div class="entry__wrapper">

      <form @submit.prevent="submitHandler" style="width: 600px">
        <div class="h1">CREATE TASK</div>

        <div class="input-field">
          <input id="title" v-model="title" type="text" class="validate" required>
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
        </div>

        <div class="chips" ref="chips"></div>

        <div class="input-field" style="margin-top: 20px">
          <textarea maxlength="120" v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Description</label>
          <div class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/120</div>
        </div>

        <input type="text" ref="datepicker">


        <button style="margin-top: 25px; border-radius: 5px; width: 100px"
                class="btn waves-effect" type="submit" name="action"
        >
          Create
        </button>
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
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    background: linear-gradient(-135deg, #c850c0, #4158d0)
    width: 100%
    min-height: calc(100vh - 64px)


  .entry__wrapper
    width: 660px
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

</style>
