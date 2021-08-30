<template>
    <div>

    </div>
</template>

<script>
    export default {
        methods:{
            classcialArt_home(){
   axios.post("/classicalArt/home",qs.stringify(mydata)).then(resp => {
             if(resp.data.error_code==200)
      {
           
      }
      else{
         
      }
   
            })
        }
    }
	
}
</script>

<style scoped>

</style>