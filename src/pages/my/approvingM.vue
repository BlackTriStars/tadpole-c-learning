@<template>
  <div class="approvingM">
    <myTab :currentName="'待审批'" @afterChange="afterChange">
      <myTabPane :name="'待审批'" :label="'待审批'">
        <div class="approvingWrap">
          <div class="item" v-for="(item,index) in penddingList" :key="index">
            <h4>{{item.title}} <i class="dot"></i></h4>
            <p>培训时间: {{item.time}}</p>
          </div>
        </div>
      </myTabPane>
      <myTabPane :name="'审批通过'" :label="'审批通过'">
        <div class="approvingWrap">
          <div class="item" v-for="(item,index) in resolveList" :key="index">
            <h4>{{item.title}} <i class="dot"></i></h4>
            <p>培训时间: {{item.time}}</p>
          </div>
        </div>
      </myTabPane>
      <myTabPane :name="'审批拒绝'" :label="'审批拒绝'">
        <div class="approvingWrap">
          <div class="item" v-for="(item,index) in rejectList" :key="index">
            <h4>{{item.title}} <i class="dot"></i></h4>
            <p>培训时间: {{item.time}}</p>
          </div>
        </div>
      </myTabPane>
    </myTab>
    <div class="button">
      全部审批
    </div>
  </div>
</template>

<script>
import myTab from '@/components/common/tab/tab'
import myTabPane from '@/components/common/tab/tabPane'
export default {
  data(){
    return {
      penddingList: [
        {
          title: '朱柳请假-标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 1
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '朱柳请假-标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 1
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '朱柳请假-标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 1
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '朱柳请假-标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 1
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '朱柳请假-标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 1
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '朱柳请假-标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 1
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0
        },
      ],
      resolveList: [
        {
          title: '标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 1
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
      rejectList: [
        {
          title: '标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 1
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
      ]
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
.approvingM{
  height: 100%;
  background: #f3f7ff;
  padding-bottom: 100px;
  .approvingWrap{
    .item{
      padding: 0 36px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: end;
      flex-direction: column;
      height: 162px;
      &:active{
        background: #fafafa;
      }
      &+.item{
        margin-top: 20px;
      }

      h4{
        font-size:32px;
        color:rgba(34,34,34,1);
        margin-bottom: 16px;
      }
      p.tip{
        font-size:24px;
        color:rgba(145,145,145,1);
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
  .button{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 98px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow:0px -4px 12px 0px rgba(0,0,0,0.04);
    &:active{
      background: rgba( 30, 30, 30, .1);
    }
  }
}

</style>
