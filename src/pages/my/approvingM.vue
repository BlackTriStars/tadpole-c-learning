@<template>
  <div class="approvingM">
    <myTab :currentName="'待审批'" @afterChange="afterChange">
      <myTabPane :name="'待审批'" :label="'待审批'">
        <div class="approvingWrap pendding">
          <div class="item" v-for="(item,index) in penddingList" :key="index" @click="handlerPendding(item)">
            <h4>{{item.title}} <i class="dot" v-show="item.status"></i></h4>
            <p>培训时间: {{item.time}}</p>
          </div>
        </div>
      </myTabPane>
      <myTabPane :name="'审批通过'" :label="'审批通过'">
        <div class="approvingWrap resolve">
          <div class="item" v-for="(item,index) in resolveList" :key="index">
            <div class="ct">
              <h4>{{item.title}}</h4>
              <p>培训时间: {{item.time}}</p>
            </div>
             <img src="../../assets/approve/resolve.png">
          </div>
        </div>
      </myTabPane>
      <myTabPane :name="'审批拒绝'" :label="'审批拒绝'">
        <div class="approvingWrap reject">
          <div class="item" v-for="(item,index) in rejectList" :key="index">
            <div class="ct">
              <h4>{{item.title}}</h4>
              <p>培训时间: {{item.time}}</p>
            </div>
            <img src="../../assets/approve/reject.png">
          </div>
        </div>
      </myTabPane>
    </myTab>
    <div class="button" @click="handlerAllApproving">
      全部审批
    </div>
    <popup class="popupApproving" v-if="showPopup">
      <div slot="content">
        <h4>{{currentItem.title}}</h4>
        <p v-if="currentItem.time">培训时间: {{currentItem.time}}</p>
        <p v-else>{{currentItem.tip}}</p>
      </div>
      <div slot="btnLeft" class="btnLeft" @click="approveReject(currentItem.id)">审批拒绝</div>
      <div slot="btnRight" class="btnRight" @click="approveResolve(currentItem.id)">审批通过</div>
    </popup>
  </div>
</template>

<script>
import myTab from '@/components/common/tab/tab'
import myTabPane from '@/components/common/tab/tabPane'
import popup from './components/popup'
export default {
  data(){
    return {
      penddingList: [
        {
          title: '朱柳请假-标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 1,
          id:0
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0,
          id:1
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0,
          id:2
        },
        {
          title: '朱柳请假-标准普通话培训第三节',
          time: '2018.08.31 22:53',
          status: 1,
          id:3
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0,
          id:4
        },
        {
          title: '名字-课程名称',
          time: '2018.08.31 22:53',
          status: 0,
          id:5
        }
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
      ],
      showPopup: false,
      currentItem: {
        title: '',
        time: '',
        id: ''
      }
    }
  },
  mounted() {
    const {type} = this.$route.params
    console.log(type)
  },
  components:{
    myTab,myTabPane,popup
  },
  methods:{
    //  切换tab触发事件
    afterChange(name){
      console.log(name)
    },
    //  审批拒绝
    approveReject(id){
      this.showPopup = false
    },
    //  审批通过
    approveResolve(id){
      this.showPopup = false
    },
    handlerPendding(item){
      this.showPopup = true
      this.currentItem = item
    },
    handlerAllApproving(){
      this.showPopup = true
      this.currentItem = {
        title: '所有审批',
        tip: '对全部申请进行批量审批'
      }
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
      .dot{
        background: #FF4040;
        width: 16px;
        height: 16px;
        display: inline-block;
        border-radius: 50%;
        transform: translate(-14px,-16px);
      }
    }
    &.pendding{
      .item{
        display: flex;
        justify-content: center;
        align-items: end;
        flex-direction: column;
      }
    }
    &.resolve,&.reject{
      .item{
        display: flex;
        justify-content: space-between;
        &>.ct{
          display: flex;
          justify-content: center;
          align-items: end;
          flex-direction: column;
        }
        &>img{
          display: inline-block;
          height: 100%;
          width: auto;
          transform: translateX(36px);
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
    font-size:32px;
    color:rgba(49,113,246,1);
    &:active{
      background: rgba( 30, 30, 30, .1);
    }
  }
  .popupApproving{
    .content{
      padding-top: 40px;
      h4{
        font-size: 36px;
        color: #000;
        margin-bottom: 10px;
        padding: 0 10px;
      }
      p{
        font-size: 32px;
        color: rgb(145,145,145);
      }
    }
    .btnRight,.btnLeft{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      &:active{
        background: #ccc;
      }
    }
    .btnLeft{
      color: #FF4040;
    }
    .btnRight{
      color: #3171F6;
    }
  }
}

</style>
