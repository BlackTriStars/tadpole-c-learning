<template>
    <div class="test-list">
        <myTab :currentName='"a"'>
            <myTabPane :name='"a"' :label="'未通过'">
                <template>        
                    <div class="test-item" v-for="(item,index) in tests" :key="index">
                        <h3>{{item.name}}</h3>
                        <h3>共 {{item.totle}} 道题</h3>
                        <p>{{item.when}}</p>
                        <p>作答时间：{{item.time}}</p>
                    </div>
                </template>
            </myTabPane>
            <myTabPane :name='"b"' :label="'已通过'"></myTabPane>
        </myTab>
    </div>
</template>
<script>
import myTab from "@/components/common/tab/tab";
import myTabPane from "@/components/common/tab/tabPane";
export default {
  components: { myTab, myTabPane },
  data() {
    const tests = new Array(10).fill({
      name: "中国证劵法从业资格法律法规考试",
      when: "2018.08.05～06.26",
      totle: "18",
      time: "20分钟"
    });
    return {
      tests
    };
  }
};
</script>
<style lang="less">
.test-list {
    height: 100%;
}
.test-item {
  margin: 0 36px;
  height: 152px;
  border-bottom: 1px solid #e9e9e9;
  h3 {
    margin-top: 40px;
    font-size: 28px;
    color: #333;
    float: left;
    max-width: 70%;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow: hidden;
  }
  h3:nth-child(2) {
    color: #999;
    float: right;
  }
  p {
      color: #999;
      font-size: 24px;
      float: left;
      margin-top: 8px;
  }
  p:nth-child(4) {
      float: right;
  }
}
</style>


