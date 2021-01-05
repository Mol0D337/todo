<template>
  <div class="waveWrapper waveAnimation">
    <div class="bck">

      <div class="entry__wrapper">

        <div class="entry__wrapper-left">

          <div class="btn-n">
            <Scratchable/>
            <span class="tooltip-p right_tooltip-p">Необходимо стереть</span>
          </div>

        </div>

        <div class="entry__wrapper-right">
          <form @submit.prevent="submitLogin">
            <div style="text-align: center; margin-bottom: 40px; margin-top: 50px">
              <svg width="200px" height="200px" viewBox="0 0 200 200" aria-labelledby="svg-title svg-desc">
                <g id="ghost-body" fill="#ffffff" stroke="#999" stroke-width="3" stroke-linejoin="round">
                  <path d="M 54,181 C 44,131 13,11 99,11 185,12 164,110 150,182 146,195 139,185 137,177 134,170 126,169 124,179 120,192 114,190 109,179 105,167 98,166 94,179 92,185 85,193 79,179 74,170 68,168 66,179 62,193 56,191 54,181 Z"></path>
                  <path id="eye-right" class="eye" fill="#ffffee" d="M 69,71 C 69,64 73,54 84,55 96,56 100,62 100,70 100,79 89,83 84,83 78,83 69,80 69,71 Z"></path>
                  <path id="eye-left" class="eye" fill="#ffffee" d="M 105,73 C 104,66 108,57 120,57 130,57 134,65 134,71 134,80 125,85 119,85 114,85 105,82 105,73 Z"></path>

                  <circle id="pupil-right" class="pupil" cx="84" cy="69" r="3" fill="rgba(0,0,0,0.25)"></circle>
                  <circle id="pupil-left" class="pupil" cx="120" cy="71" r="3" fill="rgba(0,0,0,0.25)"></circle>

                  <path id="mouth" d="M 75,115 C 79,120 91,126 101,125 110,125 126,118 127,114 125,117 117,125 101,125 85,126 79,117 75,115 Z" fill="#aa4040" stroke="#600"></path>

                  <path id="ghost-arm-right" class="ghost-arm" d="M 45,89 C 25,92 9,108 11,124 13,141 27,115 48,119"></path>
                  <path id="ghost-arm-left" class="ghost-arm" d="M 155,88 C 191,90 194,114 192,125 191,137 172,109 155,116" data-hover="M 155,88 C 145,68 105,51 103,62 102,74 123,117 155,116" style="animation-delay:-1s"></path>
                </g>
              </svg>
            </div>

            <div class="login__form">

              <div class="input-field" style="width: 400px">
                <input id="email" type="email" class="validate" v-model="email" @focus="updateMouthEyes" @blur="blurEmail" required>
                <label for="email">Email</label>
              </div>

              <div class="input-field" style="width: 400px">
                <input id="password" type="password" minlength="6" required class="validate" v-model="password" @focus="focusPassword" @blur="blurPassword">
                <label for="password">Password</label>
              </div>

              <button type="submit" class="btn" style="border-radius: 5px; width: 100px">Login</button>

              <router-link
                      tag="div"
                      to="/registration"
                      class="reg__text"
              >
                Registration
              </router-link>

            </div>
          </form>
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
  import Scratchable from "../components/Scratchable";
  export default {
    name: "Login",
    components: {Scratchable},
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      submitLogin() {
        const user = {
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch('createUser', user);
        localStorage.setItem('userAuth', 'yes');
        location.reload()
      },
      updateMouthEyes() {
        if (this.email.length > 0) {
          if (this.email.indexOf("@") > 0 && this.email.indexOf("@") < this.email.length - 1) {
            document.querySelector("#mouth").setAttribute("d", "M 75,115 C 79,110 92,117 102,117 111,117 123,111 127,114 131,117 123,136 102,136 81,137 73,121 75,115 Z");
          } else {
            document.querySelector("#mouth").setAttribute("d", "M 75,115 C 79,110 92,119 101,119 110,119 123,111 127,114 131,117 118,131 102,132 87,132 73,121 75,115 Z");
          }
        } else {
          document.querySelector("#mouth").setAttribute("d", "M 75,115 C 79,120 91,126 101,125 110,125 126,118 127,114 125,117 117,125 101,125 85,126 79,117 75,115 Z");
        }
        let pupilRight = document.querySelector("#pupil-right");
        let pupilLeft = document.querySelector("#pupil-left");
        let movePos = this.email.length > 30 ? 13.33 : this.email.length / 2.25 ;
        pupilRight.setAttribute("cy", 75);
        pupilLeft.setAttribute("cy", 76);
        pupilRight.setAttribute("cx", 78 + movePos);
        pupilLeft.setAttribute("cx", 113 + movePos);
      },
      blurEmail() {
        let pupilRight = document.querySelector("#pupil-right");
        let pupilLeft = document.querySelector("#pupil-left");
        pupilRight.setAttribute("cx", 84);
        pupilRight.setAttribute("cy", 69);
        pupilLeft.setAttribute("cx", 120);
        pupilLeft.setAttribute("cy", 71);
      },
      focusPassword() {
        document.querySelector("#ghost-arm-left").setAttribute("d","M 155,88 C 145,68 105,51 103,62 102,74 123,117 155,116");
        document.querySelector("#ghost-arm-right").setAttribute("d", "M 45,89 C 54,64 103,48 106,64 108,80 65,121 48,119");
      },
      blurPassword() {
        document.querySelector("#ghost-arm-left").setAttribute("d","M 155,88 C 191,90 194,114 192,125 191,137 172,109 155,116");
        document.querySelector("#ghost-arm-right").setAttribute("d", "M 45,89 C 25,92 9,108 11,124 13,141 27,115 48,119");
      },
    }
  }
