<template>
  <div class="search">
    <div class="sm" @click="$router.push({name:'saomiao'})">
      <img src="../../assets/common/scanning.png" alt="" srcset="">
    </div>
    <i class="icon-search"></i>
    <input type="search" @search="search" v-model="searchTxt" placeholder="搜索您感兴趣的课程">
    <div class="jifen" @click="$router.push({name:'productList'})">
      <img src="../../assets/common/jifen.png" alt="" srcset="">
    </div>
    <div class="email">
      <img src="../../assets/common/email.png" alt="" srcset="">
      <i class="news" v-if="news>0" @click="$router.push({name:'news'})">{{news}}</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTxt: ""
    };
  },
  props: ["news"],
  methods: {
    search() {
      this.$emit("afterInput", this.searchTxt);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
// @import "/src/styles/fonts/style.css";
.search {
  height: 0.906667rem;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 15px 0;
  img {
    width: 0.533333rem;
    height: 0.48rem;
  }
  .sm {
    width: 1.493333rem;
    height: 0.906667rem;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  i {
    position: absolute;
    font-size: 0.373333rem; /*px*/
    font-weight: bold;
    color: rgba(197, 197, 197, 1);
    left: 1.76rem;
  }
  input {
    outline: none;
    border: none;
    width: 6.013333rem;
    height: 0.906667rem;
    background: rgba(243, 244, 248, 1);
    border-radius: 2px;
    padding-left: 0.8rem;
    margin-left: 1.493333rem;
  }
  input::-webkit-input-placeholder {
    color: rgba(197, 197, 197, 1);
  }
  .jifen {
    height: 68px;
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      margin-left: 36px;
    }
  }
  .email {
    position: absolute;
    right: 0;
    top: 0;
    width: 1.493333rem;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    .news {
      position: absolute;
      width: 28px;
      height: 28px;
      background: rgba(255, 64, 64, 1);
      border-radius: 50%;
      left: 62px;
      top: 0;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
  }
}
</style>
