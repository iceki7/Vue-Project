<template>
      <div>
          基地介绍
 <model></model>
      </div>
</template>

<script>
import model from './model.vue'
export default {

  components:{model,},
  created()
  {
    this.GLOBAL.category=1
  }
}
</script>
