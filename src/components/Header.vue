<template>
  <div>
    <header class="mall-header cover">
     <div class="container">

      <div class="logo" @click="backhome">
        <!-- <img src="../../assets/logo.png" alt=""> -->
         <img alt="xiaomi logo" src="../assets/xiaomi.png" />

      </div><span>JackLin-Yao</span>😎
     </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import {Router, useRouter} from 'vue-router';
const router:Router = useRouter()
const backhome = ():void => { router.push('/adress') }
</script>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";
.mall-header{
  height: 5rem;
  background-color: #fff;
  .container {
    @include flex-container;
    height: 100%;
    justify-content: space-between;
    line-height: 5rem;
    font-size: 2.5rem;
    /* background-color: #f4f3; */
    .logo{
      width: 5rem;
      height: 100%;
      padding: 0.6rem;
      img{
        height: 100%;
      }
    }
  }
}
</style>
