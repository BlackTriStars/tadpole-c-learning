import Vue from "vue";
import Router from "vue-router";

// 主页
import index from "@/pages/index"; //首页
import saomiao from "@/pages/index/saomiao"; //扫描二维码
import sign from "@/pages/index/sign"; //每日签到
import jifen from "@/pages/index/jifen"; //积分榜
import news from "@/pages/index/news"; //消息
import newsInfo from "@/pages/index/newsInfo"; //消息详情

//  积分兑换
import productList from "@/pages/exchange/productList"; //积分兑换商品列表
import productInfo from "@/pages/exchange/productInfo"; //商品详情
import addManage from "@/pages/exchange/addManage"; //地址管理
import addEdit from "@/pages/exchange/addEdit"; // 地址编辑
import cart from "@/pages/exchange/cart"; // 购物车
import cartManage from "@/pages/exchange/cartManage"; // 购物车编辑
import myExchange from "@/pages/exchange/myExchange"; // 我的兑换
//  注册登录
import loginMain from "@/pages/loginRegister/index"; //注册登录主页
import firstLogin from "@/pages/loginRegister/firstLogin"; //首次登录绑定页面
import login from "@/pages/loginRegister/login";
import resetPassword from "@/pages/loginRegister/resetPassword"; //重置密码
import changePassword from "@/pages/loginRegister/changePassword"; //修改密码页面

// 资讯
import infoList from "@/pages/information/infoList"; //资讯页面
import infoInfo from "@/pages/information/infoInfo"; //资讯详情页

//  我的
import my from "@/pages/my/index"; //我的页面
import userInfo from "@/pages/my/userInfo"; //个人信息页面
import task from "@/pages/my/task"; //我的任务
import exam from "@/pages/my/exam"; //我的考试
import studyRecord from "@/pages/my/studyRecord"; //学习记录
import collect from "@/pages/my/collect"; //我的收藏
import download from "@/pages/my/download";
import about from "@/pages/my/about";
import approvingList from "@/pages/my/approvingList";
import approving from "@/pages/my/approving";
import approvingM from "@/pages/my/approvingM";
import survey from "@/pages/my/survey";
import surveyDetail from "@/pages/my/surveyDetail";
import submitSuccess from "@/pages/my/submitSuccess";
import mianshou from "@/pages/my/mianshou";

//online
import onlineList from "@/pages/online/list";

//lesson
import lesson from "@/pages/lesson/lesson";
import mianshouLesson from "@/pages/lesson/mianshouLesson";