</script>

<style scoped lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,700')
  .reg__text
    user-select: none
    cursor: pointer
    color: #3949ab
    display: flex
    justify-content: center
    margin-top: 50px
    text-transform: capitalize

  .wrapper-r
    font-family: 'Ubuntu', sans-serif
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)
    width: 682px


  .btn-n
    text-transform: uppercase
    letter-spacing: 2px
    line-height: 40px
    text-align: center
    cursor: pointer
    position: relative
    font-weight: 700


  .btn-n:last-child
    margin-right: 0


  /* Tooltip */
  .tooltip-p
    position: absolute
    width: 90%
    height: 44px
    line-height: 44px
    background: linear-gradient(-135deg, #c850c0, #4158d0)
    color: #fff
    top: 555px
    left: 505px
    font-weight: 700
    font-size: 15px
    border-radius: 10px
    opacity: 0
    transition: all 0.5s ease



  .tooltip.right_tooltip-p
    left: 160px

  .right_tooltip-p:before
    content: ""
    position: absolute
    top: 0
    left: -10px
    border-left: 10px solid transparent
    border-right: 10px solid transparent
    border-top: 10px solid #4158d0
    border-bottom: 10px solid transparent




  .tooltip-p.bottom_tooltip-p
    top: 610px

  .bottom_tooltip-p:before
    content: ""
    position: absolute
    top: -10px
    left: 0px
    border-left: 10px solid #05F2AE
    border-right: 10px solid transparent
    border-top: 10px solid transparent
    border-bottom: 10px solid transparent


  .btn-n:hover .tooltip-p
    opacity: 1


  @media screen and (max-width: 1000px)
    .wrapper-r
      width: 140px

    .btn-n
      margin: 40px 0





  .entry__wrapper
    width: 960px
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

  .bck
    z-index: 50
    width: 100vw
    height: calc(100vh - 64px)
    margin-top: 50px
    display: flex
    align-items: center
    justify-content: center
    position: absolute

  @keyframes float
    from
      transform: translate(0, 0px)
    to
      transform: translate(0, 8px)

  @keyframes float-arm
    from
      transform: translate(-1px, 0px)
    to
      transform: translate(1px, 4px)

  #ghost-body
    animation: float 2s linear alternate infinite
  .ghost-arm
    animation: float-arm 3s linear alternate infinite
  .pupil, #mouth, .ghost-arm
    transition: all 0.25s

</style>
