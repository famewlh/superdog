<template>
  <div>
    <div class="w0 ft2">
      <div class="w1 title1">联系我们</div>
      <div class="w1 f2">
        <div class="txt1 ht1 p2">
          <p style="text-align: center;">
            <span style="color:#2980b9;">
              <strong>
                <span style="font-size:16px;">24小时营业，随时来看都可以，全年无休，来之前请联系客服发定位确保不会跑偏</span>
              </strong>
            </span>
          </p>

          <p style="text-align: center;">
            <span style="color:#2980b9;">
              <strong>
                <span style="font-size:16px;">联系电话：13433106606（微信号同号）</span>
              </strong>
            </span>
          </p>

          <p style="text-align: center;">
            <img src="./../../assets/images/1215115860.jpg">
          </p>

          <p style="text-align: center;">
            <span style="color:#3498db;">
              <strong>
                <span style="font-size:14px;">扫一扫加微信发定位看幼犬视频</span>
              </strong>
            </span>
          </p>
        </div>
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
</style>