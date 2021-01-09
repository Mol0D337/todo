<template>
  <div class="order-modal__list" style="display: block;">
    <div class="order-modal__item">
      <article class="order-modal__product order-product" data-id="1">
        <img :src=" require('../../assets/image/' + popup_item_data.imageUrl1) " alt="" class="order-product__img">
        <div class="order-product__text">
          <h3 class="order-product__title">
            {{popup_item_data.title}}
          </h3>
          <span class="order-product__price">{{popup_item_data.priceCurrent | priceFormat}} ₴</span>
        </div>
        <button class="order-product__delete" @click="deleteFromCard">Удалить</button>
      </article>
    </div>
  </div>

</template>

<script>
  import priceFormat from '../../filters/priceFormat'
  export default {
    name: "PopupItem",
    filters: {
      priceFormat
    },
    props: {
      popup_item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      deleteFromCard() {
        this.$emit('deleteFromCard')
      },
    },
  }
</script>

<style scoped>
  .w-wrap-p {
    background: rgba(0, 0, 0, .85);
    z-index: 99999;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }

  .bbtn {
    border: none;
    padding: 14px 0;
    border-radius: 4px;
    width: 100%;
    color: #fff;
    background-color: #5d71dd;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .order-modal {
    padding: 40px;
    width: 592px;
    min-height: 542px;
    border-radius: 10px;
    background: #fff;
    position: fixed;
    z-index: 999;
    top: 5%;
    left: 33%;
  }

  .order-modal__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .order-modal__title {
    margin-top: 0;
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: #5d71dd;
  }

  .order-modal__number {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    color: #808080;
  }

  .order-modal__info {
    margin-bottom: 20px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 34px 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #808080;
  }

  .order-modal__info span {
    font-weight: 600;
  }

  .order-modal__info-item:not(:last-child) {
    margin-bottom: 15px;
  }

  .order-modal__btn {
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #808080;
  }

  .order-modal__btn::after {
    content: "";
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 7px;
    height: 7px;
    background-image: url("../../assets/image/arrow-down.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .order-modal__btn.open::after {
    transform: translateY(-50%) rotate(180deg);
  }

  .order {
    padding: 0 40px;
  }

  .order__label {
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #808080;
  }

  .order__input {
    padding-left: 14px;
    padding-right: 14px;
    width: 240px;
    height: 45px;
    background: #efefef;
    border-radius: 4px;
    border: none;
  }

  .order__input::placeholder {
    color: #b1b1b1;
  }

  .order-product {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .order-modal__list {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .order-product__img {
    max-width: 60px;
    max-height: 60px;
    object-fit: cover;
    margin-right: 10px;
  }

  .order-modal__list {
    display: none;
  }

  .order-modal__item:not(:last-child) {
    margin-bottom: 14px;
  }

  .order-product__text {
    margin-right: 10px;
  }

  .order-product__title {
    margin-top: 0;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #4d4d4d;
  }

  .order-product__price {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #4d4d4d;
  }

  .order-product__delete {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    color: #808080;
  }

</style>
