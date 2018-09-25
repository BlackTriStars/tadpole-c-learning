@<template>
  <div class="submitSuccess">
    <div class="result">
      <div class="text">
        <h1>提交成功</h1>
        <p>感谢您对我们的问卷调查</p>
      </div>
    </div>
    <div class="button" @click="$router.go(-1)">返回</div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>

<style lang="less">
.submitSuccess{
  .result{
    width: 100%;
    height: 360px;
    background: url(../../assets/exam/scoreBg.png) no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    .text{
      color:rgba(49,196,1,1);
      h1{
        font-size:84px;
        font-weight:bold;
        line-height:128px;
      }
      p{
        font-size: 32px;
      }
    }
  }
  .button{
    width: 100%;
    height: 98px;
    border-radius: 7px;/*no*/
    border: 1px solid rgba(49,113,246,1);/*no*/
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:36px;
    color:rgba(49,113,246,1);
    margin-top: 20px;
  }
}
</style>
