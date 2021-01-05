<template>
  <div class="waveWrapper waveAnimation">
    <div class="bcg">
      <div v-if="task" class="entry__wrapper">


        <form @submit.prevent="submitHandler" style="width: 700px">

          <div class="h1">{{task.title}}</div>

          <div class="chips" ref="chips"></div>

          <div class="input-field">
            <textarea maxlength="120" style="min-height: 150px" v-model="description" id="description" class="materialize-textarea"></textarea>
            <label for="description">Description</label>
            <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/120</span>
          </div>

          <input type="text" ref="datepicker">

          <div v-if="task.status !== 'completed'" style="margin-top: 25px">
            <div class="btn__center">
              <router-link
                      to="/list"
              >
                <button class="btn red accent-2 waves-effect" type="submit" style="margin-right: 1rem; width: 100px">back</button>
              </router-link>
              <button class="btn waves-effect" type="submit" style="margin-right: 1rem; width: 100px">Update</button>
              <button class="btn blue waves-effect" type="button" @click="completeTask">Complete task</button>
            </div>
          </div>
        </form>
      </div>
      <p v-else>Task not found</p>
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
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  },
  data: () => ({
    description: '',
    chips: null,
    date: null,
  }),
  mounted() {
    this.description = this.task.description;
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Task tags',
      data: this.task.tags
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true
    });
    setTimeout(() => {
      M.updateTextFields()
    }, 0)
  },
  methods: {
    submitHandler() {
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        description: this.description,
        date: this.date.date
      });
      this.$router.push('/list')
    },
    completeTask() {
      this.$store.dispatch('completeTask', this.task.id);
      this.$router.push('/list');
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

<style lang="sass" scoped>
  @keyframes move_wave
    0%
      transform: translateX(0) translateZ(0) scaleY(1)

    50%
      transform: translateX(-25%) translateZ(0) scaleY(0.55)

    100%
      transform: translateX(-50%) translateZ(0) scaleY(1)


  .waveWrapper
    overflow: hidden
    position: absolute
    left: 0
    right: 0
    bottom: 0
    top: -1px
    margin: auto

  .waveWrapperInner
    position: absolute
    width: 100%
    overflow: hidden
    height: 100%
    bottom: -1px
    background-image: linear-gradient(to top, #86377b 20%, #27273c 80%)

  .bgTop
    z-index: 15
    opacity: 0.5

  .bgMiddle
    z-index: 10
    opacity: 0.75

  .bgBottom
    z-index: 5

  .wave
    position: absolute
    left: 0
    width: 200%
    height: 100%
    background-repeat: repeat no-repeat
    background-position: 0 bottom
    transform-origin: center bottom

  .waveTop
    background-size: 50% 100px

  .waveAnimation .waveTop
    animation: move-wave 3s
    -webkit-animation: move-wave 3s
    -webkit-animation-delay: 1s
    animation-delay: 1s

  .waveMiddle
    background-size: 50% 120px

  .waveAnimation .waveMiddle
    animation: move_wave 10s linear infinite

  .waveBottom
    background-size: 50% 100px

  .waveAnimation .waveBottom
    animation: move_wave 15s linear infinite

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
    width: 760px
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
