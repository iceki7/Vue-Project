<template>
    <div>
    <el-button @click="forum_post" style="display:block margin:auto">发帖</el-button>
 
   <el-input
  :rows="2"
  placeholder="请输入标题"
  v-model="title">
  </el-input>

    <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="content">
</el-input>

    </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
    data(){
        return {
            title:'',
            content:''
        }

    },
    methods:{
        forum_post(){
        
               let mydata={
                    token:this.GLOBAL.token,
                    title: this.title,
                    content:this.content
                }
                console.log(mydata);

                axios.post("/forum/posts",qs.stringify(mydata)).then(resp => {
                if(resp.data.success==true)
                {
                         this.$notify({
          title: '发帖成功',
          type:'success',
          message: ('i', { style: 'color: #F00'}, '')
        });
        

                }
                else{


                this.$notify.error({
                title: '发帖失败',
                message: ('i', { style: 'color: #F00'}, resp.data.msg)
                });


                }   
                })
        
    
        }}}
</script>

<style lang="scss" scoped>

</style>