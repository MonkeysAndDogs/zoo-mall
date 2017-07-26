<template>
  <div>
    <div>goodlist</div>
    <div>{{ $route.params.id }}</div>
    <router-link to="/goods/title">title</router-link>
    <router-link to="/goods/img">image</router-link>
    <router-view></router-view>
    <router-link to="/cart">cart</router-link>
    <router-link :to="{ name:'cart',params:{ cartId:123 }}">obj cart</router-link>
    <button @click="jump">button to cart</button>
  </div>
</template>

<script>
  export default {
    data(){
      return  {
        msg:'vue'
      }
    },
    methods:{
      jump(){
        this.$router.push('/cart?goodsId=123');
      }
    }
  }
</script>

<style>

</style>
