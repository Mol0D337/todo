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
        <ShopCards/>
      </div>
    </div>

  </div>
</template>

<script>
  import ShopCards from "../components/Shop/ShopCards";
  import Card from "../components/Shop/Card";
  import {mapGetters} from 'vuex'
  export default {
    name: "Shop",
    components: {Card, ShopCards},
    data() {
      return {
        products: [
          {
            title: "Ноутбук Apple MacBook Pro 13\" M1 256GB 2020 (MYD82UA/A)",
            imageUrl1: "apple_macbook_pro_13__m1_1.jpg",
            imageUrl2: "apple_macbook_pro_13__m1_256gb_2020_space_gray_images_20678895611.jpg",
            imageUrl3: "apple_macbook_pro_13__m1_256gb_2020_space_gray_images_20678895481.jpg",
            star: "4,2",
            testimonials: "9 отзывов",
            term: "879876",
            available: "13",
            priceCurrent: 47999,
            priceOld: "53 999",
            article: "T1"
          },
          {
            title: "Ноутбук Apple MacBook Pro 16\" 512GB 2019 (MVVJ2UA/A)",
            imageUrl1: "191882146_images_17171766102.jpg",
            imageUrl2: "apple_macbook_pro_13__m1_256gb_2020_space_gray_images_20678895611.jpg",
            imageUrl3: "191882146_images_17171767068.jpg",
            star: "4,4",
            testimonials: "11 отзывов",
            term: "879877",
            available: "6",
            priceCurrent: 82999,
            priceOld: "91 999",
            article: "T2"
          },
          {
            title: "Ноутбук Apple MacBook Pro 13\" Retina 1TB 2020 (MWP52UA/A)",
            imageUrl1: "copy_apple_mwp42ua_a_5eb1a14de2e3e_images_18103535749.jpg",
            imageUrl2: "copy_apple_mwp42ua_a_5eb1a14de2e3e_images_18103535905.jpg",
            imageUrl3: "copy_apple_mwp42ua_a_5eb1a14de2e3e_images_18103535827.jpg",
            star: "4,1",
            testimonials: "14 отзывов",
            term: "879878",
            available: "8",
            priceCurrent: 70999,
            priceOld: "78 999",
            article: "T3"
          },
          {
            title: "Ноутбук Apple MacBook Pro 13\" Retina 512GB 2020 (MWP42UA/A)",
            imageUrl1: "apple_mwp42ua_a_images_18103004533.jpg",
            imageUrl2: "apple_mwp42ua_a_images_18103011733333.jpg",
            imageUrl3: "apple_mwp42ua_a_images_181030045333.jpg",
            star: "4,7",
            testimonials: "9 отзывов",
            term: "879879",
            available: "9",
            priceCurrent: 63999,
            priceOld: "70 999",
            article: "T4"
          },
          {
            title: "Ноутбук Apple MacBook Air 13\" 256GB 2020 (MWTJ2)",
            imageUrl1: "apple_macbook_air_2020_256_space_gray_images_17747545453.jpg",
            imageUrl2: "apple_macbook_air_2020_256_space_gray_images_17747548123.jpg",
            imageUrl3: "apple_macbook_air_2020_256_space_gray_images_17747546119.jpg",
            star: "4,6",
            testimonials: "105 отзывов",
            term: "879880",
            available: "3",
            priceCurrent: 29999,
            priceOld: "33 999",
            article: "T5"
          },
          {
            title: "Ноутбук Apple MacBook Pro 16\" 1TB 2019 (MVVM2UA/A)",
            imageUrl1: "191882167_images_17171766242.jpg",
            imageUrl2: "macbook-2.jpg",
            imageUrl3: "191882167_images_17171767733.jpg",
            star: "4,9",
            testimonials: "35 отзывов",
            term: "879881",
            available: "2",
            priceCurrent: 95999,
            priceOld: "105 999",
            article: "T6"
          },
          {
            title: "Ноутбук Apple MacBook Pro 16\" 1TB 2019 (MVVM2UA/A)",
            imageUrl1: "apple_muhp2_images_17178612585.jpg",
            imageUrl2: "191882174_images_17171768517.jpg",
            imageUrl3: "apple_muhp2_images_17178612984.jpg",
            star: "5",
            testimonials: "8 отзывов",
            term: "879882",
            available: "7",
            priceCurrent: 39999,
            priceOld: "42 999",
            article: "T7"
          },
          {
            title: "Ноутбук Apple MacBook Pro 13\" M1 512GB 2020 (MYD92UA/A)",
            imageUrl1: "apple_macbook_pro_13__m1_1.jpg",
            imageUrl2: "apple_macbook_pro_13__m1_256gb_2020_space_gray_images_20678895611.jpg",
            imageUrl3: "apple_macbook_pro_13__m1_256gb_2020_space_gray_images_20678895481.jpg",
            star: "5",
            testimonials: "1 отзыв",
            term: "879883",
            available: "7",
            priceCurrent: 55999,
            priceOld: "59 999",
            article: "T8"
          },
          {
            title: "Ноутбук Apple MacBook Pro 13\" Retina 256GB 2020 (MXK32UA/A)",
            imageUrl1: "copy_apple_mwp42ua_a_5eb1a14de2e3e_images_18103535749.jpg",
            imageUrl2: "apple_mxk32_a_images_18103270801.jpg",
            imageUrl3: "copy_apple_mwp42ua_a_5eb1a14de2e3e_images_18103535827.jpg",
            star: "4,8",
            testimonials: "35 отзывов",
            term: "879884",
            available: "4",
            priceCurrent: 43999,
            priceOld: "49 999",
            article: "T9"
          },
        ],
        minPrice: 29999,
        maxPrice: 95999,
        priceLol: true,
      }
    },
    computed: {
      ...mapGetters([
        'CARD'
      ]),
    },
    methods: {
      setRangeSlider() {
        if(this.minPrice > this.maxPrice) {
          let tmp = this.maxPrice;
          this.maxPrice = this.minPrice;
          this.minPrice = tmp;
        }
        this.sortByCategories()
      },
      sortByCategories() {
        let vm = this;
        this.products.filter(function (item) {
          return item.priceCurrent >= vm.minPrice && item.priceCurrent <= vm.maxPrice
        })
      },
      mounted() {
        this.sortByCategories()
      },
    },
  }
</script>

<style scoped>
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
    padding: 40px 20px 0;
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
