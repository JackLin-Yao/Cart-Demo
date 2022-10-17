<template>
  <section class="cart-board cover">
    <div class="container">
      <ul class="cart-board-title">
        <li>选择</li>
        <li>商品名称</li>
        <li>图片</li>
        <li>单价</li>
        <li>数量</li>
        <li>小计</li>
        <li>操作</li>
      </ul>
      <div class="cart-item" v-for="(item,index) in cartData" :key="index">
        <div class="cart-item-select">
          <input type="checkbox" id='checkbox1' v-model="item.checked">
          <label for="checkbox1"></label>
        </div>
        <div class="cart-item-name">
          <span>{{item.productName}}</span>
        </div>
        <div class="cart-item-img">
          <img :src="'/images/' + item.productImage" alt="">
        </div>
        <div class="cart-item-price">
          {{currency(item.productPrice)}}
        </div>
        <div class="cart-item-count">
          <div class="count-area">
            <a class="lk-count" href="javascript:;" @click="editCart('minus',index)">-</a>
            <span class="middle-text">{{item.productCount}}</span>
            <a class="lk-count" href="javascript:;" @click="editCart('plus',index)">+</a>
          </div>

        </div>
        <div class="cart-item-total">{{currency(item.productPrice * item.productCount)}}</div>
        <div class="cart-item-remove"> <a href="javascript:;" @click="delItem(item)">删除</a></div>
      </div>
      <div class="cart-board-footer">
        <div class="total-price">
          <span class="price-text">
            总价： <span class="price-num">{{totalPrice}}</span>
          </span>
          <button class="total-btn">结算</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import axios from 'axios'

/**
 *
 */
interface CartData {
  checked: boolean;
  productCount: number;
  productId: string;
  productImage: string;
  productName: string;
  productPrice: number;
}
let cartData = ref<CartData[]>([])
/**
 *获取购物车数据
 */
const getCartDta = () => {
  axios.get("/mock/cart.json").then((response) => {
    const res = response.data;
    const data = res.data;
    cartData.value = data;
    // console.log("🚀 ~ file: Header.vue ~ line 40 ~ axios.get ~ cartData", cartData)

  })
}
getCartDta()
/**
 *
 * @param value
 */
function currency(value: number) {
  if (!value) {
    return "0.00";
  }

  value = value * 1;

  //保留2位
  return "￥" + value.toFixed(2);
}
/**
 *
 * @param {string} option
 * @param {number} index
 */
function editCart(option: string, index: number) {
  switch (option) {
    case 'minus':
      {
        if (cartData.value[index].productCount <= 0) { return } else { cartData.value[index].productCount--; }
      }
      // cartData.value[index].productCount < 0 ?:return: cartData.value[index].productCount--;
      break;
    case 'plus':
      cartData.value[index].productCount++;
      break;
  }
}
/**
 *
 * @param item
 */
function delItem(item: CartData) {
  cartData.value.forEach((ele, index) => {
    if (ele.productId === item.productId) {
      cartData.value.splice(index, 1)
    }
  });
}
/**
 *Calculate the total number of shopping carts
 */
const totalPrice = computed(() => {
  let tPrice = 0;
  // console.log("🚀 ~ file: CartBoard.vue ~ line 127 ~ totalPrice ~ tPrice", tPrice)
  cartData.value.forEach((ele) => {
    if (ele.checked) {
      tPrice += ele.productPrice * ele.productCount;
    }
  }
  )
  // console.log("🚀 ~ file: CartBoard.vue ~ line 127 ~ totalPrice ~ tPrice", tPrice)
  return tPrice
})

  // let tPrice = 0;
  // console.log("🚀 ~ file: CartBoard.vue ~ line 137 ~ tPrice", tPrice)
  // let num = [1,2,3,4,5,6,7,8,9,33,3,4]
  // num.forEach((ele) => {
  //   if (ele) {
  //     tPrice += ele;
  //   }
  // }
  // )

  // console.log("🚀 ~ file: CartBoard.vue ~ line 137 ~ tPrice", tPrice)

// console.log("🚀 ~ file: CartBoard.vue ~ line 146 ~ name ~ name", name)

// console.log("🚀 ~ file: CartBoard.vue ~ line 134 ~ totalPrice ~ totalPrice", totalPrice)
</script>

<style lang="scss" scoped>
$item-total-width: 1226px;

.cart-board {
  .container {
    width: $item-total-width;
    margin: 0 auto;
    background: #fff;

    .cart-board-title {
      display: flex;
      height: 3rem;
      background-color: #ddd;

      li {
        width: $item-total-width/7;
        line-height: 3rem;
        text-align: center;
        border-left: 1px solid #fff;

        &:nth-child(1) {
          border-left: none;
        }
      }
    }

    .cart-item {
      display: flex;
      height: 10rem;
      width: 100%;
      line-height: 10rem;
      align-items: center;
      border-bottom: 1px solid #ddd;

      .cart-item-select {
        position: relative;
        /* width: 175px;
        height: 100%; */
        width: $item-total-width/7;

        input[type='checkbox'] {
          position: absolute;
          width: 30px;
          height: 30px;
          cursor: pointer;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%)
        }
      }

      .cart-item-name {
        /* width: 175px;
        height: 100%; */
        width: $item-total-width/7;
        height: 160px;
        /* width: 150px; */
        text-align: center;
        border-left: 1px solid #ddd;

        span {
          white-space: nowrap;
        }
      }

      .cart-item-img {
        width: $item-total-width/7;
        height: 160px;
        box-sizing: border-box;
        border-left: 1px solid #ddd;
        padding: 5px;

        img {
          height: 100%;
          width: 100%;

        }
      }

      .cart-item-price {
        width: $item-total-width/7;

        border-left: 1px solid #ddd;
        text-align: center;
      }

      .cart-item-count {
        width: $item-total-width/7;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border-left: 1px solid #ddd;

        /* text-align: center; */
        /* height: 100%; */
        .count-area {
          display: flex;
          justify-content: space-between;
          width: 150px;
          height: 38px;
          overflow: hidden;
          text-align: center;
          /* margin: 0 auto; */
          border: 1px solid #ddd;

          .middle-text {
            display: inline-block;
            height: 38px;
            line-height: 38px;
            width: 74px;
          }

          .lk-count {
            width: 38px;
            text-align: center;
            line-height: 38px;
            font-size: 25px;

            &:nth-child(1) {
              border-right: 1px solid #ddd;
            }

            &:nth-child(3) {
              border-left: 1px solid #ddd;
            }
          }

        }
      }

      .cart-item-total {
        flex: 1;
        border-left: 1px solid #ddd;
        text-align: center;
      }

      .cart-item-remove {
        flex: 1;
        border-left: 1px solid #ddd;
        text-align: center;
      }
    }

    .cart-board-footer {
      text-align: right;
      height: 3rem;
      line-height: 3rem;

      .total-price {
        .price-num {
          color: #ff6700;
        }

        .total-btn {
          width: 200px;
          height: 48px;
          line-height: 48px;
          font-size: 18px;
          margin-left: 50px;
          background-color: #ff6700;
          color: #fff;
        }
      }
    }
  }
}
</style>