//test
import testList from "@/pages/test/test-list";
import testCover from "@/pages/test/test-cover";
import testDetail from "@/pages/test/test-detail";
import testResult from "@/pages/test/test-result";
import testHistory from "@/pages/test/test-history";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "index",
      meta: {
        title: "首页"
      },
      component: index
    },
    {
      path: "/index",
      name: "index",
      meta: {
        title: "首页"
      },
      component: index
    },
    {
      path: "/saomiao",
      name: "saomiao",
      meta: {
        title: "扫描二维码"
      },
      component: saomiao
    },
    {
      path: "/sign",
      name: "sign",
      meta: {
        title: "每日签到"
      },
      component: sign
    },
    {
      path: "/jifen",
      name: "jifen",
      meta: {
        title: "积分榜"
      },
      component: jifen
    },
    {
      path: "/news",
      name: "news",
      meta: {
        title: "消息"
      },
      component: news
    },
    {
      path: "/newsInfo",
      name: "newsInfo",
      meta: {
        title: "消息详情"
      },
      component: newsInfo
    },
    {
      path: "/productList",
      name: "productList",
      meta: {
        title: "积分兑换"
      },
      component: productList
    },
    {
      path: "/productInfo",
      name: "productInfo",
      component: productInfo
    },
    {
      path: "/addManage",
      name: "addManage",
      meta: {
        title: "地址管理"
      },
      component: addManage
    },
    {
      path: "/addEdit",
      name: "addEdit",
      meta: {
        title: "地址管理"
      },
      component: addEdit
    },
    {
      path: "/cart",
      name: "cart",
      component: cart
    },
    {
      path: "/cartManage",
      name: "cartManage",
      component: cartManage
    },
    {
      path: "/myExchange",
      name: "myExchange",
      meta: {
        title: "我的兑换"
      },
      component: myExchange
    },
    {
      path: "/infoList",
      name: "infoList",
      meta: {
        title: "资讯"
      },
      component: infoList
    },
    {
      path: "/infoInfo",
      name: "infoInfo",
      component: infoInfo
    },
    {
      path: "/login&register",
      redirect: "/login",
      component: loginMain,
      children: [{
          path: "/firstLogin",
          name: "firstLogin",
          meta: {
            title: "首次登录绑定"
          },
          component: firstLogin
        },
        {
          path: "/login",
          name: "login",
          meta: {
            title: "注册登录"
          },
          component: login
        },
        {
          path: "/resetPassword",
          name: "resetPassword",
          meta: {
            title: "重置密码"
          },
          component: resetPassword
        },
        {
          path: "/changePassword",
          name: "changePassword",
          meta: {
            title: "修改密码"
          },
          component: changePassword
        }
      ]
    },
    {
      path: "/my",
      name: "my",
      meta: {
        title: "我的",
        btn: "注销"
      },
      component: my
    },
    {
      path: "/online",
      name: "online",
      meta: {
        title: "在线"
      },
      component: onlineList
    },
    {
      path: "/mianshou",
      name: "mianshou",
      meta: {
        title: "面授培训"
      },
      component: mianshou
    },
    {
      path: "/lesson/:id",
      name: "lesson",
      meta: {
        title: "课程"
      },
      component: lesson
    },
    {
      path: "/mianshouLesson",
      name: "mianshouLesson",
      meta: {
        title: "面授课程"
      },
      component: mianshouLesson
    },
    {
      path: "/userInfo",
      name: "userInfo",
      meta: {
        title: "个人信息",
        btn: "保存"
      },
      component: userInfo
    },
    {
      path: "/task",
      name: "task",
      meta: {
        title: "我的任务"
      },
      component: task
    },

    {
      path: "/exam",
      name: "exam",
      meta: {
        title: "我的考试"
      },
      component: exam
    },
    {
      path: "/studyRecord",
      name: "studyRecord",
      meta: {
        title: "学习记录"
      },
      component: studyRecord
    },
    {
      path: "/collect",
      name: "collect",
      meta: {
        title: "我的收藏"
      },
      component: collect
    },
    {
      path: "/download",
      name: "download",
      meta: {
        title: "我的下载"
      },
      component: download
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "关于"
      },
      component: about
    },
    {
      path: "/approving",
      name: "approving",
      meta: {
        title: "我的审批"
      },
      component: approving
    },
    {
      path: "/approvingList",
      name: "approvingList",
      meta: {
        title: "审批任务"
      },
      component: approvingList
    },
    {
      path: "/approvingM",
      name: "approvingM",
      meta: {
        title: "我的审批"
      },
      component: approvingM
    },
    {
      path: "/survey",
      name: "survey",
      meta: {
        title: "问卷调查"
      },
      component: survey
    },
    {
      path: "/surveyDetail",
      name: "surveyDetail",
      meta: {
        title: "问卷详情"
      },
      component: surveyDetail
    },
    {
      path: "/submitSuccess",
      name: "submitSuccess",
      meta: {
        title: "提交成功"
      },
      component: submitSuccess
    },
    {
      path: "/test-list",
      name: "testList",
      meta: {
        title: "我的考试"
      },
      component: testList
    },
    {
      path: "/test-cover",
      name: "testCover",
      meta: {
        title: "考试名称"
      },
      component: testCover
    },
    {
      path: "/test-detail",
      name: "testDetail",
      meta: {
        title: "考试"
      },
      component: testDetail
    },
    {
      path: "/test-result",
      name: "testResult",
      meta: {
        title: "标准普通话考试"
      },
      component: testResult
    },
    {
      path: "/test-history",
      name: "testHistory",
      meta: {
        title: "标准普通话考试历史记录"
      },
      component: testHistory
    }
  ]
});
