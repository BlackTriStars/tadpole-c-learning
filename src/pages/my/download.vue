@<template>
  <div class="download">
    <div class="taskWrap">
      <listItem v-for="(item, index) in underWayList" :key="index">
        <template slot="left">
          <img :src="item.img" alt="">
        </template>
        <template slot="right">
          <h4>{{item.title}}</h4>
          <p class="ellipsis">{{item.text}}</p>
          <p>人气: {{item.sentiment}}</p>
        </template>
      </listItem>
    </div>
  </div>
</template>

<script>
import myTab from '@/components/common/tab/tab'
import myTabPane from '@/components/common/tab/tabPane'
import listItem from "./components/listItem.vue";
export default {
  data(){
    return {
      underWayList: [{
          img: require('../../assets/index/task.png'),
          title: '标准普通话培训第三节',
          text: '我们的文案辅助解释，该课程都有些…',
          sentiment: '20',
        },{
          img: require('../../assets/index/task.png'),
          title: '标准普通话培训第三节',
          text: '我们的文案辅助解释，该课程都有些…',
          sentiment: '20',
        },],
      finishedList: [{
          img: require('../../assets/index/task.png'),
          title: '标准普通话培训第三节',
          text: '我们的文案辅助解释，该课程都有些…',
          sentiment: '20',
        },{
          img: require('../../assets/index/task.png'),
          title: '标准普通话培训第三节',
          text: '我们的文案辅助解释，该课程都有些…',
          sentiment: '20',
        },],
    }
  },
  components:{
    myTab,myTabPane,listItem
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
.download{
  height: 100%;
  .taskWrap{
    img{
      width: 100%;
      height: 100%;
    }
    .itemLeft{
      .imgWrap{
        position: relative;
      }
      .tip{
        position: absolute;
        width: 100%;
        height: 32px;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,.6);
        color: #fff;
        font-size: 24px;
        &>span{
          position: absolute;
          left: 8px;
          top: 50%;
          display: inline-block;
          transform-origin: left;
          transform:translateY(-50%) scale(.72);
          white-space: nowrap;
          font-family:PingFangSC-Regular;
        }
      }
    }
    .itemRight{
      text-align: left;
      font-size:24px;
      color:rgba(145,145,145,1);
      h4{
        color:rgba(34,34,34,1);
        font-size:32px;
      }
      p{
        margin-top: 16px;
      }
    }
  }
}

</style>
