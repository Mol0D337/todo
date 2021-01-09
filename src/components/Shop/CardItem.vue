<template>
  <div>
    <ul class="cart-content__list" data-simplebar="init">
      <div class="simplebar-wrapper" style="margin: 0px;">
        <div class="simplebar-height-auto-observer-wrapper">
          <div class="simplebar-height-auto-observer"></div>
        </div>
        <div class="simplebar-mask">
          <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
            <div class="simplebar-content-wrapper" style="height: auto; overflow: hidden;">
              <div class="simplebar-content" style="padding: 0px;">
                <li class="cart-content__item">
                  <article class="cart-content__product cart-product" data-id="1">
                    <img :src=" require('../../assets/image/' + card_item_data.imageUrl1) " alt="" class="cart-product__img">
                    <div class="cart-product__text">
                      <h3 class="cart-product__title">
                        {{card_item_data.title}}
                      </h3>

                      <div style="display: flex; align-items: center">

                        <div class="cart-product__price" >{{card_item_data.priceCurrent | priceFormat}} ₴</div>

                        <div class="lol-l">
                          <div class="decr" @click="decrementItem">-</div>
                          <div class="bord">{{card_item_data.quantity}}</div>
                          <div class="incr" @click="incrementItem">+</div>
                        </div>

                      </div>

                    </div>
                    <button class="cart-product__delete" aria-label="Удалить товар" @click="deleteFromCard"></button>
                  </article>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
  import priceFormat from '../../filters/priceFormat'
  export default {
    name: "CardItem",
    data() {
      return {
      }
    },
    filters: {
      priceFormat
    },
    props: {
      card_item_data: {
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

      decrementItem() {
        this.$emit('decrement')
      },
      incrementItem() {
        this.$emit('increment')
      },
    },
    mounted() {
      this.$set(this.card_item_data, 'quantity', 1)
    },
  }
</script>

<style scoped>
  .lol-l {
    cursor: pointer;
    margin-left: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none
  }

  .bord {
    user-select: none;
    font-weight: 400;
    font-size: 14px;
    color: #4d4d4d;
    margin: 0 7px;
    padding: 2px 12px;
    border: 1px solid #d2d2d2;
    border-radius: 4px;
  }

  .decr {
    cursor: pointer;
    margin-top: -5px;
    color: #5d71dd;
    font-size: 24px;
  }

  .incr {
    cursor: pointer;
    margin-top: -5px;
    color: #5d71dd;
    font-size: 24px;
  }

  .decr-active {
    color: #d2d2d2;
  }

  .incr-active {
    color: #d2d2d2;
  }

  .wrap-p {
    display: flex; align-items: center;padding: 20px 30px 30px;
  }

  .hover:hover + .cart-content {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
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

  .bbtn:hover {
    background-color: #6078f1;
    transition: background-color 0.3s ease-in-out;
  }

  .bbtn:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  .cart {
    position: relative;
    padding: 40px 19px;
    transition: background-color 0.3s;
  }

  .cart.active:hover {
    cursor: pointer;
    background: rgba(93, 113, 221, 0.1);
    transition: background-color 0.3s;
  }

  .header__cart {
    margin-left: 40px;
  }

  .cart__quantity {
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
    margin-top: -10px;
    background-color: #de707b;
    border-radius: 100%;
    padding: 2px;
    color: #fff;
    font-size: 12px;
    min-height: 16px;
    min-width: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .cart-content {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    z-index: 99;
    cursor: default;
    width: 490px;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.25);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  .cart-content:hover {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  .cart.active:hover .cart-content {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  .content {
    padding-top: 90px;
  }

  .cart-content__list {
    max-height: 330px;
  }

  .cart-product {
    display: flex;
    align-items: center;
    padding: 20px;
    padding-right: 13px;
    transition: background-color 0.3s;
  }

  .cart-product:hover {
    background: rgba(93, 113, 221, 0.1);
    transition: background-color 0.3s;
  }

  .cart-product__img {
    margin-right: 20px;
    max-width: 100px;
    max-height: 100px;
    object-fit: cover;
  }

  .cart-product__title {
    max-width: 300px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #4d4d4d;
    margin-top: 0;
    margin-bottom: 18px;
  }

  .cart-product__price {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #4d4d4d;
  }

  .cart-product__delete {
    border: none;
    background-color: transparent;
    cursor: pointer;
    background-image: url("../../assets/image/trash.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    padding: 0;
  }

  .cart-content__bottom {
    padding: 20px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-content__fullprice {
    font-size: 14px;
    line-height: 20px;
    color: #4d4d4d;
    display: flex;
    flex-direction: column;
  }

  .fullprice {
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #4d4d4d;
  }

  .cart-content__btn {
    display: inline-block;
    width: 246px;
    text-align: center;
  }

  .simplebar-track.simplebar-vertical {
    width: 4px;
    background: rgba(77, 77, 77, 0.1);
    border-radius: 5px;
    right: 5px;
    margin-top: 20px;
    height: calc(100% - 40px);
  }

  .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
    background: rgba(77, 77, 77, 0.2);
    border-radius: 5px;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;
  }

  .order-modal {
    padding: 40px;
    width: 592px;
    min-height: 542px;
  }

  .order-modal__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .order-modal__title {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: #5d71dd;
  }

  .order-modal__number {
    font-weight: 400;
    font-size: 12px;
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
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 12px;
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
    font-size: 12px;
    line-height: 20px;
    text-align: right;
    color: #808080;
  }

</style>
