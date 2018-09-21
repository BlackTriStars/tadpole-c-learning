@<template>
  <div class="exam">
    <myTab :currentName="'未通过'" @afterChange="afterChange">
      <myTabPane :name="'未通过'" :label="'未通过'">
        <div class="examWrap">
          <div class="item" v-for="(item, index) in failList" :key="index">
            <div class="desc">
              <h4>{{item.title}}</h4>
              <p>{{item.beginTime}}~{{item.endTime}}</p>
            </div>
            <div class="tip">
              <h4>共{{item.total}}道题</h4>
              <p>作答时间: {{item.time}}分钟</p>
            </div>
          </div>
        </div>
      </myTabPane>
      <myTabPane :name="'已通过'" :label="'已通过'">
        <div class="examWrap">
          <div class="item" v-for="(item, index) in successList" :key="index">
            <div class="desc">
              <h4>{{item.title}}</h4>
              <p>{{item.beginTime}}~{{item.endTime}}</p>
            </div>
            <div class="tip">
              <h4>共{{item.total}}道题</h4>
              <p>作答时间: {{item.time}}分钟</p>
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
      failList: [
        {
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          total: '18',
          time: '20'
        },{
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          total: '18',
          time: '20'
        },{
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          total: '18',
          time: '20'
        },
      ],
      successList: [
        {
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          total: '18',
          time: '20'
        },{
          title: '中国证劵法从业资格法律法规考试',
          beginTime: '2018.08.05',
          endTime: '06.26',
          total: '18',
          time: '20'
        }
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
.exam{
  height: 100%;
  .examWrap{
    padding: 0 36px;
    .item{
      display: flex;
      height: 152px;
      border-bottom: 1px solid rgb(233,233,233);
      justify-content: space-between;
      align-items: center;
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
      .tip{
        h4{
          color: rgba(153,153,153,1);
        }
        text-align: right;
      }
    }
  }
}

</style>
