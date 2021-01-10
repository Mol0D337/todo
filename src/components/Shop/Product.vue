<template>
  <div>
    <div style="height: 64px; width: 100%; background: #27273C"></div>

    <div style="padding: 30px">

      <div class="product__title">{{productKek.title}}</div>

      <div style="display: flex; align-items: center; justify-content: space-between">
        <div class="product__props">
      <span class="product__rating">
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"></path>
        </svg>
        {{productKek.star}}
      </span>
          <span class="product__testimonials">{{productKek.testimonials}}</span>
        </div>
        <div class="product__term">Артикул: {{productKek.term}}</div>
      </div>

      <div style="display: flex; align-items: center; ">
        <div class="product__image" style="margin-right: 100px">
          <div class="product__switch image-switch" >
            <div class="image-switch__item" >
              <div class="image-switch__img"><img :src=" require('../../assets/image/' + productKek.imageUrl3) " alt="Макбук"></div>
            </div>
            <div class="image-switch__item" >
              <div class="image-switch__img"><img :src=" require('../../assets/image/' + productKek.imageUrl2) " alt="Макбук"></div>
            </div  >
            <div class="image-switch__item" >
              <div class="image-switch__img"><img :src=" require('../../assets/image/' + productKek.imageUrl1) " alt="Макбук"></div>
            </div>
          </div>
          <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
        </div>

        <div >
          <div class="product__info">
            <span class="product__available">В наличии: {{productKek.available}} шт</span>
          </div>
          <div class="product__price product-price">
            <span class="product-price__current">{{productKek.priceCurrent | priceFormat}} ₴</span>
          </div>
          <button class="product__btn">Купить</button>
        </div>
      </div>



    </div>


  </div>
</template>

<script>
  import priceFormat from '../../filters/priceFormat'
  import {mapGetters} from 'vuex'
  export default {
    name: "Product",
    filters: {
      priceFormat
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ]),
      productKek() {
        let result = {};
        let vm = this;
        this.PRODUCTS.map(function (item) {
          if (item.term === vm.$route.query.product) {
            result = item;
          }
        });
        return result;
      },
    },
  }
</script>

<style scoped>
  @font-face {
    font-family: 'Noto Sans';
    src: url('../../assets/fonts/NotoSansRegular.woff2') format('woff2');
    font-display: swap;
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('../../assets/fonts/NotoSansSemiBold.woff2') format('woff2');
    font-display: swap;
    font-weight: 600;
    font-style: normal;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .products-grid {
    grid-column: 3 span;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }

  .product {
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    width: 285px; /* для удобства */
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 20px;
    padding-top: 9px;
    font-size: 14px;
    background-color: #fff;
  }

  .product:hover {
    box-shadow: 0 2px 16px rgba(0,0,0,.24);
  }

  .product__image {
    position: relative;
    overflow: hidden;
    display: block;
    height: 500px;
    width: 500px;
  }

  .image-switch {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    display: flex;
  }

  .image-switch__item {
    flex-grow: 1;
    cursor: pointer;
  }

  .image-switch__img {
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    transform: translateX(-50%);
    pointer-events: none;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
  }

  .image-switch__img img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  .image-switch__item:first-child .image-switch__img {
    opacity: 1;
    z-index: -1;
  }

  .image-switch__item:hover .image-switch__img {
    opacity: 1;
    z-index: -1;
  }

  .image-pagination {
    position: absolute;
    z-index: 30;
    left: 0;
    bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .image-pagination__item {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    margin: 0 3px;
    background-color: #c4c4c4;
  }

  .image-pagination__item--active {
    background-color: #5d71dd;
  }

  .product__title {
    margin-top: 0;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 40px;
    color: #4d4d4d;
  }

  .product__props {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .product__rating {
    margin-right: 10px;
    display: inline-flex;
    align-items: center;
    color: #5d71dd;
    font-weight: 600;
  }

  .product__rating svg {
    fill: currentColor;
    margin-right: 8px;
  }

  .product__testimonials {
    color: #808080;
  }

  .product__info {
    margin-bottom: 17px;
    font-size: 12px;
    color: #808080;
  }

  .product__term {
    margin-bottom: 17px;
    font-size: 12px;
    color: #808080;
  }

  .product__available {
    display: block;
  }

  .product-price {
    margin-bottom: 17px;
    display: flex;
    align-items: center;
  }

  .product-price__current {
    margin-right: 12px;
    font-size: 24px;
    color: #4d4d4d
  }

  .product-price__old {
    font-size: 12px;
    color: #808080;
    text-decoration: line-through;
  }

  .product__btn {
    border: none;
    padding: 14px 0;
    border-radius: 4px;
    width: 100%;
    color: #fff;
    background-color: #5d71dd;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .product__btn:hover {
    background-color: #6078f1;
    transition: background-color 0.3s ease-in-out;
  }

</style>
