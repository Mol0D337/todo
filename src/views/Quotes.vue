<template>
  <div class="bcg">
    <Quote/>
  </div>
</template>

<script>
  import Quote from "../components/Quotes/Quote";
  export default {
    name: "Quotes",
    components: {Quote},
  }
</script>

<style scoped lang="sass">
  .bcg
    background-color: #f4f9f3
    width: 100vw
</style>
