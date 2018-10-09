<template>
  <div class="addEdit">
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

    <div class="edit">
      <div class="page-content">
        <span>选择地址</span>
        <mt-cell :value="areaString" is-link @click.native="handlerArea"></mt-cell>
        <!-- <mt-cell title="街道:" :value="streetString" is-link @click.native="handlerStreet"></mt-cell> -->
        <mt-popup v-model="areaVisible" class="area-class" position="bottom">
          <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
        </mt-popup>
        <!-- <mt-popup v-model="streetVisible" class="area-class" position="bottom">
          <mt-picker :slots="slotstree" @change="onStreeChange"></mt-picker>
        </mt-popup> -->
      </div>
      <!-- <div class="line"></div> -->
      <div class="addInfo">
        <span>详细地址</span>
        <input type="text" placeholder="详细地址">
      </div>

      <div class="addInfo">
        <span>联系人</span>
        <input type="text" placeholder="联系人">
      </div>

      <div class="addInfo">
        <span>联系电话</span>
        <input type="number" placeholder="联系电话">
      </div>
    </div>

    <div class="select">
      <!-- <mt-checklist :v-model="value" :options="options">
      </mt-checklist> -->
      <mt-checklist v-model="value" :options="options" @change="checkon">
      </mt-checklist>

    </div>

  </div>

</template>


<script>
import { Picker } from "mint-ui";
// import { Checklist } from "mint-ui";

import data from "../../assets/data2.json";
var index = 0;
var index2 = 0;
var index3 = 0;
// 初始化省
let province = Object.keys(data);
// 初始化市
let _y = Object.values(data);
let _m = _y.map(res => {
  return Object.keys(res);
});
let city = _m[index];
// 初始化区
let _c = Object.values(data);
_c = _c.map(res => {
  return Object.values(res);
});
let __d = Object.values(_c[index]);
let area = Object.keys(__d[index]);
// 初始化街
let __a = Object.values(__d[0]);
let street = __a[0];
export default {
  components: {
    Picker
  },
  data() {
    return {
      title: "编辑地址",
      areaVisible: false,
      streetVisible: false,
      areaString: "请选择",
      streetString: "请选择",
      slots: [
        {
          flex: 1,
          values: province,
          className: "slot1",
          textAlign: "left"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: city,
          className: "slot3",
          textAlign: "left"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: area,
          className: "slot5",
          textAlign: "left"
        }
      ],
      slotstree: [
        {
          flex: 1,
          values: street,
          className: "slot1",
          textAlign: "center"
        }
      ],
      value: [],
      //checklist设置
      options: [
        {
          label: "设为默认地址",
          value: "设为默认地址"
        }
      ]
    };
  },
  methods: {
    handlerArea() {
      this.areaVisible = true;
    },
    checkon: function() {
      console.log(this.value);
    },

    onValuesChange(picker, values) {
      index = province.indexOf(values[0]);
      index2 = _m[index].indexOf(values[1]);
      if (index >= 0) {
        picker.setSlotValues(1, _m[index]);
      }
      if (index >= 0 && index2 >= 0) {
        let __d = Object.values(_c[index]);
        let area = Object.keys(__d[index2]);
        index3 = area.indexOf(values[2]);
        picker.setSlotValues(2, area);
        this.areaString = values.join(",");
        if (index3 >= 0) {
          let __a = Object.values(__d[index2]);
          let street = __a[index3];
          this.slotstree[0].values = street;
        } else {
          this.$set(this.slotstree[0].values, []);
          this.streetString = "无可选街道";
        }
      }
      console.log(this.areaString);
    }
    // onStreeChange(picker, values) {
    //   this.streetString = values.join(",");
    // }
  }
};
</script>

<style lang="less" scoped>
input:focus {
  outline: none;
}
.addEdit {
  padding-top: 1.173333rem !important;
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
  }
}
// .line {
//   height: 6px;
//   background-color: rgba(233, 233, 233, 1);
// }
.edit {
  background-color: #fff;
  .page-content {
    span {
      display: block;
      width: 178px;
      height: 88px;
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 88px;
      background-color: #fff;
      margin-left: 28px;
      border-bottom: 2px solid rgba(233, 233, 233, 1);
    }
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    // border-bottom: 2px solid rgba(233, 233, 233, 1);
    .mint-cell {
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      min-height: 86px;
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      border-bottom: 2px solid rgba(233, 233, 233, 1);
      margin-right: 36px;
    }
    .area-class {
      width: 101%;
      height: 50%;
    }
  }
  .addInfo {
    height: 88px;
    display: flex;
    align-items: center;
    margin-left: 36px;
    margin-right: 36px;
    border-bottom: 2px solid rgba(233, 233, 233, 1);

    text-align: left;
    span {
      display: block;
      width: 120px;
      height: 88px;
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 88px;
    }
    input {
      display: block;
      border: none;
      height: 70px;
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      margin-left: 30px;
    }
  }
}
.select {
  // background-color: red;
  .mint-checklist-title {
    margin: 0;
  }
}
</style>

