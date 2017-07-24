<template>
  <div>
    English:100
    <router-link v-bind:to="{name:'hobby'}">yyyyyy</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<style>

</style>
<script>
    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: [],
        methods: {}
    }
</script>
