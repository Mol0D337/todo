<template>

  <div class="waveWrapper waveAnimation">

    <div class="bcg">
      <div class="entry__wrapper">

        <div  style="width: 600px">

          <div class="h1">{{$t('any.prof')}}</div>

          <div >
            <div
                    v-for="profile of profiles"
                    :key="profile.id"
            >
              <div class="lol-kek">
                <div class="cycle__wrapper">
                  <div class="cycle__inner" style="background-image: url(https://unsplash.it/g/200/200/);"></div>
                </div>

                <div class="profile-l-r">
                  <div class="profile-left">
                    <div class="profile__margin">
                      <label class="label__text">{{$t('any.name')}}</label>
                      <div class="div__text">{{profile.email | toUpperCase}}</div>
                    </div>
                    <div class="profile__margin">
                      <label class="label__text">{{$t('any.surname')}}</label>
                      <div class="div__text">{{profile.surname | toUpperCase}}</div>
                    </div>
                    <div class="profile__margin">
                      <label class="label__text">{{$t('any.gender')}}</label>
                      <div class="div__text">{{profile.gender | toUpperCase}}</div>
                    </div>
                  </div>
                  <div class="profile-right">
                    <div class="profile__margin">
                      <label class="label__text">{{$t('any.age')}}</label>
                      <div class="div__text">{{profile.age}}</div>
                    </div>
                    <div class="profile__margin">
                      <label class="label__text">{{$t('any.work')}}</label>
                      <div class="div__text">{{profile.opinion | toUpperCase}}</div>
                    </div>
                    <div class="profile__margin">
                      <label class="label__text">{{$t('any.comp')}}</label>
                      <div class="div__text">{{profile.company}}</div>
                    </div>
                  </div>

                </div>
              </div>



              <div class="switch" style="margin-top: 25px; margin-left: 20px">
                <label>
                  Русский
                  <input type="checkbox" v-model="locale" @click="checkLocale">
                  <span class="lever"></span>
                  English
                </label>
              </div>

              <div class="btn__center">
                <button
                        @click="exit"
                        style="margin-top: -27px; border-radius: 5px; width: 100px; margin-left: 180px;"
                        class="btn waves-effect"  name="action"
                >
                  {{$t('any.exit')}}
                </button>
              </div>


            </div>
          </div>

        </div>

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
  import toUpperCase from '../filters/toUpperCase'
  export default {
    name: "ProfileInfo",
    data: () => ({
      description: '',
      locale: false
    }),
    filters: {
      toUpperCase
    },
    computed: {
      profiles() {
        return this.$store.getters.profiles
      },
      users() {
        return this.$store.getters.users
      },
    },
    created() {
      const locale = localStorage.getItem('locale');
      if (locale === 'en') {
        this.locale = true;
        this.setLocale('en');
      } else {
        this.locale = false;
        this.setLocale('ru');
      }
    },
    methods: {
      exit() {
        localStorage.removeItem('profiles');
        localStorage.removeItem('users');
        localStorage.removeItem('userProfile');
        localStorage.removeItem('userAuth');
        location.reload();
      },
      checkLocale() {
        if (this.locale === false) {
          this.setLocale('en');
          localStorage.setItem('locale', 'en');
        } else {
          this.setLocale('ru');
          localStorage.setItem('locale', 'ru');
        }
      },
      setLocale(locale) {
        import(`../locales/${locale}.json`).then((msgs) => {
          this.$i18n.setLocaleMessage(locale, msgs);
          this.$i18n.locale = locale;
        })
      },
    }
  }
</script>

<style lang="sass" scoped>
  .lol-kek
    display: flex

  .cycle__wrapper
    border: 4px solid #00695c
    padding: 2px
    position: relative
    flex-grow: 0
    flex-shrink: 0
    border-radius: 99999px
    width: 200px
    height: 200px

  .cycle__inner
    border-radius: 99999px
    width: 100%
    height: 100%
    background-color: #00695c
    background-position: center
    background-size: cover

  .profile__margin
    margin-top: 15px

  .label__text
    font-size: 13px

  .div__text
    font-size: 17px


  .profile-l-r
    margin-left: 50px
    width: 100%
    display: flex
    justify-content: space-between


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

  .range__input
    display: flex
    align-items: center

    label
      flex-basis: 34%

</style>
