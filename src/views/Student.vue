<template>
  <div style="background-color: green">
    <P>Student Info</p>
    <label>class:</label><span>{{$route.params.classId}}</span><br>
    <label>studentNo:</label><span>{{$route.params.studentNo}}</span><br>
    <!--<router-link to='/class/2/student/002/score'>score</router-link>-->
    <!--<router-link to="/student/score">score</router-link> | <router-link to="/student/hobby">hobby</router-link>-->
    <router-link v-bind:to="{name:'score'}">score</router-link>|
    <router-link v-bind:to="{name:'hobby'}">hobby</router-link><br>
    <!--<router-link :to="{path:'score'}" append>apend-score</router-link>-->
    <!--<router-link :to="{path:'hobby'}" append>apend-hobby</router-link>-->
    <div aaa>
      <router-view style="background-color: blueviolet"></router-view>
      <router-view></router-view>
      <router-view></router-view>
      <router-view></router-view>
      <router-view></router-view>
      <router-view></router-view>
      <router-view></router-view>
      <router-view></router-view>
      <router-view></router-view>
      <router-view></router-view>
      <router-view></router-view>
      <router-view></router-view>
    </div>
    <button @click="goScore">button-score</button> | <button @click="goHobby">button-hobby</button>
  </div>
</template>
<style>

</style>
<script>

  export default {
    methods: {
      goScore(){
        this.$router.push({name:"score"});
      },
      goHobby(){
        this.$router.push("hobby");
        console.log(this.$route)
        console.log(this.$router)
      },
    }
  }
</script>
