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
      <div class="cart-item">
        <div class="cart-item-select">
          <input type="checkbox" id='checkbox1'>
          <label for="checkbox1"></label>
        </div>
        <div class="cart-item-name">
          <span>小米移动电源3</span>
        </div>
        <div class="cart-item-img">
          <img src="@/assets/images/1.jpg" alt="">
        </div>
        <div class="cart-item-price">
          24
        </div>
        <div class="cart-item-count">
          <div class="count-area">
            <a class="lk-count" href="javascript:;">-</a>
            <span class="middle-text">33</span>
            <a class="lk-count" href="javascript:;">+</a>
          </div>

        </div>
        <div class="cart-item-total">22</div>
        <div class="cart-item-remove">222</div>
      </div>
      <div class="cart-board-footer">
        <div class="total-price">
          <span class="price-text">
            总价： <span class="price-num">123</span>
          </span>
          <button class="total-btn">结算</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

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
        flex: 1;
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
        flex: 1;

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
        flex: 1;
        text-align: center;
        border-left: 1px solid #ddd;
      }

      .cart-item-img {
        flex: 1;
        height: 160px;
        border-left: 1px solid #ddd;

        img {
          height: 100%;
          width: 100%;

        }
      }

      .cart-item-price {
        flex: 1;
        border-left: 1px solid #ddd;
        text-align: center;
      }

      .cart-item-count {
        flex: 1;
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
