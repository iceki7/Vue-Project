<!-- vbase-css -->


<template>
      <el-card class="box-card"  id="top">
  注册
 
    <div class="sub">
  <span>用户名&nbsp;</span><input type="text" placeholder="用户名" v-model="username">
    </div>
    <div class="sub">
  <span>邮箱&nbsp;</span><input type="text" placeholder="邮箱" v-model="email">
    </div>
    <div class="sub">
     <span>密码&nbsp;&nbsp;</span><input type="password"   v-model="password">
    </div>
    <div class="sub">
     <span>确认密码</span><input type="password" v-model="conpassword">
    </div>
      


  
      <el-button @click="register" style="display:block margin:auto">注册</el-button>
    
    <a href="#/login">已有账号？立即登录</a>
      </el-card>
</template>

<script>
    import axios from 'axios';
    import qs from'qs';
    export default {
        data() {
            return {
               username: '',
               email:'',
               password: '',
               conpassword:''
            }
        },
        methods: {
            register() {
                if(this.username==''||this.email==''||this.password==''||this.conpassword=='')
                {
                     this.$notify({
                    title: '请输入完整信息',
                    type:'warning',
                    message: ('i', { style: 'color: #F00'}, '')});
                    return;
                }
                if(this.password!=this.conpassword)
                {
                     this.$notify({
                    title: '两次密码不一致',
                    type:'warning',
                    message: ('i', { style: 'color: #F00'}, '')});
                    return;
                }
                let mydata={
                    username: this.username,
                    password: this.password,
                    conpassword:this.conpassword,
                    email:this.email
                }
                axios.post("/forum/register",mydata).then(resp => {

      if(resp.data.success==true)
      {
             this.$notify({
          title: '注册成功',
            type:'success',
          message: ('i', { style: 'color: #F00'}, '')
        });
      }
      else{
          this.$notify.error({
          title: '注册失败',
          message: ('i', { style: 'color: #F00'}, resp.data.msg)
        });
      }
   
	//  console.log(this.notifyList)
 
	}).catch(err => {
	  console.log(err)
	});         

              
            }
        },
    }
  
</script>

<style scoped src="../components/common1.css">


</style>