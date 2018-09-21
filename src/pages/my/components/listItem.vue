@<template>
  <div class="listItem">
    <div class="itemLeft"><slot name="left"></slot></div>
    <div class="itemRight"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.listItem{
  display: flex;
  padding-top: 40px;
  height: 260px;
  border-bottom: 1px solid rgb(233,233,233) ;/*no*/
  .itemLeft{
    margin-right: 30px;
    width: 240px;
    height: 160px;
    position: relative;
  }
}
</style>
