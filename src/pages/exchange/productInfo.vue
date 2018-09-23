<template>
  <div class="productInfo">
    <div class="title">
      <i class="icon-left" @click="$router.go(-1)">
      </i>
      <h1>
        {{title}}
      </h1>
      <div class="rightBtn">

        <div class="cart" v-if="productNum>0">
          <img src="../../assets/exchange/cart.png" alt="">
          <span class="cycle">{{productNum}}</span>
        </div>
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="swipe">
      <swiper style="height: 100%" :options="swiperOption">
        <swiper-slide class="swipeItem">
          <img src="../../assets/index/1.png" alt="">
        </swiper-slide>
        <swiper-slide class="swipeItem">
          <img src="../../assets/index/2.png" alt="">
        </swiper-slide>
        <swiper-slide class="swipeItem">
          <img src="../../assets/index/3.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="info">
      <div class="content">{{info.content}}</div>
      {{info.info}}
    </div>

    <div class="jifenInfo">
      <div class="surplus">
        剩余积分
        <i style="color:#3171F6;margin-left:49px;">{{jifenInfo.surplus}}</i>
        <i style="color:black">积分</i>
      </div>
      <div class="surplus">
        消耗积分
        <i style="color:#3171F6;margin-left:49px;">{{jifenInfo.consume}}</i>
        <i style="color:black">积分</i>
      </div>
      <div class="surplus">
        剩余数量
        <i style="margin-left:49px;">{{jifenInfo.num}}</i>
        <i style="color:black">件</i>
      </div>
    </div>

  </div>

</template>


<script>
export default {
  data() {
    return {
      title: "商品详情",
      productNum: "3",
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoPlay: true
      },
      info: {
        content: "果蔬脆兑换商品名字限制字数",
        info:
          "商品简介信息，已经出来了，之前改的GTO系列的喇叭， 现在加了低音炮，老板直接给的6.18年中大促价格。"
      },
      jifenInfo: {
        surplus: "13",
        consume:"1",
        num:"8"
      }
    };
  }
};
</script>

<style lang="less" scoped>
.productInfo {
  padding-top: 1.173333rem !important;
  height: 100%;
  width: 100%;
  background: rgba(243, 247, 255, 1);
  box-sizing: border-box;
}
.title {
  background: #fff;
  width: 100%;
  height: 1.173333rem;
  color: rgba(34, 34, 34, 1);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgba(233, 233, 233, 1);
  i {
    font-size: 36px;
    width: 100px;
    margin-right: 204px;
    transform: translateX(-20px);
  }
  h1 {
    font-weight: bold;
    font-family: PingFangSC-Medium;
    font-size: 36px;
  }
  .rightBtn {
    width: 178px;
    display: flex;
    justify-content: center;
    .jifen {
      display: flex;
      align-items: center;
      img {
        width: 36px;
        height: 38px;
        margin-right: 16px;
      }
      .jifenNum {
        font-size: 32px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(49, 113, 246, 1);
        line-height: 44px;
      }
    }
    .cart {
      position: relative;
      img {
        width: 40px;
        height: 40px;
        margin-left: 36px;
        margin-right: 36px;
      }
      .cycle {
        position: absolute;
        top: -30%;
        left: 62px;
        width: 28px;
        border-radius: 50%;
        height: 28px;
        background: rgba(255, 64, 64, 1);
        font-size: 20px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 20px;
      }
    }
  }
}

.swipe {
  img {
    height: 480px;
  }
  .swiper-pagination-bullet-active {
    background-color: black !important;
  }
}

// .line {
//   height: 20px;
//   background: rgba(243, 247, 255, 1);
// }

.info {
  margin-top: 20px;
  height: 196px;
  text-align: left;
  line-height: 196px;
  padding-left: 36px;
  font-size: 26px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 40px;
  background-color: #fff;
  padding-top: 30px;
  padding-right: 26px;
  .content {
    font-size: 32px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 44px;
    white-space: nowrap;
    width: 380px;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 12px;
  }
}

.jifenInfo {
  font-size: 28px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  text-align: left;
  background-color: white;
  margin-top: 20px;;
  .surplus {
    width: 678px;
    margin: 0 auto;
    height: 88px;
    border-bottom: 2px solid rgba(233, 233, 233, 1);
    line-height: 88px;
  }
}
</style>

