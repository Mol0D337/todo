<template>
  <div class="bcg">
    <div class="list__wrapper">
      <h1>LIST</h1>
      <div class="row" style="margin: 0 20px">
        <div class="input-field col s12 ">
          <select ref="select" v-model="filter">
            <option value="" disabled selected>Choose your option</option>
            <option value="active">Active</option>
            <option value="outdated">Outdated</option>
            <option value="completed">Completed</option>
          </select>
          <label>Status filter</label>
        </div>
      </div>
      <button style="margin-left: 30px" v-if="filter" class="btn btn-small red" @click="filter = null">Clear filter</button>
    </div>




    <div class="cols-q" v-if="tasks.length">
      <div class="col-q" ontouchstart="this.classList.toggle('hover');"
           v-for="(task, idx) of displayTasks"
           :key="task.id"
      >
        <router-link tag="div" class="" :to="'/task/' + task.id">
          <div class="container">
            <div class="front" style="background-image: url(https://unsplash.it/500/500/)">
              <div class="inner">
                <p>{{task.title}}</p>
                <p>{{idx + 1}}</p>
                <span>{{new Date(task.date).toLocaleDateString()}}</span>
              </div>
              <div class="task__status">{{task.status}}</div>
            </div>
            <div class="back">
              <div class="inner">
                <p>{{task.description}}</p>
              </div>
            </div>
          </div>
        </router-link>

      </div>
    </div>
    <h5 v-else style="text-align: center" >No tasks</h5>

    <div v-if="tasks.length" class="pagination__container">
      <div class="pagination">
        <div @click="btnPrev" class="pagination-item--wide first"> <div class="pagination-link--wide first">Previous</div> </div>

        <div class="pagination-item"
             v-for="page in pages"
             :key="page.id"
             @click="pageClick(page)"
             :class="{'is-active': page === pageNum}"
        >
          <div class="pagination-link">{{page}}</div>
        </div>

        <div @click="btnNext" class="pagination-item--wide last"> <div class="pagination-link--wide last">Next</div> </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    filter: null,
    pageNum: 1,
    itemPage: 8,
    switchName: false,
  }),
  mounted() {
    M.FormSelect.init(this.$refs.select)
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    displayTasks() {
      let from = (this.pageNum - 1) * this.itemPage;
      let to = from + this.itemPage;

      return this.tasks.filter(t => {
        if (!this.filter) {
          return true
        }
        return t.status === this.filter
      }).slice(from, to);
    },
    pages() {
      return Math.ceil(this.tasks.length / 8);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNum = page;
    },
    btnNext() {
      if (this.pageNum < (Math.ceil(this.tasks.length / 8))) {
        this.pageNum++;
      }
    },
    btnPrev() {
      if (this.pageNum > 1) {
        this.pageNum--;
      } else if (this.pageNum <= 1) {
        this.pageNum = 1;
      }
    },
  }
}
</script>

