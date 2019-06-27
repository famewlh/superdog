<template>
  <div>
    <!-- 选择猫狗 -->
    <div class="w0 bgc1">
      <div class="w1 f2 ft2 ul13">
        <ul>
          <li class="li1">
            <div>
              <router-link :to="{name: 'Dog'}">挑选狗狗</router-link>
            </div>
          </li>
          <li class="li2">
            <div>
              <router-link :to="{name: 'Cat'}">挑选猫咪</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 宠物品种导航 -->
    <div class="w0">
      <div class="w1 title7">宠物品种导航</div>
      <div class="w1 ul2">
        <ul>
          <li :class="{'li1':true,'on': type =='s'}" alt="1" @click="showType('s')">
            <div class="d0">
              <div class="d1"></div>
              <div class="d2">小型犬</div>
            </div>
          </li>
          <li :class="{'li2':true,'on': type =='m'}" alt="2" @click="showType('m')">
            <div class="d0">
              <div class="d1"></div>
              <div class="d2">中型犬</div>
            </div>
          </li>
          <li :class="{'li3':true,'on': type =='l'}" alt="3" @click="showType('l')">
            <div class="d0">
              <div class="d1"></div>
              <div class="d2">大型犬</div>
            </div>
          </li>
          <li :class="{'li4':true,'on': type =='mm'}" alt="4" @click="showType('mm')">
            <div class="d0">
              <div class="d1"></div>
              <div class="d2">猫咪</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="w0 bgc3">
        <div class="w1">
          <div class="cate cate_dog cate1 f2" v-show="type == 's'">
            <ul>
              <li class="li_1">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'mejs'}}">
                  <img src="./../../assets/images/s/1.jpg" alt="马尔济斯">
                  <br>马尔济斯
                </router-link>
              </li>
              <li class="li_2">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'bmq'}}">
                  <img src="./../../assets/images/s/2.jpg" alt="博美犬">
                  <br>博美犬
                </router-link>
              </li>
              <li class="li_3">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'xgd'}}">
                  <img src="./../../assets/images/s/3.jpg" alt="西高地">
                  <br>西高地
                </router-link>
              </li>
              <li class="li_4">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'xnr'}}">
                  <img src="./../../assets/images/s/4.jpg" alt="雪纳瑞">
                  <br>雪纳瑞
                </router-link>
              </li>
              <li class="li_5">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'ykx'}}">
                  <img src="./../../assets/images/s/5.jpg" alt="约克夏">
                  <br>约克夏
                </router-link>
              </li>
              <li class="li_6">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'fgdnq'}}">
                  <img src="./../../assets/images/s/6.jpg" alt="法国斗牛犬">
                  <br>法国斗牛犬
                </router-link>
              </li>
              <li class="li_7">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'bxq'}}">
                  <img src="./../../assets/images/s/7.jpg" alt="比熊犬">
                  <br>比熊犬
                </router-link>
              </li>
              <li class="li_8">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'yn'}}">
                  <img src="./../../assets/images/s/8.jpg" alt="英牛">
                  <br>英牛
                </router-link>
              </li>
              <li class="li_9">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'tdq'}}">
                  <img src="./../../assets/images/s/9.jpg" alt="泰迪犬">
                  <br>泰迪犬
                </router-link>
              </li>
            </ul>
          </div>
          <div class="cate cate_dog cate2 f2" v-show="type == 'm'">
            <ul>
              <li class="li_2">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'hsq'}}">
                  <img src="./../../assets/images/m/1.jpg" alt="哈士奇">
                  <br>哈士奇
                </router-link>
              </li>
              <li class="li_3">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'smy'}}">
                  <img src="./../../assets/images/m/2.jpg" alt="萨摩耶">
                  <br>萨摩耶
                </router-link>
              </li>
              <li class="li_5">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'ss'}}">
                  <img src="./../../assets/images/m/3.jpg" alt="松狮">
                  <br>松狮
                </router-link>
              </li>
              <li class="li_7">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'bm'}}">
                  <img src="./../../assets/images/m/4.jpg" alt="边牧">
                  <br>边牧
                </router-link>
              </li>
              <li class="li_8">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'cq'}}">
                  <img src="./../../assets/images/m/5.jpg" alt="柴犬">
                  <br>柴犬
                </router-link>
              </li>
              <li class="li_10">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'lbldq'}}">
                  <img src="./../../assets/images/m/6.jpg" alt="拉布拉多犬">
                  <br>拉布拉多犬
                </router-link>
              </li>
            </ul>
          </div>
          <div class="cate cate_dog cate3 f2" v-show="type == 'l'">
            <ul>
              <li class="li_1">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'qtq'}}">
                  <img src="./../../assets/images/l/1.jpg" alt="秋田犬">
                  <br>秋田犬
                </router-link>
              </li>

              <li class="li_2">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'alsjq'}}">
                  <img src="./../../assets/images/l/2.jpg" alt="阿拉斯加犬">
                  <br>阿拉斯加犬
                </router-link>
              </li>
              <li class="li_3">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'dbx'}}">
                  <img src="./../../assets/images/l/3.jpg" alt="大白熊">
                  <br>大白熊
                </router-link>
              </li>
              <li class="li_3">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'gjs'}}">
                  <img src="./../../assets/images/l/4.jpg" alt="高加索">
                  <br>高加索
                </router-link>
              </li>
              <li class="li_3">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'jm'}}">
                  <img src="./../../assets/images/l/5.jpg" alt="金毛">
                  <br>金毛
                </router-link>
              </li>
              <li class="li_3">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'lwn'}}">
                  <img src="./../../assets/images/l/6.jpg" alt="罗威纳">
                  <br>罗威纳
                </router-link>
              </li>
            </ul>
          </div>
          <div class="cate cate_dog cate4 f2" v-show="type == 'mm'">
            <ul>
              <li class="li_1">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'bom'}}">
                  <img src="./../../assets/images/mm/1.jpg" alt="布偶猫">
                  <br>布偶猫
                </router-link>
              </li>
              <li class="li_2">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'lm'}}">
                  <img src="./../../assets/images/mm/2.jpg" alt="蓝猫">
                  <br>蓝猫
                </router-link>
              </li>
              <li class="li_3">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'jc'}}">
                  <img src="./../../assets/images/mm/3.jpg" alt="渐层">
                  <br>渐层
                </router-link>
              </li>
              <li class="li_4">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'lbm'}}">
                  <img src="./../../assets/images/mm/4.jpg" alt="蓝白猫">
                  <br>蓝白猫
                </router-link>
              </li>
              <li class="li_4">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'md'}}">
                  <img src="./../../assets/images/mm/5.jpg" alt="美短">
                  <br>美短
                </router-link>
              </li>
              <li class="li_4">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'jf'}}">
                  <img src="./../../assets/images/mm/6.jpg" alt="加菲">
                  <br>加菲
                </router-link>
              </li>
              <li class="li_4">
                <em></em>
                <router-link :to="{name:'Detail',params: { id: 'ze'}}">
                  <img src="./../../assets/images/mm/7.jpg" alt="折耳">
                  <br>折耳
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 宠物服务 -->
    <div class="w0">
      <div class="w1 title1">宠物服务</div>
      <div class="w1 ul3">
        <ul>
          <li class="li1">
            <div class="d1"></div>
            <div class="d2">健康纯种</div>
          </li>
          <li class="li2">
            <div class="d1"></div>
            <div class="d2">专业繁殖</div>
          </li>
          <li class="li3">
            <div class="d1"></div>
            <div class="d2">协议保障</div>
          </li>
          <li class="li4">
            <div class="d1"></div>
            <div class="d2">售后无忧</div>
          </li>
          <li class="li5">
            <div class="d1"></div>
            <div class="d2">上门挑选</div>
          </li>
          <li class="li6">
            <div class="d1"></div>
            <div class="d2">市内送宠</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 最新狗狗待售 -->
    <div class="w0">
      <div class="w1 title1">最新狗狗待售</div>
      <div class="w1 ul4 f2">
        <ul>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'fgdnq'}}">
                <img src="./../../assets/images/s/6.jpg" alt="法斗幼犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'fgdnq'}}">法国斗牛犬</router-link>
            </div>
            <div class="d3">品种：法国斗牛犬</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'fgdnq'}}">
                <img src="./../../assets/images/s/10.jpg" alt="法斗幼犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'fgdnq'}}">法斗幼犬</router-link>
            </div>
            <div class="d3">品种：法国斗牛犬</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'cq'}}">
                <img src="./../../assets/images/m/5.jpg" alt="柴犬幼犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'cq'}}">
                柴犬
              </router-link>
            </div>
            <div class="d3">品种：柴犬</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
             <router-link :to="{name:'Detail',params: { id: 'cq'}}">
                <img src="./../../assets/images/m/7.jpg" alt="柴犬幼犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'cq'}}">
                柴犬
              </router-link>
            </div>
            <div class="d3">品种：柴犬</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'qtq'}}">
                <img src="./../../assets/images/l/7.jpg" alt="秋田犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'qtq'}}">
                秋田犬
              </router-link>
            </div>
            <div class="d3">品种：秋田犬</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'qtq'}}">
                <img src="./../../assets/images/l/8.jpg" alt="秋田犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'qtq'}}">
                秋田犬
              </router-link>
            </div>
            <div class="d3">品种：秋田犬</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'hsq'}}">
                <img src="./../../assets/images/m/1.jpg" alt="哈士奇幼犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'hsq'}}">
                哈士奇幼犬
              </router-link>
            </div>
            <div class="d3">品种：哈士奇</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'hsq'}}">
                <img src="./../../assets/images/m/8.jpg" alt="哈士奇幼犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'hsq'}}">
                哈士奇幼犬
              </router-link>
            </div>
            <div class="d3">品种：哈士奇</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'smy'}}">
                <img src="./../../assets/images/m/2.jpg" alt="萨摩耶幼犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'smy'}}">
               萨摩耶幼犬
              </router-link>
            </div>
            <div class="d3">品种：萨摩耶</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
               <router-link :to="{name:'Detail',params: { id: 'smy'}}">
                <img src="./../../assets/images/m/9.jpg" alt="萨摩耶幼犬">
              </router-link>
            </div>
            <div class="d2">
             <router-link :to="{name:'Detail',params: { id: 'smy'}}">
               萨摩耶幼犬
              </router-link>
            </div>
            <div class="d3">品种：萨摩耶</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'alsjq'}}">
                <img src="./../../assets/images/l/9.jpg" alt="阿拉斯加">
              </router-link>
            </div>
            <div class="d2">
               <router-link :to="{name:'Detail',params: { id: 'alsjq'}}">
                阿拉斯加
              </router-link>
            </div>
            <div class="d3">品种：阿拉斯加犬</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'alsjq'}}">
                <img src="./../../assets/images/l/10.jpg" alt="阿拉斯加">
              </router-link>
            </div>
            <div class="d2">
               <router-link :to="{name:'Detail',params: { id: 'alsjq'}}">
                阿拉斯加
              </router-link>
            </div>
            <div class="d3">品种：阿拉斯加犬</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'jm'}}">
                <img src="./../../assets/images/l/5.jpg" alt="金毛幼犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'jm'}}">
               金毛幼犬
              </router-link>
            </div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'jm'}}">
                <img src="./../../assets/images/l/11.jpg" alt="金毛幼犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'jm'}}">
               金毛幼犬
              </router-link>
            </div>
            <div class="d3">品种：金毛犬</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'lbldq'}}">
                <img src="./../../assets/images/m/6.jpg" alt="拉布拉多幼犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'lbldq'}}">
                拉布拉多幼犬
              </router-link>
            </div>
            <div class="d3">品种：拉布拉多犬</div>
            <div class="d4"></div>
          </li>
          <li>
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'lbldq'}}">
                <img src="./../../assets/images/m/10.jpg" alt="拉布拉多幼犬">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'lbldq'}}">
                拉布拉多幼犬
              </router-link>
            </div>
            <div class="d3">品种：拉布拉多犬</div>
            <div class="d4"></div>
          </li>
        </ul>
      </div>
      <div class="w1">
        <div class="more f4">
          <router-link :to="{name: 'Dog'}">查看更多</router-link>
        </div>
      </div>
    </div>

    <!-- 最新猫咪代售 -->
    <div class="w0">
      <div class="w1 title6">最新猫咪待售</div>
      <div class="w1 ul4 f2">
        <ul>
          <li class="li1">
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'bom'}}">
                <img src="./../../assets/images/mm/1.jpg" alt="布偶猫">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'bom'}}">
                布偶猫
              </router-link>
            </div>
            <div class="d3">品种：布偶猫</div>
            <div class="d4"></div>
          </li>
          <li class="li2">
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'lm'}}">
                <img src="./../../assets/images/mm/2.jpg" alt="蓝猫">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'lm'}}">
              蓝猫
              </router-link>
            </div>
            <div class="d3">品种：蓝猫</div>
            <div class="d4"></div>
          </li>
          <li class="li3">
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'jc'}}">
                <img src="./../../assets/images/mm/5.jpg" alt="金渐层">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'qc'}}">
                金渐层
              </router-link>
            </div>
            <div class="d3">品种：金渐层</div>
            <div class="d4"></div>
          </li>
          <li class="li4">
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'jf'}}">
                <img src="./../../assets/images/mm/6.jpg" alt="加菲">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'jf'}}">
                加菲
              </router-link>
            </div>
            <div class="d3">品种：加菲</div>
            <div class="d4"></div>
          </li>
          <li class="li5">
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'lbm'}}">
                <img src="./../../assets/images/mm/7.jpg" alt="蓝白">
              </router-link>
            </div>
            <div class="d2">
               <router-link :to="{name:'Detail',params: { id: 'lbm'}}">
                蓝白猫
              </router-link>
            </div>
            <div class="d3">品种：蓝白</div>
            <div class="d4"></div>
          </li>
          <li class="li6">
            <div class="d1">
              <router-link :to="{name:'Detail',params: { id: 'md'}}">
                <img src="./../../assets/images/mm/8.jpg" alt="美短">
              </router-link>
            </div>
            <div class="d2">
              <router-link :to="{name:'Detail',params: { id: 'md'}}">
                美短
              </router-link>
            </div>
            <div class="d3">品种：美短</div>
            <div class="d4"></div>
          </li>
        </ul>
      </div>
      <div class="w1">
        <div class="more f4">
          <router-link :to="{name: 'Cat'}">查看更多</router-link>
        </div>
      </div>
    </div>
    <!-- 服务 -->
    <div class="w0 bgc3">
      <div class="w1 ul5">
        <ul>
          <li class="li1">
            <div class="d1"></div>
            <div class="d2">
              100%
              <br>实地拍摄
            </div>
          </li>
          <li class="li2">
            <div class="d1"></div>
            <div class="d2">
              1对1
              <br>私人养宠顾问
            </div>
          </li>
          <li class="li3">
            <div class="d1"></div>
            <div class="d2">
              宠物食品/用品
              <br>VIP价格
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 关于 -->
    <div class="w0 bg1">
      <div class="w1">
        <div class="about">
          <div class="about_title">关于我们</div>
          <div class="about_txt f3">
            <p>我们所出售的幼犬都是经由外国纯种血统繁殖的直系后代，每只出售的幼犬疫苗驱虫都是经过严格的系统操作，让您买到纯种健康的狗狗！虽然我们是繁育犬只和销售犬只的从业者，却也是资深的爱狗人士。对爱狗的我们来说，经营这项事业，绝对需要高度的职业道德，更需要一颗爱心。因为我们爱狗，所以我们希望每一只出自本犬舍的犬只，都能健康成长，并给主人带来快乐,这是我们最大的期望。</p>
          </div>
          <div class="more2 f1">
            <router-link :to="{name: 'About'}">查看更多</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 买家秀 -->
    <div class="w0 fixH8">
      <div class="w1 title1">买家秀</div>
      <div class="block">
        <el-carousel height="280px">
          <el-carousel-item v-for="(item,index) in carousel_img" :key="index">
            <img :src="item" alt="#" class="_img">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 宠物咨询 -->
    <div class="w0 fixH8">
      <div class="w1 title1">宠物资讯</div>
      <div class="w1 f2 ul10">
        <ul>
          <li class="li1">
            <em></em>
            <a href="know_25676_203620.html" title="狗狗不吃狗粮怎么办">狗狗不吃狗粮怎么办</a>
          </li>
          <li class="li2">
            <em></em>
            <a href="know_25676_203626.html" title="养狗注意事项">养狗注意事项</a>
          </li>
          <li class="li3">
            <em></em>
            <a href="know_25676_203627.html" title="小狗为什么喜欢乱咬东西呢？">小狗为什么喜欢乱咬东西呢？</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      type: "s",
      carousel_img: [
        require("./../../assets/images/1621475472.jpg"),
        require("./../../assets/images/1621215348.jpg")
      ]
    };
  },
  methods: {
    showType(type) {
      this.type = type;
    }
  },
   created () {
    setTimeout(function () {
      var $transition = document.getElementsByClassName('_transition')[0];
      $transition.style = "opacity: 1";
    },100);
  }
};
</script>

<style>
@import "./../../assets/css/page/index.css";
</style>