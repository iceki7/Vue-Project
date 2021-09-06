<<template>
    <div>
    <el-button @click="getTest" v-if=!gotTest style="display:block margin:auto">获取测试题</el-button>
    
    <div v-for="item in items">
    <br>
    <el-card class="box-card" style="width:1300px;margin:auto">
        <div>{{item.ask}}</div>
      <el-radio-group v-model=item.qs size="medium"  @change="updateAns(item.qid,$event)">
            <div v-for="(value,name,index) in item.option">
           
               <el-radio-button :label="name">{{name}}.{{value}}</el-radio-button>
             
            </div>
            </el-radio-group>
         
     
     
     <!--label -->
      <!--label相同代表radio状态必须同步-->

    </el-card>
    <br>
    </div>
    
      <el-button @click="submit">提交</el-button>
    </div>
</template>

<script>
   import axios from 'axios';
    import qs from'qs';
export default {
    data()
    {
        return{
            gotTest:false,
            radio: 3,
            items:[],
            test: 'asdasd'

        }

    },
    components:{
        com1:() => import('../components/card.vue')
    },
    methods:{
        
        updateAns(val1,val2)
        {
            let dt={
            token:sessionStorage.getItem("token"),
            qid:val1,
            ans:val2
            };
        //   console.log("答案更新,ans="+val1+' '+val2);
            console.log(dt);
            axios.post("/quiz/updateAns",qs.stringify(dt)).then(resp => {
      if(resp.data.success==false){
          console.log(resp.data.msg);
      }
        })

        },


        submit()
        {
            axios.post("/quiz/judgeTest",sessionStorage.getItem("token")).then(resp => {
      if(resp.data.success==false){
          this.$notify.error({
          title: '试卷提交失败',
          message: ('i', { style: 'color: #F00'}, resp.data.msg)
        });
      }else{
          
    this.$notify({
          title: '试卷提交成功',
          type:'success',
          message: ('i', { style: 'color: #F00'}, resp.data.score)
        });
        location.reload();
      }
        })
        },


        getTest()
        {
            let dt={
                token:this.GLOBAL.token,
                unit:0

            }
            
                axios.post("/quiz/getTest",qs.stringify(dt)).then(resp => {
      if(resp.data.success==true)
      {
          //将试卷的题号保存
    
      var ids=[]; 
       for(var p in resp.data.questionList){//遍历json数组时，这么写p为索引，0,1 
      ids.push(resp.data.questionList[p].qid);   
        }


        console.log("题目序列"+ids);
        window.sessionStorage.setItem("testIds",ids);
       this.items=resp.data.questionList;//存入本地对象

       this.gotTest=true;

      }
      else
      {
          console.log("获取题目失败。原因："+resp.data.msg);
      }
        })
    }
    }
}
</script>

<style scoped>

</style>