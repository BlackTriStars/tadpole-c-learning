<template>
  <div class="cart">
    <div class="title">
      <i class="icon-left" @click="$router.go(-1)">
      </i>
      <h1>
        {{title}}
      </h1>
      <div class="rightBtn">
        <div class="jifen">
          <span class="">编辑</span>
        </div>
      </div>
    </div>
    <div class="address">
      <div class="address_info">
        <div class="top">
          <div class="name">{{name}}</div>
          <div class="phone">{{phone}}</div>
        </div>
        <div class="bottom">
          <div class="state">默认</div>
          <div class="loc">{{loc}}</div>
        </div>
      </div>
      <span class="icon-right"></span>

    </div>

    <div class="consume">
      <span>消耗积分</span>
      <div class="num">{{num}}分</div>
    </div>

    <div class="product_table" v-for="(item,index) in getProductList" :key="index">
      <img :src="item.productImg" alt="">
      <div class="product_info">
        <div class="name left">{{item.productName}}</div>
        <div class="price left">消耗：{{item.productPrice}}积分</div>
        <div class="proNum right">x{{item.prductQty}}</div>
      </div>

    </div>
    <div class="foot">
      <button>立即兑换</button>
    </div>
  </div>

</template>


<script>
export default {
  data() {
    return {
      title: "购物车",
      name: "张先生",
      phone: "18221745618",
      state: true,
      loc: "上海市长宁区将建路138号32F502",
      num: "2",
      getProductList: [
        {
          productImg: require("../../assets/index/1.jpg"),
          productName: "西瓜",
          productPrice: 1,
          prductQty: 2
        },
        {
          productImg: require("../../assets/index/2.jpg"),
          productName: "南瓜",
          productPrice: 1,
          prductQty: 3
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
input:focus {
  outline: none;
}
.cart {
  padding-top: 1.173333rem !important;
  height: 100%;
  width: 100%;
  background: rgba(243, 247, 255, 1);
  padding-bottom: 98px;
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
  }
}
.address {
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 36px;
  // border-bottom: 2px solid rgba(233, 233, 233, 1);
  background-color: #fff;
  .address_info {
    .top,
    .bottom {
      display: flex;
      align-items: center;
      position: relative;
    }
    .bottom {
      margin-top: 12px;
      // height: 80px;
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
    .state {
      width: 66px;
      height: 32px;
      border-radius: 4px;
      border: 2px solid rgba(49, 113, 246, 1);
      color: #3171f6;
      line-height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .loc {
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(145, 145, 145, 1);
      line-height: 40px;
      position: absolute;
      left: 138px;
      width: 440px;
      text-align: left;
      top: 0;
    }
  }
  span {
    display: block;
    color: #ccc;
    font-size: 40px;
  }
}

.consume {
  margin-top: 20px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 36px;
  margin-bottom: 20px;
  span {
    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }
  .num {
    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
}

.product_table {
  display: flex;
  width: 100%;
  height: 207px;
  // align-items: center;
  background-color: #fff;
  padding: 0 36px;
  border-bottom: 2px solid rgba(233, 233, 233, 1);
  img {
    width: 146px;
    height: 146px;
    display: block;
    margin: 30px 30px 0 20px;
  }
}
.product_info {
  text-align: left;
  width: 468px;
  margin-top: 30px;

  .name {
    width: 356px;
    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .price {
    font-size: 24px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    margin-top: 8px;
  }
  .proNum {
    font-size: 24px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }
}

.foot {
  height: 98px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 9999;
  display: flex;
  button {
    background: linear-gradient(
      135deg,
      rgba(95, 170, 251, 1) 0%,
      rgba(49, 113, 246, 1) 100%
    );
    box-shadow: 0px -4px 12px 0px rgba(0, 0, 0, 0.04);
    height: 100%;
    width: 100%;
    display: flex;
    padding-right: 36px;
    align-items: center;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    justify-content: center;
    border: none;
  }
}
</style>

