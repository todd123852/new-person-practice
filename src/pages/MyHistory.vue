<template>
  <div class="timeline" ref="scrollContainer" :style="{backgroundImage:`url(${bgc})`}">
    <div class="timeline-item" 
    v-for="learn in timeLine"
    :key="learn.week"
    >
      <div class="timeline-marker">
        <img :src="learn.logo" alt="HTML Logo">
      </div>
      <div class="timeline-content">
        <h3>{{ learn.title }}</h3>
        <!-- 缩写版 -->
        <p class="summary">
            {{ learn.readMore ? learn.fullContent : firstContent(learn.fullContent)}}
        </p>
        <button v-if="!learn.readMore"
        class="read-more" 
        @click="learn.readMore = true"
        >查看更多</button>
        <button v-else
        class="read-more" 
        @click="learn.readMore = false"
        >收起</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import timeLine from '@/store/TimeLine'
  import bgc from '@/public/bgc.jpg'
  function firstContent(str) {
      const myStr = str.split('').slice();
      return myStr.slice(0, 30).join('') + '...'
  }
</script>

<style scoped>
@import '/src/assets/MyHistory.css';
</style>