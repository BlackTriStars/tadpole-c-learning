@<template>
  <div class="tadPoleBtn" :style="{height, width}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  props:{
    height: {
      type: String,
      default: '100px'
    },
    width: {
      type: String,
      default: '100%'
    }
  }
}
</script>

<style lang="less">
.tadPoleBtn{
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(135deg,rgba(95,170,251,1) 0%,rgba(49,113,246,1) 100%);
  border-radius:7px;
  font-size: 36px;
  color: #fff;
  &:active{
    background:linear-gradient(135deg,rgba(95,170,251,.9) 0%,rgba(49,113,246,.9) 100%);
  }
}
</style>
