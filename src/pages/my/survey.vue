@<template>
  <div class="survey">
    <myTab :currentName="'可参加'" @afterChange="afterChange">
      <myTabPane :name="'可参加'" :label="'可参加'">
        <div class="surveyWrap">
          <div class="item" v-for="(item, index) in joinList" :key="index" @click="go(item.id)">
            <div class="ct">
              <div class="desc">
                <h4>{{item.title}}</h4>
                <p>{{item.beginTime}}~{{item.endTime}}</p>
              </div>
            </div>
          </div>
        </div>
      </myTabPane>
      <myTabPane :name="'已完成'" :label="'已完成'">
        <div class="surveyWrap">
          <div class="item" v-for="(item, index) in finishedList" :key="index" @click="go(item.id, 'complete')">
          <div class="ct">
            <div class="desc">
              <h4>{{item.title}}</h4>
              <p>{{item.beginTime}}~{{item.endTime}}</p>
            </div>
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
      joinList: [
        {
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          id: 0
        },
        {
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          id: 1
        },
        {
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          id: 2
        },
        {
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          id: 3
        },
      ],
      finishedList: [
        {
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          id: 4
        },
        {
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          id: 5
        },
        {
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          id: 6
        },
        {
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          id: 7
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
    },
    go(id,status){
      this.$router.replace({name: 'surveyDetail',query:{id,complete: Boolean(status)}})
    }
  }
}
</script>

<style lang="less">
.survey{
  height: 100%;
  background: rgba(243,247,255,1);
  .surveyWrap{
    .item{
      padding: 0 36px;
      background: #fff;
      &:active{
        background: #fafafa;
      }
      .ct{
        display: flex;
        border-bottom: 1px solid rgb(233,233,233);
        justify-content: space-between;
        align-items: center;
        height: 152px;
        h4{
          font-size: 28px;
          margin-bottom: 8px;
        }
        p{
          font-size: 24px;
          color: #999;
        }
        .desc{
          text-align: left;
          h4{
            color: #333;
          }
        }
      }
    }
  }
}

</style>
