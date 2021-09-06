
<template>

  <div class="home">

 <el-card class="box-card" style="width:1400px;margin:auto;">
<el-carousel height='700px'>
      <el-carousel-item v-for="item in images" :key="item">
	<p class="italictext">{{item.desc}}</p>
             <el-image
      style="height: 450px width:800px;"
      :src='item.url'
      alt="无图片"></el-image>
      </el-carousel-item> 
    </el-carousel>
 </el-card>

  <br><br><br><br>

  <el-card class="box-card" style="width:1300px;margin:auto;text-align:center" id="zone1">
  <div slot="header" class="clearfix" style="text-align:center">
    <h1 style="margin:auto">-&nbsp;快捷操作&nbsp;-</h1>

  </div>
    <el-button type="warning" round>🎮<br>游戏</el-button>
    <el-button type="warning" round>❓<br>答题</el-button>
    <el-button type="warning" round>💬<br>论坛</el-button>
    <el-button type="warning" round>🏠<br>基地介绍</el-button>
    <el-button type="warning" round>🗺<br>地图</el-button>
     <el-button type="warning" round>⛓<br>购票链接</el-button>
  <!--
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
    
  </div>
  -->
</el-card>


<br><br><br><br>
   
  <el-card class="box-card" style="width:1300px;margin:auto">
  <div slot="header" class="clearfix" style="text-align:center">
    <h1>-&nbsp;关于我们&nbsp;-</h1>
    <!--
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  -->
  </div>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple">
     <h2>-&nbsp;📸照片合集&nbsp;-</h2></div></el-col>
  <el-col :span="12">
     <h2>-&nbsp;🏆成果展示&nbsp;-</h2>
     <a href="/">★“百年峥嵘岁月”故事汇编</a>
     <a href="/">★“建党百年”主题微电影</a>
     <a href="/">★关于红色精神的问卷与采访</a>
     <a href="/">★“‘四历史’”进校园宣讲稿集</a>
     <a href="/">★“百年峥嵘岁月”故事汇编</a>
 
    </el-col>
</el-row>
  <!--
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>

  -->

</el-card>

<br><br><br><br><br>
<el-row>
  <el-col :span="20"><el-divider content-position="left">北京科技大学忆寻<br>&nbsp;煜熠南昌实践团</el-divider></el-col>
  <el-col :span="4"><img src="../assets/logo.png"></el-col>
</el-row>

<br><br><br><br><br>

  </div>


   
     
</template>

<script>



 
// @ is an alias to /src
  export default {
    name: "Carousel",
    data() {
      return {
        images: [
          { url: require("@/assets/p1.jpg"),
          desc:'pic1'},
          { url: require("@/assets/p3.jpg"),
          desc:'pic2'}
        ],
      };
    },
  };
</script>

<style scoped>
*{

  text-decoration: none;
  font-size:20px;
}

a{
  color:crimson;
  display: block;
}
a:hover{
  background-color:seashell;
}
.el-button{
  font:bold 20px 华文中宋;
}
</style>