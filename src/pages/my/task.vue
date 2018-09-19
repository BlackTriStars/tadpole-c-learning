@<template>
  <div class="task">
    <myTab>
      <myTabPane :name="'1'" :label="'1'"></myTabPane>
      <myTabPane :name="'2'" :label="'2'"></myTabPane>
      <myTabPane :name="'3'" :label="'3'"></myTabPane>
    </myTab>
  </div>
</template>

<script>
import myTab from '@/components/common/tab/tab'
import myTabPane from '@/components/common/tab/tabPane'

export default {
  data(){
    return {

    }
  },
  components:{
    myTab,myTabPane
  }
}
</script>

<style>

</style>
