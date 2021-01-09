<template>
    <div style="position: relative; display: flex; justify-content: flex-end; margin-bottom: 70px">

      <Popup
              v-if="isPopup"
              @closePopup="closePopup"
      />

      <span class="header-actions__button-counter" v-if="CARD.length">{{CARD.length}}</span>
      <i class="material-icons medium hover"
         style="color: #5d71dd; cursor: pointer; display: flex; justify-content: flex-end; width: 60px"
      >
        shopping_cart
      </i>

      <div class="cart-content" >

        <div v-if="CARD.length">
          <div class="order-modal__products">
            <CardItem
                    v-for="(item, index) in card_data"
                    :key="item.article"
                    :card_item_data="item"
                    @deleteFromCard="deleteFromCard(index)"
                    @increment="increment(index)"
                    @decrement="decrement(index)"
            />
          </div>

          <div class="cart-content__bottom">
            <div class="cart-content__fullprice">
              <span>Итого:</span>
              <span class="fullprice">{{cardTotalCost | priceFormat}} ₴</span>
            </div>
            <button class="cart-content__btn bbtn"
                    data-graph-path="modal"
                    data-graph-animation="fadeInUp"
                    @click="showPopup"
            >
              Перейти в корзину
            </button>
          </div>
        </div>

        <div v-else class="wrap-p" >
          <i class="material-icons medium" style="color: #00ba34">shopping_basket</i>
          <div style="padding-left: 25px;">
            <div style="margin-bottom: 14px;font-size: 150%;"> Ваша корзина пуста </div>
            <div style="font-size: 13px;line-height: 16px;color: #666;"> Добавляйте понравившиеся товары в корзину</div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import priceFormat from '../../filters/priceFormat'
  import {mapGetters, mapActions} from 'vuex'
  import CardItem from "./CardItem";
  import Popup from "./Popup";
  export default {
    name: "Card",
    components: {Popup, CardItem},
    data() {
      return {
        isPopup: false,
      }
    },
    filters: {
      priceFormat
    },
    computed: {
      ...mapGetters([
        'CARD'
      ]),
      cardTotalCost() {
        let result = [];

        if(this.card_data.length) {
          for (let item of this.card_data) {
            result.push(item.priceCurrent * item.quantity);
          }
          result = result.reduce(function (sum, el) {
            return sum + el;
          });
          return result;
        } else {
          return 0
        }
      },
    },
    props: {
      card_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CARD',
        'INCREMENT_CARD_ITEM',
        'DECREMENT_CARD_ITEM',
      ]),
      deleteFromCard(index) {
        this.DELETE_FROM_CARD(index)
      },
      decrement(index) {
        this.DECREMENT_CARD_ITEM(index);
      },
      increment(index) {
        this.INCREMENT_CARD_ITEM(index);
      },

      showPopup() {
        this.isPopup = true;
      },
      closePopup() {
        this.isPopup = false;
      },
    }
  }
</script>

<style scoped>
  .order-modal__products {
    max-height: 320px;
    overflow: hidden scroll;
    direction: inherit;
    box-sizing: border-box !important;
    position: relative;
    display: block;
    width: auto;
  }


  .header-actions__button-counter {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    min-width: 20px;
    height: 20px;
    padding-left: 5px;
    padding-right: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    border-radius: 50px;
    background-color: #fb3f4c;
    font-size: 80%;
    font-weight: 700;
    line-height: 20px;
    color: #fff;
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
    padding: 12px 20px;
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
