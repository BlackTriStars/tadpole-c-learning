<template>
  <div class="cartManage">
    <div class="title">
      <i class="icon-left" @click="$router.go(-1)">
      </i>
      <h1>
        {{title}}
      </h1>
      <div class="rightBtn">
        <div class="jifen">
          <span class="">保存</span>
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
      <div class="num">{{totalPrice}}分</div>
    </div>

    <div class="product_table" v-for="(item,index) in getProductList" :key="index">
      <div class="cycle" @click="checkSingle(item)" :class="{checked:item.makeChoose}">
        <i class="mint-toast-icon mintui mintui-success"></i>
      </div>
      <img :src="item.productImg" alt="">
      <div class="product_info">
        <div class="name">{{item.productName}}</div>
        <div class="price">消耗：{{item.productPrice}}积分</div>
        <div class="computer right">
          <span @click="changeNumber(item,1)" class="add">+</span>
          <input type="number" v-model="item.prductQty">
          <span @click="changeNumber(item,-1)" class="reduce">-</span>
        </div>

        <!-- <div class="count">{{item.productPrice*item.prductQty}}</div> -->
        <!-- <div class="del" @click="deleteProduct(index)">删除</div> -->
      </div>

    </div>

    <div class="foot">
      <div class="checkAll">
        <div class="cycle" @click="checkAll()" :class="{checked:checkAllItem}">
          <i class="mint-toast-icon mintui mintui-success"></i>
        </div>
        <p>全选</p>
      </div>
      <div class="del" @click="deleteProduct">
        <p>删除所选</p>
      </div>

    </div>

  </div>

</template>


<script>
import Vue from "vue";
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
      ],
      totalPrice: 0, //总金额
      checkAllItem: false, //全部选中
      checkedList: [] //选中的数
    };
  },
  methods: {
    deleteProduct: function() {
      // this.getProductList.splice(index, 1);
      console.log(this.getProductList)
      var newArr = [];
      this.getProductList.forEach((v,i)=>{
        if(v.makeChoose == false){
          newArr.push(v)
        }
      })
      this.getProductList =  newArr 
      this.calcTotalPrice(); //这里要注意,当某一项删除时,如果你选中了,这里也是要做计算总价格的
    },
    //修改数量
    changeNumber: function(number, add) {
      if (add < 0) {
        number.prductQty--;
        if (number.prductQty < "1") {
          //因为数量最低是1
          number.prductQty = 1;
        }
      } else {
        number.prductQty++;
      }
      this.calcTotalPrice();
    },
    //选中单个的
    checkSingle: function(item) {
      if (typeof item.makeChoose == "undefined") {
        //这里要注意,因为checked字段根本不在this.getProductList里面,所以你要自己赋值进去
        Vue.set(item, "makeChoose", true); //这里应该设为true
      } else {
        item.makeChoose = !item.makeChoose;
      }
      this.calcTotalPrice();
    },
    //选中所有的
    checkAll: function() {
      this.checkAllItem = !this.checkAllItem;
      var _this = this;
      if (this.checkAllItem) {
        this.getProductList.forEach(element => {
          if (typeof element.makeChoose == "undefined") {
            Vue.set(element, "makeChoose", _this.checkAllItem); //让每一小项跟随checkall来变化
          } else {
            element.makeChoose = _this.checkAllItem;
          }
        });
      } else {
        this.getProductList.forEach(element => {
          if (typeof element.makeChoose == "undefined") {
            Vue.set(element, "makeChoose", _this.checkAllItem);
          } else {
            element.makeChoose = _this.checkAllItem;
          }
        });
      }
      this.calcTotalPrice();
    },
    //计算总金额
    calcTotalPrice: function() {
      var _this = this;
      this.totalPrice = 0;
      this.getProductList.forEach((element, index) => {
        if (element.makeChoose) {
          _this.totalPrice += element.productPrice * element.prductQty; //这里是一个累加的过程,所以要用+=
        }
      });
    },
    //让页面一进来就处于选中的状态
    makeAllChecked: function() {
      this.getProductList.forEach(item => {
        if (typeof item.makeChoose == "undefined") {
          Vue.set(item, "makeChoose", true);
        }
      });
    }
  },
  watch: {
    //如果全部选中,那么全部选中的按钮应该变绿,如果一项不是,应该变空
    getProductList: {
      handler: function(item) {
        this.checkedList = this.getProductList.filter(element => {
          return element.makeChoose == true;
        });
        //选中数<总数据
        if (this.checkedList.length < this.getProductList.length) {
          this.checkAllItem = false;
        } else {
          this.checkAllItem = true;
        }
      },
      deep: true //这个deep:true一定要写,不然肯定不会时时变化的
    }
  },
  created: function() {
    this.makeAllChecked(); //默认全选
    this.calcTotalPrice(); //算价格
  }
};
</script>

<style lang="less" scoped>
input:focus {
  outline: none;
}
.cartManage {
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
  align-items: center;
  background-color: #fff;
  padding: 0 36px;
  border-bottom: 2px solid rgba(233, 233, 233, 1);
  img {
    width: 146px;
    height: 146px;
    display: block;
    margin: 0 30px 0 20px;
  }
}
.product_info {
  text-align: left;
  width: 468px;

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
  .computer {
    display: flex;
    margin-top: 12px;
    text-align: right;
    .add,
    .reduce {
      width: 60px;
      height: 52px;
      background: rgba(245, 245, 245, 1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 18px;
    }
    input {
      display: inline-block;
      width: 80px;
      text-align: center;
      border: none;
    }
  }
}
.cycle {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid rgba(153, 153, 153, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-size: 14px;
    color: white;
    font-weight: 400;
  }
}
.checked {
  background-color: #3171f6;
}

.foot {
  height: 98px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 9999;
  display: flex;
  .checkAll {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -4px 12px 0px rgba(0, 0, 0, 0.04);
    height: 100%;
    width: 60%;
    display: flex;
    padding-left: 36px;
    align-items: center;
    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(145, 145, 145, 1);
    p {
      margin-left: 16px;
    }
    // justify-content: center;
  }
  .del {
    background: linear-gradient(
      135deg,
      rgba(95, 170, 251, 1) 0%,
      rgba(49, 113, 246, 1) 100%
      
    );
    box-shadow: 0px -4px 12px 0px rgba(0, 0, 0, 0.04);
    height: 100%;
    width: 40%;
    display: flex;
    padding-right: 36px;
    align-items: center;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    justify-content: center;
  }
}
</style>