<style scoped lang="sass">

  @import url(http://weloveiconfonts.com/api/?family=entypo)
  @import url(https://fonts.googleapis.com/css?family=Roboto:300)

  .task__status
    color: rgba(255, 255, 255, 0.9)
    font-weight: 700
    font-size: 30px
    text-transform: uppercase
    transform: rotate(270deg)
    position: absolute
    right: 25%
    top: 0
    left: 0
    bottom: 0

  .bcg
    background-color: #f4f9f3
    width: 100vw

  .td
    max-width: 400px

  .text
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden

  .pagination__container
    margin-top: 1em
    padding-top: 2em
    text-align: center
    user-select: none

  .pagination-item
    list-style-type: none
    display: inline-block
    border-right: 1px solid #d7dadb

    transform: scale(1) rotate(19deg) translateX(0px) translateY(0px) skewX(-10deg) skewY(-20deg)


  .pagination-item:hover,
  .pagination-item.is-active
    background-color: #00695c
    border-right: 1px solid #fff

    .pagination-link
      color: #fff


  .pagination-item.first-number
    border-left: 1px solid #d7dadb

  .pagination-link
    padding: 1.1em 1.6em
    display: inline-block
    text-decoration: none
    color: #8b969c

    transform: scale(1) rotate(0deg) translateX(0px) translateY(0px) skewX(20deg) skewY(0deg)

  .pagination-item--wide
    //@extend .pagination-item;
    list-style-type: none
    display: inline-block


  .pagination-item--wide.first
    margin: 0 1em 0 0

  .pagination-item--wide.last
    margin: 0 0 0 1em

  .pagination-link--wide
    text-decoration: none
    color: #8b969c
    padding: 1.1em 1.6em


  .pagination-link--wide:hover
    color: #00695c

  .pagination-link--wide.first:before,
  .pagination-link--wide.last:after
    font-family: 'entypo'
    speak: none
    font-style: normal
    font-weight: normal
    font-variant: normal
    text-transform: none
    line-height: 1

    // Better Font Rendering
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale


  .pagination-link--wide.first::before
    content: "\E765"
    margin-right: 0.5em


  .pagination-link--wide.last::after
    content: "\E766"
    margin-left: 0.5em





  .cols-q
    display: grid
    grid-template-columns: 25% 25% 25% 25%


  .col-q
    margin: 1.5rem -4rem



  h1
    font-size: 2.5rem
    font-weight: normal
    color: #444
    text-align: center
    margin: 2rem 0



  .container
    -webkit-transform-style: preserve-3d
    transform-style: preserve-3d
    -webkit-perspective: 1000px
    perspective: 1000px


  .front,
  .back
    background-size: cover
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25)
    border-radius: 10px
    background-position: center
    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1)
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1)
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1)
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1)
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1)
    -webkit-backface-visibility: hidden
    backface-visibility: hidden
    text-align: center
    min-height: 280px
    height: auto
    color: #fff
    font-size: 1.5rem


  .back
    background: #cedce7
    background: -webkit-linear-gradient(45deg,  #cedce7 0%,#596a72 100%)
    background: -o-linear-gradient(45deg,  #cedce7 0%,#596a72 100%)
    background: linear-gradient(45deg,  #cedce7 0%,#596a72 100%)


  .front:after
    position: absolute
    top: 0
    left: 0
    z-index: 1
    width: 100%
    height: 100%
    content: ''
    display: block
    opacity: .6
    background-color: #000
    -webkit-backface-visibility: hidden
    backface-visibility: hidden
    border-radius: 10px

  .container:hover .front,
  .container:hover .back
    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1)
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1)
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1)
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1)
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1)


  .back
    position: absolute
    top: 0
    left: 0
    width: 100%


  .inner
    -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94)
    transform: translateY(-50%) translateZ(60px) scale(0.94)
    top: 50%
    position: absolute
    left: 0
    width: 100%
    padding: 2rem
    -webkit-box-sizing: border-box
    box-sizing: border-box
    outline: 1px solid transparent
    -webkit-perspective: inherit
    perspective: inherit
    z-index: 2


  .container .back
    -webkit-transform: rotateY(180deg)
    transform: rotateY(180deg)
    -webkit-transform-style: preserve-3d
    transform-style: preserve-3d


  .container .front
    -webkit-transform: rotateY(0deg)
    transform: rotateY(0deg)
    -webkit-transform-style: preserve-3d
    transform-style: preserve-3d


  .container:hover .back
    -webkit-transform: rotateY(0deg)
    transform: rotateY(0deg)
    -webkit-transform-style: preserve-3d
    transform-style: preserve-3d


  .container:hover .front
    -webkit-transform: rotateY(-180deg)
    transform: rotateY(-180deg)
    -webkit-transform-style: preserve-3d
    transform-style: preserve-3d


  .front .inner p
    font-size: 2rem
    margin-bottom: 2rem
    position: relative


  .front .inner p:after
    content: ''
    width: 4rem
    height: 2px
    position: absolute
    background: #C6D4DF
    display: block
    left: 0
    right: 0
    margin: 0 auto
    bottom: -.75rem


  .front .inner span
    color: rgba(255,255,255,0.7)
    font-weight: 300


</style>
