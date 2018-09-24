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
      <div class="buy surplus">
        <span>购买数量</span>
        <div class="count">
          <button class="add" @click="plus">+</button>
          <span class="num">{{num}}</span>
          <button class="count" @click="minus">-</button>
        </div>
      </div>
    </div>

    <div class="address">
      <div class="address_info">
        <div class="top">
          <div class="name">{{address_info.name}}</div>
          <div class="phone">{{address_info.phone}}</div>
        </div>
        <div class="bottom">
          <div class="staus" v-if="address_info.staus">默认</div>
          <div class="loc">{{address_info.loc}}</div>
        </div>
      </div>
      <span class="icon-right"></span>

    </div>

    <div class="foot">
      <div class="toCart">加入购物车</div>
      <div class="duihuan">立即兑换</div>
    </div>
  </div>

</template>


<script>
export default {
  data() {
    return {
      title: "商品详情",
      productNum: "3",
      num: "0",
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
        consume: "1",
        num: "8"
      },
      address_info: {
        name: "张先生",
        phone: "18221745618",
        staus: true,
        loc: "上海市长宁区将建路138号32F502"
      }
    };
  },
  mounted() {},
  methods: {
    minus() {
      this.num--;
      if (this.num < 0) {
        this.num = 0;
      }
      // this.$emit("input", { res: this.num, other: "--" });
      console.log(this.$emit);
    },
    plus() {
      this.num++;
      if (this.num > this.jifenInfo.num) {
        this.num--;
      }
    }
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
  margin-bottom: 100px;
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
  margin-top: 20px;
  .surplus {
    width: 678px;
    margin: 0 auto;
    height: 88px;
    border-bottom: 2px solid rgba(233, 233, 233, 1);
    line-height: 88px;
  }
  .buy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      width: 60px;
      height: 52px;
      font-size: 28px;
      font-weight: 500;
      border: none;
    }
    .num {
      display: inline-block;
      width: 74px;
      text-align: center;
    }
  }
}

.address {
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-top: 20px;
  padding: 0 32px;
  .address_info {
    .top,
    .bottom {
      display: flex;
      align-items: center;
    }
    .bottom {
      margin-top: 12px;
    }
    .name,
    .phone {
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 40px;
    }
    .phone {
      margin-left: 56px;
    }
    .staus {
      width: 66px;
      height: 32px;
      border-radius: 4px;
      border: 2px solid rgba(49, 113, 246, 1);
      color: #3171f6;
    }
    .loc {
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(145, 145, 145, 1);
      line-height: 40px;
      margin-left: 72px;
    }
  }
}

.foot {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  div {
    width: 50%;
    height: 100px;
    z-index: 99999;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -4px 12px 0px rgba(0, 0, 0, 0.04);
    font-size: 32px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(90, 90, 90, 1);
    line-height: 100px;
  }
  .duihuan {
    background: linear-gradient(
      135deg,
      rgba(95, 170, 251, 1) 0%,
      rgba(49, 113, 246, 1) 100%
    );
    color: white;
  }
}
</style>

