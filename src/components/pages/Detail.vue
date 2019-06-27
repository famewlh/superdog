<template>
  <div>
    <div class="w0 f t2">
      <div class="w1 title1">{{messageList[type][0]}}</div>
      <div class="w1 f2">
        <div class="txt1 ht1 p2">
          <div class="shell shell_203731">
            <div class="aTitle">{{messageList[type][0]}}</div>
            <div class="aBody">
              <div class="aFace">
                <center>
                  <img :src="messageList[type][1]" :alt="messageList[type][0]">
                </center>
                <ul class="ul14 f1">
                  <li class="li1">
                    <a href="tel:13433106606">
                      <i class="el-icon-phone"></i> 电话咨询
                    </a>
                  </li>
                  <li class="li2 btn_float_weixin" @click='showWechat'>
                    <i class="el-icon-phone"></i> 微信咨询
                  </li>
                  <li class="li3">
                    <router-link :to="{name: 'Contact'}">
                      <i class="el-icon-phone"></i> 更多联系
                    </router-link>
                  </li>
                </ul>
              </div>
              <p>
                <img :src="messageList[type][2]">
              </p>
              <p>
                <img :src="messageList[type][3]">
              </p>
              <p>
                <img :src="messageList[type][4]">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            type: '',
            messageList: {
                mejs: ['马尔济斯犬',require('./../../assets/images/s/1.jpg'),require('./../../assets/images/mejs/1.jpg'),require('./../../assets/images/mejs/2.jpg'),require('./../../assets/images/mejs/3.jpg')],
                bmq: ['博美犬',require('./../../assets/images/s/2.jpg'),require('./../../assets/images/bmq/1.jpg'),require('./../../assets/images/bmq/2.jpg'),require('./../../assets/images/bmq/3.jpg')],
                xgd: ['西高地',require('./../../assets/images/s/3.jpg'),require('./../../assets/images/xgd/1.jpg'),require('./../../assets/images/xgd/2.jpg'),require('./../../assets/images/xgd/3.jpg')],
                xnr: ['雪纳瑞',require('./../../assets/images/s/4.jpg'),require('./../../assets/images/xnr/1.jpg'),require('./../../assets/images/xnr/2.jpg'),require('./../../assets/images/xnr/3.jpg')],
                ykx: ['约克夏',require('./../../assets/images/s/5.jpg'),require('./../../assets/images/ykx/1.jpg'),require('./../../assets/images/ykx/2.jpg'),require('./../../assets/images/ykx/3.jpg')],
                fgdnq: ['法国斗牛犬',require('./../../assets/images/s/6.jpg'),require('./../../assets/images/fgdnq/1.jpg'),require('./../../assets/images/fgdnq/2.jpg'),require('./../../assets/images/fgdnq/3.jpg')],
                bxq: ['比熊犬',require('./../../assets/images/s/7.jpg'),require('./../../assets/images/bxq/1.jpg'),require('./../../assets/images/bxq/2.jpg'),require('./../../assets/images/bxq/3.jpg')],
                yn: ['英牛',require('./../../assets/images/s/8.jpg'),require('./../../assets/images/yn/1.jpg'),require('./../../assets/images/yn/2.jpg'),require('./../../assets/images/yn/3.jpg')],
                tdq: ['泰迪犬',require('./../../assets/images/s/9.jpg'),require('./../../assets/images/tdq/1.jpg'),require('./../../assets/images/tdq/2.jpg'),require('./../../assets/images/tdq/3.jpg')],
                hsq: ['哈士奇',require('./../../assets/images/m/1.jpg'),require('./../../assets/images/hsq/1.jpg'),require('./../../assets/images/hsq/2.jpg'),require('./../../assets/images/hsq/3.jpg')],
                smy: ['萨摩耶',require('./../../assets/images/m/2.jpg'),require('./../../assets/images/smy/1.jpg'),require('./../../assets/images/smy/2.jpg'),require('./../../assets/images/smy/3.jpg')],
                ss: ['松狮',require('./../../assets/images/m/3.jpg'),require('./../../assets/images/ss/1.jpg'),require('./../../assets/images/ss/2.jpg'),require('./../../assets/images/ss/3.jpg')],
                bm: ['边牧',require('./../../assets/images/m/4.jpg'),require('./../../assets/images/bm/1.jpg'),require('./../../assets/images/bm/2.jpg'),require('./../../assets/images/bm/3.jpg')],
                cq: ['柴犬',require('./../../assets/images/m/5.jpg'),require('./../../assets/images/cq/1.jpg'),require('./../../assets/images/cq/2.jpg'),require('./../../assets/images/cq/3.jpg')],
                lbldq: ['拉布拉多犬',require('./../../assets/images/m/6.jpg'),require('./../../assets/images/lbldq/1.jpg'),require('./../../assets/images/lbldq/2.jpg'),require('./../../assets/images/lbldq/3.jpg')],
                qtq: ['秋田犬',require('./../../assets/images/l/1.jpg'),require('./../../assets/images/qtq/1.jpg'),require('./../../assets/images/qtq/2.jpg'),require('./../../assets/images/qtq/3.jpg')],
                alsjq: ['阿拉斯加犬',require('./../../assets/images/l/2.jpg'),require('./../../assets/images/alsjq/1.jpg'),require('./../../assets/images/alsjq/2.jpg'),require('./../../assets/images/alsjq/3.jpg')],
                dbx: ['大白熊',require('./../../assets/images/l/3.jpg'),require('./../../assets/images/dbx/1.jpg'),require('./../../assets/images/dbx/2.jpg'),require('./../../assets/images/dbx/3.jpg')],
                gjs: ['高加索',require('./../../assets/images/l/4.jpg'),require('./../../assets/images/gjs/1.jpg'),require('./../../assets/images/gjs/2.jpg'),require('./../../assets/images/gjs/3.jpg')],
                jm: ['金毛',require('./../../assets/images/l/5.jpg'),require('./../../assets/images/jm/1.jpg'),require('./../../assets/images/jm/2.jpg'),require('./../../assets/images/jm/3.jpg')],
                lwn: ['罗威纳',require('./../../assets/images/l/6.jpg'),require('./../../assets/images/lwn/1.jpg'),require('./../../assets/images/s/2.jpg'),require('./../../assets/images/s/3.jpg')],
                bom: ['布偶猫',require('./../../assets/images/mm/1.jpg'),require('./../../assets/images/bom/1.jpg'),require('./../../assets/images/bom/2.jpg'),require('./../../assets/images/bom/3.jpg')],
                lm: ['蓝猫',require('./../../assets/images/mm/2.jpg'),require('./../../assets/images/lm/1.jpg'),require('./../../assets/images/lm/2.jpg'),require('./../../assets/images/lm/3.jpg')],
                jc: ['渐层',require('./../../assets/images/mm/3.jpg'),require('./../../assets/images/jc/1.jpg'),require('./../../assets/images/jc/2.jpg'),require('./../../assets/images/jc/3.jpg')],
                lbm: ['蓝白猫',require('./../../assets/images/mm/4.jpg'),require('./../../assets/images/lbm/1.jpg'),require('./../../assets/images/lbm/2.jpg'),require('./../../assets/images/lbm/3.jpg')],
                md: ['美短',require('./../../assets/images/mm/5.jpg'),require('./../../assets/images/md/1.jpg'),require('./../../assets/images/md/2.jpg'),require('./../../assets/images/md/3.jpg')],
                jf: ['加菲',require('./../../assets/images/mm/6.jpg'),require('./../../assets/images/jf/1.jpg'),require('./../../assets/images/jf/2.jpg'),require('./../../assets/images/jf/3.jpg')],
                ze: ['折耳',require('./../../assets/images/mm/7.jpg'),require('./../../assets/images/ze/1.jpg'),require('./../../assets/images/ze/2.jpg'),require('./../../assets/images/ze/3.jpg')]
            }
        }
    },
    created () {
     
      setTimeout(function () {
        var $transition = document.getElementsByClassName('_transition')[0];
        $transition.style = "opacity: 1";
      },100);

      this.type =this.$route.params.id;  
    },
    methods: {
      showWechat () {
        //控制父级路由的数据
        this.$options.parent.wechatFlag = true;
      }
    }
};
</script>

<style>
.aTitle {
  width: 100%;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 24px;
}
.aBody {
  width: 100%;
  margin: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  line-height: 1.8;
  font-size: 14px;
}
.ul14 {
  width: 100%;
  margin: auto;
  height: 50px;
  clear: both;
  overflow: hidden;
  margin-top: 40px;
  margin-bottom: 40px;
}
.ul14 li {
  width: 33.333%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  float: left;
  font-size: 14px;
  text-align: center;
}
.ul14 li a,
.ul14 li a:hover {
  color: #fff;
}
.ul14 .li1 {
  background-color: #eb644e;
}
.ul14 .li2 {
  background-color: #33cc33;
  cursor: pointer;
}
.ul14 .li3 {
  background-color: #f4b840;
}
.aBody img {
    width: 100%;
    height: 100%;
}
</style>