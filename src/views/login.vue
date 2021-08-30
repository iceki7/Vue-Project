<!-- vbase-css -->


<template>

    <el-card class="box-card"  id="top">
  登录
 
    <div class="sub">
  <span>用户名    </span>
            <input type="text" placeholder="用户名/邮箱" v-model="name">
    </div>
    <div class="sub">

        <span>密码  </span>

            <input type="password"   v-model="password">
    </div>
      


  
      <el-button @click="login" style="display:block margin:auto">登录</el-button>
    
    <a href="#/reg">还没有账号？立即注册</a>
    </el-card>
</template>

<script>
    import axios from 'axios';
    import qs from'qs';
    export default {
        data() {
            return {
               name: '',
               password: ''
            }
        },
        methods: {
            login() {
                let mydata={
                    username: this.username,
                    password: this.password
                }

        if(this.name==''||this.password=='')
        {
               this.$notify({
          title: '请填写完整信息',
          type:'warning',
          message: ('i', { style: 'color: #F00'}, '')
          });
        
        return;

        }


                axios.post("/forum/login",qs.stringify(mydata)).then(resp => {
      if(resp.data.success==true)
      {
             this.$notify({
          title: '登录成功',
          type:'success',
          message: ('i', { style: 'color: #F00'}, '')
        });
            window.sessionStorage.setItem('token',resp.data.token);
            window.sessionStorage.setItem('username',resp.data.username);
            console.log("username:"+resp.data.username);

             this.$router.push('/');
             location.reload();//F5 
      }
      else{
          this.$notify.error({
          title: '登录失败',
          message: ('i', { style: 'color: #F00'}, this.notifyList.message)
        });
      }
   
	//  console.log(this.notifyList)
 
	}).catch(err => {
	  console.log(err)
	})

                
            }
        },
    }
</script>

<style scoped src="../components/common1.css">


</style>