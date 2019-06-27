<template>
<div>
    <div class="w0">
	<div class="w1 title1">狗狗视频</div>
    <div class="w1 ht1 ul9 f2">
    	<ul class='sorry'>
            暂时没有数据
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
}
</script>

<style>
@import "./../../assets/css/page/video.css";

</style>