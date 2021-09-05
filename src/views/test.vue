<<template>
    <div>
    <el-button @click="getTest" style="display:block margin:auto">获取测试题</el-button>
    
    <div v-for="item in items">
    <br>
    <el-card class="box-card" style="width:1300px;margin:auto">
        <div>{{item.ask}}</div>
        <el-radio-group v-model=item.qid id=item.qid @change="updateAns">
            <el-radio-button v-for="op in item.option" :label=Object.values({op})></el-radio-button>
     <!--label -->
      <!--label相同代表radio状态必须同步-->

        </el-radio-group>
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
            radio: 3,
            items:[],
            test: 'asdasd'

        }

    },
    components:{
        com1:() => import('../components/card.vue')
    },
    methods:{
        updateAns(value,qid)
        {
            console.log(this.id+"答案更新,ans="+value);
            
        },
        submit()
        {
           
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