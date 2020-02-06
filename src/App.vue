<template>
  <div id="app">


    <router-view></router-view>
      <public-tabbar></public-tabbar>
  </div>
</template>
<script>
import PublicTabbar from './components/TabBar/PublicTabar'
  export default{
    name:"App",
    components:{
      PublicTabbar
    }
  }
</script>
<style>
 @import "./assets/css/base.css";
</style>
