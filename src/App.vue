<template>
 
  <div id="app">
    <div id="nav">
<h1>  北京科技大学忆寻煜熠南昌实践团</h1>

 

  <el-menu  
        background-color="#A00"
        text-color="#fff"
        active-text-color="#FC0" 
        :default-active="this.$router.path"
        router
        class="el-menu-demo"
        mode="horizontal">
         <el-menu-item index="/" >主页</el-menu-item>
      <el-menu-item index="/history">校外党史探访</el-menu-item>
      <el-menu-item index="/classroom">校内第二课堂</el-menu-item>
      <el-menu-item index="/exchange">线上积分兑换</el-menu-item>
      <el-menu-item index="/service">服务指南</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>

      <el-menu-item index="/forum">forum</el-menu-item>
      <el-menu-item index="/test">test</el-menu-item>
     
      <el-menu-item  disabled></el-menu-item>
      <el-menu-item  disabled></el-menu-item>
      <el-menu-item  disabled></el-menu-item>
      <el-menu-item  disabled></el-menu-item>
      <el-menu-item  disabled></el-menu-item>
      <el-menu-item  disabled></el-menu-item>
      <el-menu-item  disabled></el-menu-item>
            <el-menu-item  disabled></el-menu-item>
      <el-menu-item  disabled></el-menu-item>
      <el-menu-item  disabled></el-menu-item>
      <el-menu-item  disabled></el-menu-item>
      <el-menu-item  disabled></el-menu-item>
      <el-menu-item  disabled></el-menu-item>
            <el-menu-item  disabled></el-menu-item>

      <el-menu-item  disabled></el-menu-item>
      <el-menu-item index="/login" v-if='!username'>注册/登录</el-menu-item>
      <el-menu-item  v-if='username'>欢迎您，<span id="name">{{username}}</span></el-menu-item>
      <el-menu-item @click="logout" v-if='username'>登出</el-menu-item>
       </el-menu>
 
  
   


       

       
      <!-- <el-menu-item onclick="window.location.href = 'https://bilibili.com'">B站</el-menu-item>
-->
 <!--
 <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
 -->

   <!--
      <router-link to="/">Home</router-link> |
   -->

    </div>
    <router-view/>  <!--将路由vue的内容呈现在网页上-->
  </div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return {
            username:this.GLOBAL.username
        }
    },
    methods:{
       logout(){
           
            axios.post("/forum/logout").then(resp => {
      if(resp.data.success==true)
      { 
            window.sessionStorage.removeItem('token');
            window.sessionStorage.removeItem('username');
             this.$router.push('/');
             location.reload();//F5 
       }else{
         console.log(resp.data.msg);
       }

      })
    }
  }
    
}
</script>

<style>
body{
  font: 20px 华文中宋;
  color:#933;

}

</style>
