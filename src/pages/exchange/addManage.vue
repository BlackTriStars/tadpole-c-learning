<template>
  <div class="addManage">
    <div class="line"></div>
    <div class="address" v-for="(v,i) in address_info" :key="i" >
      <div class="address_info">
        <div class="top">
          <div class="name">{{v.name}}</div>
          <div class="phone">{{v.phone}}</div>
        </div>
        <div class="bottom">
          <div class="state" v-show="v.state">默认</div>
          <div class="loc">{{v.loc}}</div>
        </div>
      </div>
      <span class="icon-exam"  @click="$router.push({name:'addEdit',params:{}})"></span>

    </div>
    <div class="button"  @click="$router.push({name:'addEdit'})">新建地址</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      address_info: [
        {
          name: "张先生",
          phone: "18221745618",
          state: true,
          loc: "上海市长宁区将建路138号32F502"
        },
        {
          name: "张先生",
          phone: "18221745618",
          state: false,
          loc: "上海市长宁区将建路138号32F502"
        },
        {
          name: "张先生",
          phone: "18221745618",
          state: false,
          loc: "上海市长宁区将建路138号32F502"
        }
      ]
    };
  }
};
</script>


<style lang="less" scoped>
.addManage {
  //  background: rgba(243, 247, 255, 1);
}
.address {
  height: 192px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin: 0 32px;
  border-bottom: 2px solid rgba(233, 233, 233, 1);
  .address_info {
    .top,
    .bottom {
      display: flex;
      align-items: center;
      position: relative;
    }
    .bottom {
      margin-top: 12px;
      height: 80px;
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
      width: 414px;
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
.line {
  height: 2px;
  background-color: rgba(233, 233, 233, 1);
}
.button {
  width: 678px;
  height: 94px;
  border-radius: 7px;
  border: 2px solid rgba(49, 113, 246, 1);
  font-size: 32px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(49, 113, 246, 1);
  line-height: 44px;
  margin: 40px auto 0;
  line-height: 94px;
}
</style>

