<template>
  <div>
    <div style="height: 64px; width: 100%; background: #27273C"></div>

    <div class="container">
      <Card/>
      <div class="products-content grid-container">
        <div class="filters">
          <div class="filters__item filters-price">
            <h3 class="filters-price__title">Цена</h3>
            <div class="filters-price__slider"></div>
            <div class="filters-price__inputs">
              <input type="text" class="filters-price__input">
              <input type="text" class="filters-price__input">
            </div>
          </div>
        </div>
        <ShopCards/>
      </div>
    </div>

  </div>
</template>

<script>
  import ShopCards from "../components/Shop/ShopCards";
  import Card from "../components/Shop/Card";
  export default {
    name: "Shop",
    components: {Card, ShopCards}
  }
</script>

<style scoped>
  .container {
    /* max-width: 1234px; */
    width: 1244px;
    padding: 100px 20px 0;
    margin: 0 auto;
  }

  .grid-container {
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }


  .filters {
    position: relative;
  }

  .filters-price__input {
    width: 100%;
  }

</style>
