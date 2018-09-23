<template>
  <div class="productList">
    <div class="title">
      <i class="icon-left" @click="$router.go(-1)">
      </i>
      <h1>
        {{title}}
      </h1>
      <div class="rightBtn">
        <div class="jifen">
          <img src="../../assets/exchange/jifen.png" alt="">
          <span class="jifenNum">{{jifenNum}}</span>
        </div>
        <div class="cart" v-if="productNum>0">
          <img src="../../assets/exchange/cart.png" alt="">
          <span class="cycle">{{productNum}}</span>
        </div>
      </div>
    </div>
    <div class="item" v-for="(value,index) in itemList" :key="index">
      <img :src="value.imgUrl" alt="">
      <div class="info">
        <div class="contetnt">{{value.content}}</div>
        <div class="jifenNum">
          消耗：
          <i style="color:rgba(49,113,246,1);display:inline-block;margin-right:10px;">{{value.jifen}}</i>积分
        </div>
      </div>
    </div>
  </div>

</template>


<script>
export default {
  data() {
    return {
      title: "积分兑换",
      jifenNum: "72",
      productNum: "5",
      itemList: [
        {
          content: "果蔬脆兑换商品名字限制字数",
          imgUrl: require("../../assets/exchange/1.jpg"),
          jifen: "1"
        },
        {
          content: "果蔬脆兑换商品名字限制字数",
          imgUrl: require("../../assets/exchange/2.jpg"),
          jifen: "2"
        },
        {
          content: "果蔬脆兑换商品名字限制字数",
          imgUrl: require("../../assets/exchange/3.jpg"),
          jifen: "1"
        },
        {
          content: "果蔬脆兑换商品名字限制字数",
          imgUrl: require("../../assets/exchange/4.jpg"),
          jifen: "3"
        },
        {
          content: "果蔬脆兑换商品名字限制字数",
          imgUrl: require("../../assets/exchange/5.jpg"),
          jifen: "41"
        },
        {
          content: "果蔬脆兑换商品名字限制字数",
          imgUrl: require("../../assets/exchange/5.jpg"),
          jifen: "41"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.productList {
  margin-top: 1.173333rem !important;
  height: 100%;
  width: 100%;
  background: rgba(243, 247, 255, 1);
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
.item {
  height: 206px;
  display: flex;
  align-items: center;
  padding-left: 36px;
  margin-bottom: 20px;
  background-color: #fff;
  img {
    width: 146px;
    height: 146px;
  }
  .info {
    margin-left: 30px;
    .content {
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 40px;
    }
    .jifenNum {
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 40px;
      margin-top: 8px;
      text-align: left;
    }
  }
}
</style>

