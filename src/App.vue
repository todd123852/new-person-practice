<template>
  <div id="app1" v-if="$route.path === base+'/'">
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
const base = process.env.NODE_ENV === 'production' ? '/new-person-practice':''
</script>

<style>
body {
  margin: 0;
}
</style>