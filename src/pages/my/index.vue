<template>
  <div class="my">
    <div class="userInfoWrap">
      <div class="head">
        <div class="headImg">
          
        </div>
      </div>
      <div class="info">
        <p class="name">{{info.name}}</p>
        <p class="No">工号: {{info.No}}</p>
        <p class="career">职位: {{info.career}}</p>
        <p class="integration">积分: {{info.integration}}</p>
      </div>
      <div class="more">
        <i class="icon-left"></i>
      </div>
    </div>
    <div class="list">
      <div class="myListItem" v-for="(item, i) in myList" :key="i" @click="$router.push({name: item.name})">
        <div class="item">
          <i :class="item.icon"></i>
          <p>{{item.text}}</p>
          <i class="icon-right"></i>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="myListItem" v-for="(item, i) in myList2" :key="i" @click="$router.push({name: item.name})">
        <div class="item">
          <i :class="item.icon"></i>
          <p>{{item.text}}</p>
          <i class="icon-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import { mapState , mapMutations , mapActions } from 'vuex';
export default {
  data() {
    return {
      info: {
        name: '刘树傻',
        No: '92008',
        career: '一级开发主管',
        integration: '127'
      },
      myList:[
        {
          icon: 'icon-task',
          text: '我的任务',
          name: 'task'
        },
        {
          icon: 'icon-exam',
          text: '我的考试',
          name: 'exam'
        },
        {
          icon: 'icon-study-record',
          text: '学习记录',
          name: 'studyRecord'
        },
        {
          icon: 'icon-collect',
          text: '我的收藏',
          name: 'collect'
        },
        {
          icon: 'icon-download',
          text: '我的下载',
          name: 'download'
        },
        {
          icon: 'icon-integration',
          text: '我的兑换',
          name: 'myExchange'
        },
        {
          icon: 'icon-approval',
          text: '审批任务',
          name: 'approving'
        },
        {
          icon: 'icon-survey',
          text: '问卷调查',
          name: 'survey'
        }
      ],
      myList2:[
        {
          icon: 'icon-user',
          text: '个人信息',
          name: 'userInfo'
        },
        {
          icon: 'icon-password',
          text: '修改密码',
          name: 'changePassword'
        },
        {
          icon: 'icon-about',
          text: '关于',
          name: 'about'
        }
      ]
    }
  },
  computed: {
    
  },
  components: {
    
  },
  mounted() {
    //   这里处理右上角点击事件
    this.$root.$off('handleClick')
    this.$root.$on('handleClick', ()=>{
      console.log('这里是my')
    })
  },
  methods: {
    
  }
}
</script>
<style lang='less' rel='stylesheet/less'>
.my {
  background: rgb(243, 247, 255);
  min-width: 100vw;
  .userInfoWrap {
    height: 284px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(95, 170, 251, 1) 0%,
      rgba(49, 113, 246, 1) 100%
    );
    display: flex;
    padding: 30px 36px;
    .head {
      width: 144px;
      margin-right: 40px;
      .headImg {
        width: 144px;
        height: 144px;
        border-radius: 50%;
        background: #fff;
      }
    }
    .info {
      & > p {
        font-size: 28px;
        font-family: PingFangSC-Regular;
        color: #fff;
        text-align: left;
        font-weight: 100;
        & + p {
          margin-top: 20px;
        }
        &.name {
          font-size: 32px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
        }
      }
    }
    .more {
      margin-left: auto;
      display: flex;
      align-items: center;
      & > i {
        transform: rotate(180deg);
        color: #fff;
      }
    }
  }
  .list {
    background: #fff;
    margin-top: 20px;
    .myListItem {
      padding: 0 38px;
      .item {
        height: 105px;
        border-bottom: 1px solid rgb(233, 233, 233);
        display: flex;
        align-items: center;
        & > i:nth-child(1) {
          font-size: 36px;
          margin-right: 20px;
        }
        & > i.icon-right {
          margin-left: auto;
          color: #d5d5d5;
        }
        p {
          font-size: 28px;
          font-family: PingFangSC-Regular;
        }
      }
      &:active {
        background: #fafafa;
      }
    }
  }
}
</style>