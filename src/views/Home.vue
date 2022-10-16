<template>
  <div class="home">
    <cart-header></cart-header>
    <cart-title></cart-title>
    <cart-board></cart-board>
   <cart-footer></cart-footer>
  </div>
</template>



<script lang="ts" setup>
 import CartHeader from '@/components/Header.vue';
 import CartTitle from '@/components/CartTitle.vue';
 import CartBoard from '@/components/CartBoard.vue'
 import CartFooter from '@/components/Footer.vue'
</script>
