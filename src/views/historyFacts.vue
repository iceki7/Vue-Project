<template>
      <div>
        历史趣闻
 <model></model>
      </div>
</template>

<script>
import model from './model.vue'
export default {

  components:{model,},
  created()
  {
    this.GLOBAL.category=3
  }
}
</script>
