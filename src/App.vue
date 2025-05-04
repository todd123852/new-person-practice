<template>
  <div id="app1">
    <Top v-if="$route.path !== '/'"></Top>
    <transition name="slide-right" mode="out-in">
      <router-view></router-view>
    </transition>
    <Bottom v-if="$route.path !== '/'"></Bottom>
  </div>
</template>

<script setup>
import Bottom from './components/Bottom.vue';
import Top from './components/Top.vue';
const base = process.env.NODE_ENV === 'production' ? '/new-person-practice':''
</script>

<style>
body {
  margin: 0;
  position: relative;
}
/* 进入过渡 */
.slide-right-enter-from {
  transform: translateX(100%); /* 新组件从左侧隐藏 */
  opacity: 0;
}
.slide-right-enter-active {
  transition: all 0.3s ease; /* 定义过渡效果 */
}
.slide-right-enter-to {
  transform: translateX(0); /* 新组件滑动到正常位置 */
  opacity: 1;
}

/* 离开过渡 */
.slide-right-leave-from {
  transform: translateX(0); /* 旧组件的起始位置 */
  opacity: 1;
}
.slide-right-leave-active {
  transition: all 0.3s ease; /* 定义过渡效果 */
  position: absolute; /* 使离开的元素脱离文档流，不影响新元素的位置 */
  width: 100%; /* 确保离开的元素占据完整宽度 */
}
.slide-right-leave-to {
  transform: translateX(-100%); /* 旧组件向右侧隐藏 */
  opacity: 0;
}
</style>