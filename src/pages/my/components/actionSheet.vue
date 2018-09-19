@<template>
  <div class="actionSheet" :class="{show: show}" @transitionend="handlerTransition" v-show="!disappear" @click="spaceClick">
    <div ref="wrap" class="wrap appear">
      <div class="actionSheetContainer">
        <div class="headTitle">
          <p>更多操作</p>
        </div>
        <div class="item">
          <p>拍照</p>
        </div>
        <div class="item">
          <p>我的相册</p>
        </div>
      </div>
      <div class="cancelContainer">
        <div class="item" @click="show = false;">
          <p>取消</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: false,
      disappear: true
    }
  },
  methods: {
    showSheet(){
      this.disappear = false
      this.$nextTick(()=>{
        this.show = true
      })
    },
    handlerTransition(){
      console.log('transitionEnd')
      this.disappear = !this.show
    },
    spaceClick(e){
      const wrap = this.$refs.wrap
      const target = e.target
      if(wrap.contains(target)) return
      this.show = false
    }
  },
  watch: {
    show: {
      immediate: true,
      handler(nv){
        const body = document.body
        if(nv){
          body.style.overflow = 'hidden'
        }else{
          body.style.overflow = 'auto'
        }
      }
    }
  }
}
</script>

<style lang="less">
.actionSheet{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column-reverse;
  display: flex;
  transition: all .3s;
  background: rgba(4,4,15,0.4);
  opacity: 0;
  &.show{
    opacity: 1;
    &>.appear{
      opacity: 1;
      transform: translateY(0);
    }
  }
  .wrap{
    transition: all .3s;
    transform: translateY(200px);
    opacity: 0;
  }
  .actionSheetContainer,.cancelContainer{
    background: #fff;
    width: 100%;
    .headTitle{
      height: 84px;
      line-height: 84px;
      font-size:28px;
      font-family:PingFangSC-Regular;
      color:rgba(145,145,145,1);
      border-bottom: 1px solid rgba(233,233,233,1);/*no*/
    }
    .item{
      height: 100px;
      line-height: 100px;
      p{
        font-size:32px;
        font-family:PingFangSC-Regular;
        color:rgba(46,138,241,1);
      }
      &:active{
        background: rgba(0,0,0,.1)
      }
      &+.item{
        border-top: 1px solid rgba(233,233,233,1);/*no*/
      }
    }
  }
  .cancelContainer{
    margin-top: 12px;
  }
}
</style>
