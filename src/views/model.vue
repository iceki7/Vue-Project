<template>
<!--文章目录-内容浏览复用模板-->
    <div>
  <div v-for="item in items" :key="item">
    <br>
    <el-card v-if="!browsing" class="box-card" style="width:1300px;margin:auto">
      <h1>{{item.title}}</h1>
      <h2>{{item.date}}</h2>
        <a href="javascript:void(0);" @click="browse(item.uid)">详情</a>
 
    </el-card>

    </div>
            <el-card v-if="browsing" class="box-card" style="width:1300px;margin:auto">
      <div>
          <h1>{{this.content.title}}</h1>
          <h3>{{this.content.date}}</h3>
         <pre> {{this.content.text}}</pre>
      </div>

      <el-button @click="quit">返回</el-button>
    </el-card>
    

    
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
    data(){
        return{
          browsing:false,
            items:[],
            content:'',

        }
        
    },
        created(){
      axios.get("/article/home?category="+this.GLOBAL.category).then(resp => {
      if(resp.data.success==true){
          this.items=resp.data.articles;
    }
      })},
        methods:{
          browse(uidv)
          {
              let dt={
                  uid:uidv
                  };
              console.log(dt);
                axios.post("/article/browse",qs.stringify(dt)).then(resp => {
        if(resp.data.success==true)
      {
          console.log(resp.data);
          this.browsing=true;
          this.content=resp.data.content;
          console.log(this.browsing);
      }
                //this.$router.push('/classicalArt/home?uid='+uid);
          })
      },
      quit()
      {
        this.browsing=false;
      }
      }

}
</script>

<style lang="scss" scoped>

</style>