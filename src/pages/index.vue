<template>
  <div class="index">
    <search></search>
    <div class="swipe">
      <swiper style="height: 100%" :options="swiperOption">
        <swiper-slide class="swipeItem">
          <div>
            <span>夏日啤酒运营（初级证书）</span>
          </div>
          <img src="../assets/index/1.png" alt="">
        </swiper-slide>
        <swiper-slide class="swipeItem">
          <div>
            <span>夏日啤酒运营（初级证书）</span>
          </div>
          <img src="../assets/index/2.png" alt="">
        </swiper-slide>
        <swiper-slide class="swipeItem">
          <div>
            <span>夏日啤酒运营（初级证书）</span>
          </div>
          <img src="../assets/index/3.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

  </div>

</template>

<script>
import search from "@/components/common/search.vue";
export default {
  name: "",
  data() {
    return {
      msg: "",
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoPlay: true
      }
    };
  },
  components: {
    search
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.swipe {
  height: 5.333333rem;
  margin-top: 0.266667rem;
  .swipeItem {
    position: relative;
    div {
      display: block;
      position: absolute;
      font-size: 0.373333rem;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      width: 100%;
      height: 0.96rem;
      background: rgba(0, 0, 0, 1);
      opacity: 0.4;
      bottom: 0;
      display: flex;
      align-items: center;
      span {
        position: absolute;
        left: 0.4rem;
      }
    }
    img {
      height: 5.333333rem;
    }
  }
  .swiper-pagination {
    position: absolute;
    left: 8rem;
    width: 20%;
  }
  .swiper-pagination-bullet-active{
    background: #fff
  }
}
</style>

