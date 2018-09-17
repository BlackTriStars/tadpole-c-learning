<template>
  <div class="index">
    <!-- 顶部搜索 -->
    <search></search>

    <!-- 轮播图 -->
    <div class="swipe">
      <swiper style="height: 100%" :options="swiperOption">
        <swiper-slide class="swipeItem">
          <div>
            <span>夏日啤酒运营（初级证书）</span>
          </div>
          <img src="../assets/index/1.png" alt="">
        </swiper-slide>
        <swiper-slide class="swipeItem">
          <div>
            <span>夏日啤酒运营（初级证书）</span>
          </div>
          <img src="../assets/index/2.png" alt="">
        </swiper-slide>
        <swiper-slide class="swipeItem">
          <div>
            <span>夏日啤酒运营（初级证书）</span>
          </div>
          <img src="../assets/index/3.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <!-- 签到和积分 -->
    <div class="show">
      <div class="sign">
        <img src="../assets/index/sign.png" alt="" srcset="">
        <span>{{sign}}</span>
      </div>
      <div class="jifen">
        <img src="../assets/index/jifen.png" alt="">
        <span>我的积分：{{jifen}}</span>
      </div>
    </div>

    <!-- 面授 -->
    <div class="task">
      <div class="theme">
        <span>面授</span>
        <img src="../assets/common/right.png" alt="">
      </div>
      <div class="main">
        <div class="item" v-for="(item, index) in task" :key="index">
          <img :src="item.imgurl" alt="">
          <div class="line">
            {{item.num}}人已报名
          </div>
          <div class="neirong">
            {{item.content}}
          </div>
          <div class="time">
            {{item.time}}
          </div>
        </div>
      </div>
    </div>

    <!-- 课程 -->
    <div class="lesson">
      <div class="theme">
        <span>课程</span>
        <img src="../assets/common/right.png" alt="">
      </div>
      <div class="main">
        <div class="item" v-for="(item, index) in lesson" :key="index">
          <img :src="item.imgurl" alt="">
          <div class="line">
            {{item.num}}人已报名
          </div>
          <div class="neirong">
            {{item.content}}
          </div>
          <div class="time">
            {{item.time}}
          </div>
        </div>
      </div>
    </div>



    <!-- 考试 -->
    <div class="test">
       <div class="theme">
        <span>考试</span>
        <img src="../assets/common/right.png" alt="">
      </div>
      <div class="main">
        <div class="item"></div>
      </div>
    </div>

  </div>

</template>

<script>
import search from "@/components/common/search.vue";
export default {
  name: "",
  data() {
    return {
      sign: "您今天尚未签到",
      jifen: "126",
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoPlay: true
      },
      task: [
        {
          content: "标准普通话培训第三节",
          imgurl: require("../assets/index/1.png"),
          num: "218",
          url: "", //跳转的地址
          time: "2018.08.05~06.26"
        },
        {
          content: "标准普通话培训第三节",
          imgurl: require("../assets/index/1.png"),
          num: "218",
          url: "", //跳转的地址
          time: "2018.08.05~06.26"
        },
        {
          content: "标准普通话培训第三节",
          imgurl: require("../assets/index/1.png"),
          num: "218",
          url: "", //跳转的地址
          time: "2018.08.05~06.26"
        },
        {
          content: "标准普通话培训第三节",
          imgurl: require("../assets/index/1.png"),
          num: "218",
          url: "", //跳转的地址
          time: "2018.08.05~06.26"
        }
      ],
      lesson:[
        {
          content: "国家建造师24课时培训",
          imgurl: require("../assets/index/2.png"),
          num: "218",
          url: "", //跳转的地址
          time: "2018.08.05~06.26"
        },
        {
          content: "国家建造师24课时培训",
          imgurl: require("../assets/index/2.png"),
          num: "218",
          url: "", //跳转的地址
          time: "2018.08.05~06.26"
        },
        {
          content: "国家建造师24课时培训",
          imgurl: require("../assets/index/2.png"),
          num: "218",
          url: "", //跳转的地址
          time: "2018.08.05~06.26"
        },
        {
          content: "国家建造师24课时培训",
          imgurl: require("../assets/index/2.png"),
          num: "218",
          url: "", //跳转的地址
          time: "2018.08.05~06.26"
        }
      ],
      test:[
        {
          
        }
      ]
    };
  },
  components: {
    search
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.theme {
  width: 100%;
  height: 0.746667rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.373333rem;
  span {
    font-size: 0.533333rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  img {
    width: 0.373333rem;
  }
}

.main {
  width: 100%;

  .item {
    width: 4.266667rem;
    position: relative;
    img {
      width: 100%;
      height: 2.88rem;
    }
    .line {
      position: absolute;
      top: 2.453333rem;
      width: 100%;
      height: 0.426667rem;
      display: flex;
      align-items: center;
      background: rgba(0, 0, 0, 0.6);
      font-size: 0.32rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      padding-left: 4px;
    }
    .neirong {
      font-size: 0.373333rem;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 0.533333rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 0.266667rem;
    }
    .time {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 0.32rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 0.453333rem;
      margin-top: 2px;
    }
  }
}

.swipe {
  height: 5.333333rem;
  margin-top: 0.266667rem;
  .swipeItem {
    position: relative;
    div {
      display: block;
      position: absolute;
      font-size: 0.373333rem;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      width: 100%;
      height: 0.96rem;
      background: rgba(0, 0, 0, 1);
      opacity: 0.4;
      bottom: 0;
      display: flex;
      align-items: center;
      span {
        position: absolute;
        left: 0.4rem;
      }
    }
    img {
      height: 5.333333rem;
    }
  }
  .swiper-pagination {
    position: absolute;
    left: 8rem;
    width: 20%;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
}
.show {
  width: 9.04rem;
  margin: 0.533333rem auto 0;
  display: flex;
  justify-content: space-between;
  .jifen,
  .sign {
    position: relative;
    img {
      width: 4.373333rem;
    }
    span {
      position: absolute;
      font-size: 0.32rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      top: 1.333333rem;
      left: 0.426667rem;
    }
  }
}

// 面授部分
.task,.lesson,{
  width: 9.04rem;
  margin: 0.906667rem auto 0;
  .main {
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    .item {
      display: inline-table;
      vertical-align: top;
      margin-right: .266667rem;
    }
  }
}

.test{
  width: 9.04rem;
  margin: 0.906667rem auto 0;
  .main{
    border-top: 1px solid rgba(255,255,255,1)
  }
}
</style>

