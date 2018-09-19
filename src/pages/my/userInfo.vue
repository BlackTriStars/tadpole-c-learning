@<template>
  <div class="userInfo">
    <actionSheet ref="actionSheet"></actionSheet>
    <ul class="listWrap">
      <li>
        <div class="item">
          <span>头像</span>
          <div class="heads" @click="$refs.actionSheet.showSheet()">
          </div>
        </div>
        <div class="item" v-for="(item, i) in userInfoList" :key="i">
          <span>{{item.name}}</span>
          <div class="input">
            <p v-if="!item.readOnly">
              <!-- <input type="text" v-model="userInfo[item.key]"> -->
              {{userInfo[item.key]}}
            </p>
            <p class="readOnly" v-else>{{userInfo[item.key]}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import actionSheet from "./components/actionSheet";
export default {
  data(){
    return {
      userInfoList: [
        {
          name: '登录民',
          readOnly: false,
          key: 'username'
        },
        {
          name: '姓名',
          readOnly: false,
          key: 'name'
        },
        {
          name: '手机号',
          readOnly: true,
          key: 'tel'
        },
        {
          name: '邮箱',
          readOnly: true,
          key: 'eMail'
        },
        {
          name: '性别',
          readOnly: false,
          key: 'sex'
        },
        {
          name: '所属机关',
          readOnly: false,
          key: 'organization'
        },
        {
          name: '签名',
          readOnly: true,
          key: 'sign'
        },
      ],
      userInfo:{
        username: '9124',
        name: '田中一',
        tel: '15801232336',
        eMail: 'tzy@wdzc.com',
        sex: '女',
        organization: '上海分公司HR',
        sign: '98元'
      },
      actionSheetShow: false
    }
  },
  components:{
    actionSheet
  },
  mounted(){
    this.$root.$off('handleClick')
    this.$root.$on('handleClick', ()=>{
      console.log('userInfo')
    })
  },
  methods: {
    changeHead(){
      this.actionSheetShow = true
    }
  }

  
}
</script>

<style lang="less">
  .userInfo{
    background:rgb(243,247,255);
    min-height: 100%;
    // min-height: ;
    .listWrap{
      background: #fff;
      li{
        padding-left: 36px;
        &:nth-child(1) .item{
          height: 144px;
        }
        .item{
          height: 85px;
          padding-right: 36px;
          display: flex;
          border-bottom: 1px solid rgb(233,233,233);
          align-items: center;
          justify-content: space-between;
          .heads{
            width: 96px;
            height: 96px;
            border-radius: 50%;
            background: #DBEAF2;
          }
          input{
            text-align: right;
            border: none;
            width: auto;
          }
          p{
            font-size:28px;
            font-family:PingFangSC-Regular;
            color:rgba(90,90,90,1);
          }
          p.readOnly{
            color:rgb(191,191,191);
          }
        }
      }
    }
  }
</style>
