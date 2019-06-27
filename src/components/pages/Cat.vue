<template>
  <div>
    <div class="w0 ft2">
      <div class="w1 title6">猫咪出售</div>
      <div class="w1 f2 cate">
        <ul>
          <li class="li_1">
            <em></em>
            <a href="buou.html" title="布偶猫">
              <img src="./../../assets/images/mm/1.jpg" alt="布偶猫">
              <br>布偶猫
            </a>
          </li>
          <li class="li_2">
            <em></em>
            <a href="lanmao.html" title="蓝猫">
              <img src="./../../assets/images/mm/2.jpg" alt="蓝猫">
              <br>蓝猫
            </a>
          </li>
          <li class="li_3">
            <em></em>
            <a href="cats_26683.html" title="渐层">
              <img src="./../../assets/images/mm/3.jpg" alt="渐层">
              <br>渐层
            </a>
          </li>
          <li class="li_4">
            <em></em>
            <a href="lanbai.html" title="蓝白猫">
              <img src="./../../assets/images/mm/4.jpg" alt="蓝白猫">
              <br>蓝白猫
            </a>
          </li>
          <li class="li_4">
            <em></em>
            <a href="meiduan.html" title="美短">
              <img src="./../../assets/images/mm/5.jpg" alt="美短">
              <br>美短
            </a>
          </li>
          <li class="li_4">
            <em></em>
            <a href="jiefei.html" title="加菲">
              <img src="./../../assets/images/mm/6.jpg" alt="加菲">
              <br>加菲
            </a>
          </li>
          <li class="li_4">
            <em></em>
            <a href="zheer.html" title="折耳">
              <img src="./../../assets/images/mm/7.jpg" alt="折耳">
              <br>折耳
            </a>
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
@import "./../../assets/css/page/cat.css";
</style>