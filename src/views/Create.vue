<template>
  <div class="waveWrapper waveAnimation">
    <div class="bcg">

      <div class="entry__wrapper">

        <form @submit.prevent="submitHandler" style="width: 600px">
          <div class="h1">{{$t('create.createTask')}}</div>

          <div class="input-field">
            <input id="title" v-model="title" type="text" class="validate" required>
            <label for="title">{{$t('create.title')}}</label>
            <span class="helper-text" :data-error="$t('create.required')"></span>
          </div>

          <div class="chips" ref="chips"></div>

          <div class="input-field" style="margin-top: 20px">
            <textarea maxlength="120" v-model="description" id="description" class="materialize-textarea"></textarea>
            <label for="description">{{$t('create.description')}}</label>
            <div class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/120</div>
          </div>

          <input type="text" ref="datepicker">


          <div class="btn__center">
            <button style="margin-top: 25px; border-radius: 5px; width: 100px"
                    class="btn waves-effect" type="submit" name="action"
            >
              {{$t('create.create')}}
            </button>
          </div>

        </form>

      </div>

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
        placeholder: 'Tags'
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
        this.$router.push('/test')
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
    z-index: 50
    width: 100vw
    height: calc(100vh - 64px)
    margin-top: 50px
    display: flex
    align-items: center
    justify-content: center
    position: absolute


  .entry__wrapper
    width: 660px
    background: #fff
    border-radius: 10px
    overflow: hidden
    padding: 30px
    display: flex
    justify-content: space-between
    align-items: flex-start

    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
    border-top: 1px solid #ddd
    border-right: 1px solid #ddd
    border-left: 1px solid #ddd

  .h1
    font-size: 2.5rem
    font-weight: normal
    color: #444
    text-align: center
    margin: 1rem 0 3rem
    line-height: 110%

</style>
