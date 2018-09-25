@<template>
  <div class="popup">
    <div class="mask">
      <div class="popupWrap">
        <div class="content">
          <slot name="content"></slot>
        </div>
        <div class="btnWrap">
          <div class="buttenLeft"><slot name="btnLeft"></slot></div>
          <div class="buttonRight"><slot name="btnRight"></slot></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  props:{}
}
</script>

<style lang="less">
.popup{
  user-select: none;
  .mask{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    justify-content: center;
    align-items: center;
    z-index: 99999;
    .popupWrap{
      width: 540px;
      min-height: 270px;
      text-align: center;
      border-radius: 16px;
      background: #fff;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .btnWrap{
        display: flex;
        height: 100px;
        margin-top: auto;
        border-top: 1px solid rgba(233,233,233,1);/*no*/
        &>div{
          flex: 1;
          &+div{
            border-left: 1px solid rgba(233,233,233,1);/*no*/
          }
        }
      }
    }
  }
}
</style>
