<template>
  <div class="myExchange">
    <myTab :currentName="'进行中'" @afterChange="afterChange">
      <myTabPane :name="'b'" :label="'进行中'">
        <div class="div" v-for="(item,index) in getProductList" :key="index">
          <div class="product_table">
            <img :src="item.productImg" alt="">
            <div class="product_info">
              <div class="name left">{{item.productName}}</div>
              <div class="price left">消耗：{{item.productPrice}}积分</div>
              <div class="proNum right">x{{item.prductQty}}</div>
            </div>
          </div>
          <div class="addInfo">
            <div class="address">
              地址：{{item.address}}
            </div>
            <div class="userName">
              联系：{{item.userName}}
            </div>
            <div class="phone">
              电话：{{item.phone}}
            </div>
            <div class="postName">
              快递：{{item.postName}}
            </div>
            <div class="postCode">
              单号：{{item.postCode}}
            </div>
            <div class="btn">
              <button class="cancel">取消订单</button>
              <button disabled="true" v-if="item.state">待发货</button>
              <button class="state" v-else>确认收货</button>
            </div>
          </div>
        </div>

      </myTabPane>

      <myTabPane :name="'c'" :label="'已完成'">
        <div class="div" v-for="(item,index) in getProductList2" :key="index">
          <div class="product_table">
            <img :src="item.productImg" alt="">
            <div class="product_info">
              <div class="name left">{{item.productName}}</div>
              <div class="price left">消耗：{{item.productPrice}}积分</div>
              <div class="proNum right">x{{item.prductQty}}</div>
            </div>
          </div>
          <div class="addInfo">
            <div class="address">
              地址：{{item.address}}
            </div>
            <div class="userName">
              联系：{{item.userName}}
            </div>
            <div class="phone">
              电话：{{item.phone}}
            </div>
            <div class="postName">
              快递：{{item.postName}}
            </div>
            <div class="postCode">
              单号：{{item.postCode}}
            </div>
            <div class="finish">
              <p v-if="item.state" class="green">交易完成</p>
              <p v-else>交易取消</p>
            </div>
          </div>
        </div>
      </myTabPane>
    </myTab>
  </div>
</template>
<script>
import myTab from "@/components/common/tab/tab";
import myTabPane from "@/components/common/tab/tabPane";
export default {
  data() {
    return {
      getProductList: [
        {
          productImg: require("../../assets/index/1.jpg"),
          productName: "西瓜",
          productPrice: 1,
          prductQty: 2,
          address: "陕西省参加阿梅花糕是的啊深爱的啊",
          userName: "柳先生",
          phone: "1234567890",
          postName: "圆通",
          postCode: "121238",
          state: false
        },
        {
          productImg: require("../../assets/index/2.jpg"),
          productName: "南瓜",
          productPrice: 1,
          prductQty: 3,
          address: "陕西省参加阿梅花糕是的啊深爱的啊",
          userName: "张先生",
          phone: "1234567890",
          postName: "圆通",
          postCode: "121238",
          state: true //true的时候是待发货
        }
      ],
      getProductList2: [
        {
          productImg: require("../../assets/index/1.jpg"),
          productName: "西瓜",
          productPrice: 1,
          prductQty: 2,
          address: "陕西省参加阿梅花糕是的啊深爱的啊",
          userName: "柳先生",
          phone: "1234567890",
          postName: "圆通",
          postCode: "121238",
          state: false
        },
        {
          productImg: require("../../assets/index/2.jpg"),
          productName: "南瓜",
          productPrice: 1,
          prductQty: 3,
          address: "陕西省参加阿梅花糕是的啊深爱的啊",
          userName: "张先生",
          phone: "1234567890",
          postName: "圆通",
          postCode: "121238",
          state: true //true的时候是待发货
        }
      ]
    };
  },
  components: {
    myTab,
    myTabPane
  },
  methods: {
    //  切换tab触发事件
    afterChange(name) {
      console.log(name);
    }
  }
};
</script>
<style lang="less" scoped>
.myExchange {
  height: 100%;
  background: rgba(243, 247, 255, 1);
}
.product_table {
  display: flex;
  // width: 100%;
  height: 206px;
  // align-items: center;
  background-color: #fff;
  margin: 0 36px;
  border-bottom: 2px solid rgba(233, 233, 233, 1);
  img {
    width: 146px;
    height: 146px;
    display: block;
    margin: 30px 30px 0 20px;
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
}

.div {
  margin-bottom: 20px;
  background-color: white;
}
.addInfo {
  height: 230px;
  font-size: 24px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 36px;
  text-align: left;
  padding-left: 36px;
  padding-top: 30px;
  background-color: #fff;
  position: relative;
  .btn {
    position: absolute;
    right: 36px;
    bottom: 20px;
    button {
      width: 152px;
      height: 64px;
      border-radius: 8px;
      border: 2px solid rgba(153, 153, 153, 1);
      background-color: #fff;
    }
    .state {
      width: 152px;
      height: 64px;
      border-radius: 8px;
      border: 2px solid rgba(49, 113, 246, 1);
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(49, 113, 246, 1);
      line-height: 40px;
    }
  }
  .finish {
    position: absolute;
    right: 36px;
    bottom: 20px;
    width: 96px;
    height: 34px;
    font-size: 24px;
    font-family: PingFangSC-Regular;
    font-weight: 400;

    line-height: 34px;
    .green {
      color: rgba(49, 196, 1, 1);
    }
  }
}
button:focus {
  outline: none;
}
</style>
