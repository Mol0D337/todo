<template>
  <div>
    <div class="wrapper-q">
      <h1>Лучшие цитаты, но не увлекаться</h1>
      <QuoteCard/>
    </div>
  </div>
</template>

<script>
  import QuoteCard from "./QuoteCard";
  export default {
    name: "Quote",
    components: {QuoteCard},
    data () {
      return {
        out: [
          {
            id: "No information",
            time: "-",
            sum: "-",
            status: "-",
            txId: "-",
            alt: "-",
          },
        ],
        pageNum: 1,
        itemPage: 3,
        switchName: false,
      }
    },
    computed: {
      pages() {
        return Math.ceil(this.out.length / 3);
      },
      paginated() {
        let from = (this.pageNum - 1) * this.itemPage;
        let to = from + this.itemPage;
        return this.out.slice(from, to);
      },
    },
    methods: {
      pageClick(page) {
        this.pageNum = page;
      },
      btnNext() {
        if (this.pageNum < (Math.ceil(this.out.length / 3))) {
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
      sortBy() {
        if (this.switchName === true) {
          this.out.sort((a, b) => a.name.localeCompare(b.name));
          this.switchName = false;
        } else if (this.switchName === false) {
          this.out.sort((a,b) => b.name.localeCompare(a.name));
          this.switchName = true;
        }
      },
      sortByCode() {
        this.out.sort((a,b) => a.code - b.code)
      },
    }
  }
</script>

<style scoped lang="scss">
  .cols-q {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }

  .col-q {
    margin: 1.5rem -4rem;
  }


  h1{
    font-size: 2.5rem;
    font-weight: normal;
    color: #444;
    text-align: center;
    margin: 2rem 0;
  }

  .wrapper{
    width: 90%;
    margin: 0 auto;
    max-width: 80rem;
  }

  .cols{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .col{
    width: calc(25% - 2rem);
    margin: 1rem;
    cursor: pointer;
  }

  .container{
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }

  .front,
  .back{
    background-size: cover;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
    border-radius: 10px;
    background-position: center;
    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
    min-height: 280px;
    height: auto;
    color: #fff;
    font-size: 1.5rem;
  }

  .back{
    background: #cedce7;
    background: -webkit-linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
    background: -o-linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
    background: linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
  }

  .front:after{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    opacity: .6;
    background-color: #000;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
  }
  .container:hover .front,
  .container:hover .back{
    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  .back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .inner{
    -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
    transform: translateY(-50%) translateZ(60px) scale(0.94);
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 1px solid transparent;
    -webkit-perspective: inherit;
    perspective: inherit;
    z-index: 2;
  }

  .container .back{
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .container .front{
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .container:hover .back{
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .container:hover .front{
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .front .inner p{
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
  }

  .front .inner p:after{
    content: '';
    width: 4rem;
    height: 2px;
    position: absolute;
    background: #C6D4DF;
    display: block;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -.75rem;
  }

  .front .inner span{
    color: rgba(255,255,255,0.7);
    font-weight: 300;
  }

  @media screen and (max-width: 64rem){
    .col{
      width: calc(33.333333% - 2rem);
    }
  }

  @media screen and (max-width: 48rem){
    .col{
      width: calc(50% - 2rem);
    }
  }

  @media screen and (max-width: 32rem){
    .col{
      width: 100%;
      margin: 0 0 2rem 0;
    }
  }
</style>
