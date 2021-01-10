<template>
  <div>
    <div style="height: 64px; width: 100%; background: #27273C"></div>

    <div class="container">
      <Card :card_data="CARD"/>
      <div class="products-content grid-container">
        <div class="filters">
          <div class="filters__item filters-price">

            <div class="range-slider" @select="sortByCategories">
              <div class="title__filters-wrap" @click="priceLol = !priceLol">
                <div class="title__filters">Цена</div>
                <i class="material-icons title__filters" style="color: #5d71dd;" v-if="priceLol">keyboard_arrow_up</i>
                <i class="material-icons title__filters" style="color: #5d71dd;" v-else>keyboard_arrow_down</i>
              </div>

              <div v-if="priceLol">
                <div style="display: flex; justify-content: space-evenly; align-items: center; margin: 15px 0 50px">
                  <div class="bord">{{minPrice}}</div>
                  <div style="color: #4d4d4d;margin: 0 7px; width: 10px">—</div>
                  <div class="bord">{{maxPrice}}</div>
                </div>

                <div style="position: relative">
                  <input
                          type="range"
                          class="in-n active"
                          min="29999" max="95999"
                          v-model.number="minPrice"
                          @change="setRangeSlider"
                  />
                  <input type="range"
                         class="in-n active"
                         min="29999" max="95999"
                         v-model.number="maxPrice"
                         @change="setRangeSlider"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>

        <div class="products-grid">
          <ShopCard
                  v-for="product in sortedProducts"
                  :key="product.article"
                  :product_data="product"
                  @addToCard="addToCard"
                  @productClick="productClick"
          />
        </div>


      </div>
    </div>

  </div>
</template>

<script>
  import Card from "../components/Shop/Card";
  import {mapActions, mapGetters} from 'vuex'
  import ShopCard from "../components/Shop/ShopCard";
  export default {
    name: "Shop",
    components: {ShopCard, Card,},
    data() {
      return {
        minPrice: 29999,
        maxPrice: 95999,
        priceLol: true,
        sortedProducts: [],
      }
    },
    computed: {
      ...mapGetters([
        'CARD',
        'PRODUCTS'
      ]),
    },
    mounted() {
      this.sortByCategories()
    },
    methods: {
      ...mapActions([
        'ADD_TO_CARD'
      ]),
      productClick(term) {
        this.$router.push( {name: 'product', query: { 'product': term }})
      },
      addToCard(data) {
        this.ADD_TO_CARD(data);
      },
      setRangeSlider() {
        if(this.minPrice > this.maxPrice) {
          let tmp = this.maxPrice;
          this.maxPrice = this.minPrice;
          this.minPrice = tmp;
        }
        this.sortByCategories();
      },
      sortByCategories() {
        let vm = this;
        this.sortedProducts = [...this.PRODUCTS];
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.priceCurrent >= vm.minPrice && item.priceCurrent <= vm.maxPrice
        })
      },
    },
  }
</script>

<style scoped>
  .products-grid {
    grid-column: 3 span;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }

  .title__filters-wrap {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between
  }

  .title__filters {
    text-align: left;
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
  }

  .bord {
    width: 100px;
    user-select: none;
    font-weight: 400;
    font-size: 14px;
    color: #4d4d4d;
    margin: 0 7px;
    padding: 2px 12px;
    border: 1px solid #d2d2d2;
    border-radius: 4px;
  }

  .range-slider {
    border-top: 1px solid #d2d2d2;
    border-bottom: 1px solid #d2d2d2;
    margin: auto 0;
    text-align: center;
    position: relative;
  }

  .in-n {
    position: absolute;
    left: 0;
    top: -50px;
    bottom: 0;
    right: 0;
  }

  .in-n::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }


  .container {
    /* max-width: 1234px; */
    width: 1244px;
    padding: 40px 20px;
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
