<template>
  <div :class="isPopup ? '' : 'w-wrap-p' "  ref="popupWrap">

    <div class="modal__container order-modal modal-open fadeInUp animate-open" role="dialog" aria-modal="true" data-graph-target="modal">
      <div class="modal-content order-modal__content">
        <i @click="closePopup" class="material-icons" style="cursor: pointer;color: #5d71dd;position: absolute;right: 10px;top: 10px;">close</i>
        <div class="order-modal__top">
          <h2 class="order-modal__title">Оформление заказа</h2>
          <span class="order-modal__number">Заказ № 345667</span>
        </div>
        <div class="order-modal__info">
          <div class="order-modal__quantity order-modal__info-item">Товаров в заказе: <span>{{CARD.length}} шт</span></div>
          <div class="order-modal__summ order-modal__info-item">Общая сумма заказа: <span>{{cardTotalCost | priceFormat}} ₴</span></div>
          <div class="order-modal__products order-modal__info-item">
            <div style="display: flex; align-items: center; cursor: pointer" @click="arrow = !arrow">
              <button class="order-modal__btn">Состав заказа</button>
              <i class="material-icons" style="color: #5d71dd" v-if="arrow">arrow_drop_down</i>
              <i class="material-icons" style="color: #5d71dd" v-else>arrow_drop_up</i>
            </div>

            <PopupItem
                    v-if="arrow"
                    v-for="(item, index) in CARD"
                    :key="item.article"
                    :popup_item_data="item"
                    @deleteFromCard="deleteFromCard(index)"
            />

          </div>
        </div>
        <form action="#" class="order-modal__form order">
          <input type="hidden" name="theme" value="Обратный звонок">
          <input type="hidden" name="admin_email[]" value="maxgraph23@gmail.com">
          <input type="hidden" name="form_subject" value="Заявка с сайта Сайт">
          <label class="order__label">
            <span class="order__text">Ваше имя</span>
            <input type="text" name="Имя" class="order__input"
                   style="padding-left: 14px;padding-right: 14px;width: 240px;
                   height: 45px;background: #efefef;border-radius: 4px;border: none; margin: 0; outline-color: #ffffff;"
            >
          </label>
          <label class="order__label">
            <span class="order__text">Номер телефона</span>
            <input type="tel" name="Телефон" class="order__input"
                   style="padding-left: 14px;padding-right: 14px;width: 240px;
                   height: 45px;background: #efefef;border-radius: 4px;border: none;  margin: 0; outline-color: #ffffff;"
                   placeholder="+38 (___)___-__-__">
          </label>
          <label class="order__label">
            <span class="order__text">Ваша почта</span>
            <input type="email" name="Email" class="order__input" placeholder="post@gmail.com"
                   style="padding-left: 14px;padding-right: 14px;width: 240px;
                   height: 45px;background: #efefef;border-radius: 4px;border: none; margin: 0; outline-color: #ffffff;"
            >
          </label>
          <button class="order__btn bbtn">Оформить заказ</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
  import priceFormat from '../../filters/priceFormat'
  import {mapGetters, mapActions} from 'vuex'
  import CardItem from "./CardItem";
  import PopupItem from "./PopupItem";
  export default {
    name: "Popup",
    components: {PopupItem, CardItem},
    data() {
      return {
        arrow: true
      }
    },
    filters: {
      priceFormat
    },
    methods: {
      closePopup() {
        this.$emit('closePopup')
      },
      ...mapActions([
        'DELETE_FROM_CARD',
      ]),
      deleteFromCard(index) {
        this.DELETE_FROM_CARD(index)
      },

    },
    computed: {
      ...mapGetters([
        'CARD'
      ]),
      cardTotalCost() {
        let result = [];

        if(this.CARD.length) {
          for (let item of this.CARD) {
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
    mounted() {
      let vm = this;
      document.addEventListener('click', function (item) {
        if (item.target === vm.$refs['popupWrap']) {
          vm.closePopup();
        }
      })
    }
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
