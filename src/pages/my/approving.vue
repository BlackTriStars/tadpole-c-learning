@<template>
  <div class="approving">
    <myTab :currentName="'请假审批'" @afterChange="afterChange">
      <myTabPane :name="'请假审批'" :label="'请假审批'">
        <div class="approvingWrap">
          <div class="item" v-for="(item, index) in leaveList" :key="index">
            <div class="desc">
              <h4>{{item.title}}</h4>
              <p class="tip">培训时间: {{item.time}}</p>
            </div>
            <div class="status" :class="[item.status === 0 ? 'success' : item.status === 1 ? 'underWay' : 'fail' ]">
              <div class="button">{{item.status === 0 ? '审批通过' : item.status === 1 ? '正在审批' : '审批拒绝'}}</div>
            </div>
          </div>
        </div>
      </myTabPane>
      <myTabPane :name="'报名审批'" :label="'报名审批'">
        <div class="approvingWrap">
          <div class="item" v-for="(item, index) in applyList" :key="index">
            <div class="desc">
              <h4>{{item.title}}</h4>
              <p class="tip">培训时间: {{item.time}}</p>
            </div>
            <div class="status" :class="[item.status === 0 ? 'success' : item.status === 1 ? 'underWay' : 'fail' ]">
              <div class="button">{{item.status === 0 ? '审批通过' : item.status === 1 ? '正在审批' : '审批拒绝'}}</div>
            </div>
          </div>
        </div>
      </myTabPane>
    </myTab>
  </div>
</template>

<script>
import myTab from '@/components/common/tab/tab'
import myTabPane from '@/components/common/tab/tabPane'
export default {
  data(){
    return {
      leaveList: [
        {
          title: '标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 1
        },
        {
          title: '标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 2
        },
      ],
      applyList: [
        {
          title: '标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 2
        },
        {
          title: '标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 1
        },
      ],
    }
  },
  components:{
    myTab,myTabPane
  },
  methods:{
    //  切换tab触发事件
    afterChange(name){
      console.log(name)
    }
  }
}
</script>

<style lang="less">
.approving{
  height: 100%;
  background: rgba(243,247,255,1);
  .approvingWrap{
    .item{
      padding: 0 36px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 162px;
      &:active{
        background: #fafafa;
      }
      &+.item{
        margin-top: 20px;
      }
      .desc{
        text-align: left;
        h4{
          font-size:32px;
          color:rgba(34,34,34,1);
          margin-bottom: 16px;
        }
        p.tip{
          font-size:24px;
          color:rgba(145,145,145,1);
        }
      }
      .status{
        width: 150px;
        height: 56px;
        border-radius: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:28px;
        &.success{
          color:rgba(49,196,1,1);
          background:rgba(49,196,1,0.15);
        }
        &.underWay{
          background:rgba(0,0,0,0.15);
          color:rgba(145,145,145,1);
        }
        &.fail{
          background:rgba(255,64,64,0.15);
          color:rgba(255,64,64,1);
        }
      }
    }
  }
}

</style>
