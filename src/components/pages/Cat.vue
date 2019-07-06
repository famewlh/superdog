<template>
  <div>
    <div class="w0 ft2">
      <div class="w1 title6">猫咪出售</div>
      <div class="w1 f2 cate">
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
            <router-link :to="{name:'Detail',params: { id: 'jc'}}">
              <img src="./../../assets/images/mm/7.jpg" alt="折耳">
              <br>折耳
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
@import "./../../assets/css/page/cat.css";
</style>