<template>
  <div class="buttons">
    <div class="butFrame" style="background:url(https://unsplash.it/g/1920/1080/?random)">
      <div class="butTextWrap">

        <div class="title__container">
          <h1>
            <div class="goo" contenteditable="true">{{$t('create.write')}}</div>
          </h1>
          <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
              </filter>
            </defs>
          </svg>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Background"
  }
</script>

<style scoped>
  .title__container {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
  }

  .goo {
    color: black;
    font-size: 3rem;
    line-height: 1.35;
    display: inline;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background-color: #fff;
    padding: 0.5rem 1rem;
    filter: url(#goo);
    opacity: .6;
  }

  .goo:focus {
    outline: 0;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .butFrame{ height: 100vh; width: 100vw}
  .butFrame * {box-sizing: border-box;}


  .butFrame * {
    transition: all .5s ease;
  }

  .butFrame {
    position: relative;
    overflow: hidden;
    background: #111;
    font-family: inherit;
    font-size: 1em;
    text-align: center;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-position: center!important;
  }

  .butFrame:before{
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    content:"";
    background: #111;
    opacity: .2
  }

  .buttons > .butHeading {
    clear: both;
    margin: 0;
    padding: 4em 1% 0;
    color: #484B54;
    font-weight: 800;
    font-size: 1.5em;
  }

  .butFrame .butTextWrap {
    display: contents;
    font-family: inherit;
    padding: 2em;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .butFrame .butTextWrap::before{
    pointer-events: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .butFrame .butTextWrap::after {
    pointer-events: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .butFrame .butTextWrap,
  .butFrame .butTextWrap > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


  .butFrame .butTextWrap > a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
  }

  .butFrame .butHeading {
    word-spacing: -0.15em;
    font-weight: 800;
    font-size: 18px;
    font-family: inherit;
  }

  .butFrame .butHeading .butText {
    font-weight: 300;
  }

  .butFrame .butHeading,
  .butFrame p {
    margin: 0;
    color: #fff;
  }

  .butFrame p {
    letter-spacing: 1px;
    font-size: 68.5%;
    font-family: inherit;
  }

  .butFrame .butTextWrap::before,
  .butFrame .butTextWrap::after {
    position: absolute;
    top: 74px;
    right: 10px;
    bottom: 10px;
    left: 10px;
    content: '';
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
  }
  .butFrame .butTextWrap::before {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }
  .butFrame .butTextWrap::after {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
    box-sizing: border-box;
  }
  .butFrame .butHeading {
    padding-top: 10%;
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }
  .butFrame p {
    padding: 10px 0;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  .butFrame:hover:before{
    opacity:.6;
  }

  .butFrame:hover .butTextWrap::before,
  .butFrame:hover .butTextWrap::after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .butFrame:hover .butHeading,
  .butFrame:hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
</style>
