<template>
      <div>
   
    <div v-for="item in items" :key="item">
    <br>
    <el-card v-if="!browsing" class="box-card" style="width:1300px;margin:auto">
        <el-button @click="browse(item.uid)">{{item.title}}-{{item.date}}</el-button>
 
    </el-card>


    </div>

        <el-card v-if="browsing" class="box-card" style="width:1300px;margin:auto">
      <div>
          <h1>{{this.content.title}}</h1>
          <h3>{{this.content.date}}</h3>
         <pre> {{this.content.text}}</pre>
      </div>
    </el-card>
    
    
      </div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
export default {
       data()
    {
        return{
            browsing:false,
            radio: 3,
            items:[],
            content:'',

        }

    }, created(){
      axios.get("/classicalArt/home").then(resp => {
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
                axios.post("/classicalArt/browse",qs.stringify(dt)).then(resp => {
        if(resp.data.success==true)
      {
          console.log(resp.contentType);
          this.browsing=true;
          this.content=resp.data.content;
      }
                //this.$router.push('/classicalArt/home?uid='+uid);
          })
      }
      }

}
</script>

<style lang="scss" scoped>

</style>