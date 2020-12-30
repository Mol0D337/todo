<template>
  <div class="bcg">
    <QuotesCard/>
  </div>
</template>

<script>
  import QuotesCard from "../components/QuotesCard";
  export default {
    name: "Quotes",
    components: {QuotesCard}
  }
</script>

<style scoped lang="sass">
  .bcg
    background-color: #f4f9f3
    width: 100vw
    height: 100vh
</style>
