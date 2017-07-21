<template>
  <div>
    <P>Student Info</p>
    <!--<label>class:</label><span>{{$route.params.classId}}</span><br>-->
    <!--<label>studentNo:</label><span>{{$route.params.studentNo}}</span>-->
    <router-link to="/student/score">score</router-link> | <router-link to="/student/hobby">hobby</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<style>

</style>
<script>

</script>
