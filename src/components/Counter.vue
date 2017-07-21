<template>
  <div>
    <button v-on:click="increment">+</button>
    <button @click="decrement">-</button>
    <p><span>{{num2}}</span></p>
  </div>
</template>
<style>

</style>
<script>
  var son = 'zzh'
  export default {
    props:["num2"],
    data() {
      return {
        num2: 16,
        msg: 'hello vue'
      }
    },
    abc:123,
    methods: {
      increment() {
//        console.log(this.$parent)
//        console.log(this.$props)
//        console.log(this)
//        console.l og(this.data())
//        this.num++;
        this.$emit("incre")
      },
      decrement() {
//        this.num--;
        this.$emit("decre")
      }
    }
  }

</script>
