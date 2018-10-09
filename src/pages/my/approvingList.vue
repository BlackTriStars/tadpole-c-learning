@<template>
  <div class="approvingList">
    <div class="listWrap">
      <div class="leave" @click="$router.push({name: 'approvingM',params:{type: 'leave'}})">
        <div class="content">
          <div class="item">
            <i class="icon-leave"></i>
            <span>请假审批</span>
            <i class="icon-right"></i>
          </div>
        </div>
      </div>
      <div class="apply" @click="$router.push({name: 'approvingM', params:{type: 'apply'}})">
        <div class="content">
          <div class="item">
            <i class="icon-apply"></i>
            <span>报名审批</span>
            <i class="icon-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang='less'>
  .approvingList{
    height: 100%;
    background: rgb(243,247,255);
    .listWrap{
      background: #fff;
      &>div{
        .content{
          padding: 0 36px;
        }
        &:active{
          background: #fafafa;
        }
      }
      .leave{
        .item{
          border-bottom: 1px solid #E9E9E9;
        }
      }
      .item{
        height: 104px;
        display: flex;
        align-items: center;
        color: #333;
        font-size: 28px;
        i:nth-child(1){
          margin-right: 18px;
          font-size: 36px;
        }
        i.icon-right{
          margin-left: auto;
          color: #d5d5d5;
        }
      }
    }
  }
</style>
