<template>
  <div id="app1" v-if="$route.path === '/'">
    <router-view></router-view>
  </div>
  <div id="app1" v-else>
    <Top></Top>
    <router-view></router-view>
    <Bottom></Bottom>
  </div>
   
</template>

<script setup>
import Bottom from './components/Bottom.vue';
import Top from './components/Top.vue';
</script>

<style>
input {
  all: unset; /* CSS3 的簡寫方式，重置所有屬性 */
}
body {
  margin: 0;
}
</style>