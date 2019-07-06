<template>
  <div class='_transition'>
    <!-- 头部 -->
    <div class="w0 bgc1 ft2">
      <div class="w1 top">
        <div class="logo"></div>
        <div class="logo2"></div>
        <div class="tel f1">
          <a href="tel:13433106606">咨询热线：13433106606</a>
        </div>
        <div class="top_weixin">
          <img src="./../../assets/images/1215115860.jpg">
        </div>
        <div class="top_weixin_txt">扫扫加微信</div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="w0 fixH7">
      <div class="block">
        <el-carousel height="246px">
          <el-carousel-item v-for="(item,index) in carousel_img" :key="index">
            <img :src="item" alt="#" class="_img">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 主体 -->
    <router-view/>
    <!-- 脚部 -->
    <div class="w0 bgc3">
      <div class="w1 title2">购犬流程</div>
      <div class="w1 ul6">
        <ul>
          <li class="li1">
            <div class="d1"></div>
            <div class="d2">访问官网</div>
          </li>
          <li class="li2">
            <div class="d1"></div>
            <div class="d2">联系客服查询宠物</div>
          </li>
          <li class="li4">
            <div class="d1"></div>
            <div class="d2">上门挑选或转账</div>
          </li>
          <li class="li3">
            <div class="d1"></div>
            <div class="d2">支付定金</div>
          </li>
          <li class="li5">
            <div class="d1"></div>
            <div class="d2">急速发货</div>
          </li>
          <li class="li6">
            <div class="d1"></div>
            <div class="d2">确认收货</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="w0">
      <div class="w1 title3">超级萌宠服务承诺</div>
      <div class="w1 ul7">
        <ul>
          <li class="li1">
            <div class="d1"></div>
            <div class="d2">疫苗驱虫</div>
          </li>
          <li class="li2">
            <div class="d1"></div>
            <div class="d2">百分百纯种</div>
          </li>
          <li class="li3">
            <div class="d1"></div>
            <div class="d2">15天包赔换</div>
          </li>
          <li class="li4">
            <div class="d1"></div>
            <div class="d2">专业物流</div>
          </li>
          <li class="li5">
            <div class="d1"></div>
            <div class="d2">签署协议</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="w0 bgc3">
      <div class="w1 clear">
        <div class="w2 ul8 fleft">
          <ul>
            <li class="li2"></li>
            <li class="li1">CKU、FCI、AKC</li>
            <li class="li3">三方权威认证</li>
          </ul>
        </div>
        <div class="w2 fleft">
          <div class="foot_weixin">
            <img src="./../../assets/images/1215115860.jpg">
          </div>
          <div class="foot_weixin_txt">扫一扫关注微信看幼犬每日更新视频</div>
        </div>
      </div>
    </div>
    <!-- 脚部导航 -->
    <div class='w4'>
      <ul class="f1 menu" :class="{_none: menuFlag}">
        <li @click='showMenu' :class="{active: curPage == 'Index'}">
          <router-link :to="{name:'Index'}">网站首页</router-link>
        </li>
        <li @click='showMenu' :class="{active: curPage == 'About'}">
          <router-link :to="{name:'About'}">关于我们</router-link>
        </li>
        <li @click='showMenu' :class="{active: curPage == 'Dog'}">
          <router-link :to="{name:'Dog'}">幼犬待售</router-link>
        </li>
        <li @click='showMenu' :class="{active: curPage == 'Cat'}">
          <router-link :to="{name:'Cat'}">猫咪待售</router-link>
        </li>
        <li @click='showMenu' :class="{active: curPage == 'Buy'}">
          <router-link :to="{name:'Buy'}">购犬须知</router-link>
        </li>
        <li @click='showMenu' :class="{active: curPage == 'Service'}">
          <router-link :to="{name:'Service'}">售后保障</router-link>
        </li>
        <li @click='showMenu' :class="{active: curPage == 'Video'}">
          <router-link :to="{name:'Video'}">狗狗视频</router-link>
        </li>
        <li @click='showMenu' :class="{active: curPage == 'Show'}">
          <router-link :to="{name:'Show'}">买家秀</router-link>
        </li>
        <li @click='showMenu' :class="{active: curPage == 'Know'}">
          <router-link :to="{name:'Know'}">喂养知识</router-link>
        </li>
        <li @click='showMenu' :class="{active: curPage == 'Contact'}">
          <router-link :to="{name:'Contact'}">联系我们</router-link>
        </li>
      </ul>
    </div>

    <div class="w3">
      <ul class="end f1">
        <li class="btn_menu" @click='showMenu'>
          <a href="javascript:void(0)">
            <i class="el-icon-menu"></i>
            <br>网站导航
          </a>
        </li>
        <li>
          <a href="tel:13433106606">
            <i class="el-icon-phone"></i>
            <br>电话咨询
          </a>
        </li>
        <li>
          <a href="contact.html">
            <i class="el-icon-location"></i>
            <br>
            <router-link :to="{name:'Contact'}">联系我们</router-link>            
          </a>
        </li>
        <li class="btn_float_weixin" @click='showWechat'>
          <a href="javascript:void(0)">
            <i class="el-icon-service"></i>
            <br>微信咨询
          </a>
        </li>
      </ul>
    </div>
    <!-- 微信弹出框 -->
    <div class="float_weixin" v-if='wechatFlag'>
      <img src="./../../assets/images/1215115860.jpg">
      <div class="close" @click='showWechat'>点击关闭</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      carousel_img: [
        require("./../../assets/images/1750455932.jpg"),
        require("./../../assets/images/1750405777.jpg"),
        require("./../../assets/images/1750322076.jpg")
      ],
      menuFlag: true,
      wechatFlag: false,
      curPage: 'Index',
    }
  },
  methods: {
    showMenu (ele) {
      this.menuFlag = !this.menuFlag; 
    },
    showWechat () {
      this.wechatFlag = !this.wechatFlag;
    }
  },
  beforeRouteUpdate(to, from, next) {
    var $transition = document.getElementsByClassName('_transition')[0];
    $transition.style = "opacity: 0";
    this.curPage = to.name;
    window.scrollTo(0,0);
    next();
  }
};
</script>

<style lang='css'>
@import "./../../assets/css/layout/default.css";
</style>    