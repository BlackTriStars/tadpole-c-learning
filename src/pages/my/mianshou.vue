@<template>
  <div class="task">
    <myTab :currentName="'a'" @afterChange="afterChange">
      <myTabPane :name="'a'" :label="'可参加'">
        <div class="taskWrap">
          <listItem v-for="(item, index) in canJoinList" :key="index"  @click.native="$router.push({name: 'mianshouLesson', params: {online: false}})">
            <template slot="left">
              <div class="imgWrap">
                <img :src="item.img" alt="">
                <p class="tip" v-show="item.join"><span>{{item.join}} 人已报名</span></p>
              </div>
            </template>
            <template slot="right">
              <h4>{{item.title}}</h4>
              <p class="ellipsis">{{item.text}}</p>
              <p>培训时间: {{item.time}}</p>
            </template>
          </listItem>
        </div>
      </myTabPane>
      <myTabPane :name="'b'" :label="'进项中'">
        <div class="taskWrap">
          <listItem v-for="(item, index) in underWayList" :key="index">
            <template slot="left">
              <img :src="item.img" alt="">
            </template>
            <template slot="right">
              <h4>{{item.title}}</h4>
              <p class="ellipsis">{{item.text}}</p>
              <p>培训时间: {{item.time}}</p>
            </template>
          </listItem>
        </div>
      </myTabPane>
      <myTabPane :name="'c'" :label="'已完成'">
        <div class="taskWrap">
          <listItem v-for="(item, index) in finishedList" :key="index">
            <template slot="left">
              <img :src="item.img" alt="">
            </template>
            <template slot="right">
              <h4>{{item.title}}</h4>
              <p class="ellipsis">{{item.text}}</p>
              <p>培训时间: {{item.time}}</p>
            </template>
          </listItem>
        </div>
      </myTabPane>
    </myTab>
  </div>
</template>

<script>
import myTab from '@/components/common/tab/tab'
import myTabPane from '@/components/common/tab/tabPane'
import listItem from "./components/listItem.vue";
export default {
  data(){
    return {
      canJoinList: [
        {
          img: require('../../assets/index/task.png'),
          title: '标准普通话培训第三节',
          text: '我们的文案辅助解释，该课程都有些…',
          time: '2018.08.05～06.26',
          join: '218'
        },{
          img: require('../../assets/index/task.png'),
          title: '标准普通话培训第三节',
          text: '我们的文案辅助解释，该课程都有些…',
          time: '2018.08.05～06.26',
        },
      ],
      underWayList: [{
          img: require('../../assets/index/task.png'),
          title: '标准普通话培训第三节',
          text: '我们的文案辅助解释，该课程都有些…',
          time: '2018.08.05～06.26',
        },{
          img: require('../../assets/index/task.png'),
          title: '标准普通话培训第三节',
          text: '我们的文案辅助解释，该课程都有些…',
          time: '2018.08.05～06.26',
        },],
      finishedList: [{
          img: require('../../assets/index/task.png'),
          title: '标准普通话培训第三节',
          text: '我们的文案辅助解释，该课程都有些…',
          time: '2018.08.05～06.26',
        },{
          img: require('../../assets/index/task.png'),
          title: '标准普通话培训第三节',
          text: '我们的文案辅助解释，该课程都有些…',
          time: '2018.08.05～06.26',
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
.task {
  height: 100%;
  .taskWrap {
    // padding: 0 44px 0 36px;
    img {
      width: 100%;
      height: 100%;
    }
    .itemLeft {
      .imgWrap {
        position: relative;
      }
      .tip {
        position: absolute;
        width: 100%;
        height: 32px;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        font-size: 24px;
        & > span {
          position: absolute;
          left: 8px;
          top: 50%;
          display: inline-block;
          transform-origin: left;
          transform: translateY(-50%) scale(0.72);
          white-space: nowrap;
          font-family: PingFangSC-Regular;
        }
      }
    }
    .itemRight {
      text-align: left;
      font-size: 24px;
      color: rgba(145, 145, 145, 1);
      h4 {
        color: rgba(34, 34, 34, 1);
        font-size: 32px;
      }
      p {
        margin-top: 16px;
      }
    }
  }
}
</style>
