<template>
  <div>
    <div class="w0">
      <div class="w1 title1">喂养知识</div>
      <div class="w1 ht1 ul10 f2">
        <ul>
          <li class="li1">
            <em class='right'>2017年05月28日</em>
            <router-link :to="{name:'Solve',params: { id: 'dont_eat'}}">
              狗狗不吃狗粮怎么办
            </router-link>
          </li>
          <li class="li2">
            <em class='right'>2013年12月06日</em>
            <router-link :to="{name:'Solve',params: { id: 'how_do'}}">
              养狗注意事项
            </router-link>
          </li>
          <li class="li3">
            <em class='right'>2013年11月29日</em>
            <router-link :to="{name:'Solve',params: { id: 'why_spit'}}">
              小狗为什么喜欢乱咬东西呢？
            </router-link>
          </li>
        </ul>
        <div class="pageList ft2">
          <cite>共3条</cite>
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
@import "./../../assets/css/page/index.css";
@import "./../../assets/css/page/know.css";
</style>