<template>
  <div class="search">
    <div class="sm">
      <img src="../../assets/common/scanning.png" alt="" srcset="">
    </div>
    <i class="icon-search"></i>
    <input type="search" @search="search" v-model="searchTxt" placeholder="搜索您感兴趣的课程">
    <div class="email">
       <img src="../../assets/common/email.png" alt="" srcset="">
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
    width: 7.013333rem;
    height: 0.906667rem;
    background: rgba(243, 244, 248, 1);
    border-radius: 2px;
    padding-left: 0.8rem;
    margin-left: 1.493333rem;
  }
  input::-webkit-input-placeholder {
    color: rgba(197, 197, 197, 1);
  }
  .email {
    position: absolute;
    right: 0;
    top: 0;
    width: 1.493333rem;
    height: 0.906667rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
