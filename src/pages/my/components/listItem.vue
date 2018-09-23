@<template>
  <div class="listItem">
    <div class="listItemWrap">
      <div class="itemLeft"><slot name="left"></slot></div>
      <div class="itemRight"><slot name="right"></slot></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.listItem{
  padding: 40px 44px 0 36px;
  height: 260px;
  &:active{
    background: #fafafa;
  }
  .listItemWrap{
    display: flex;
    height: 100%;
    border-bottom: 1px solid rgb(233,233,233) ;/*no*/
    .itemLeft{
      margin-right: 30px;
      width: 240px;
      height: 160px;
      position: relative;
    }
  }
}
</style>
