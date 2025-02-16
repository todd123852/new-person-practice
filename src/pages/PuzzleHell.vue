<template>
    <div class="puzzleCotent" @keydown="arrowControl($event)" tabindex="0" ref="puzzleContent">
         <div class="puzzleBox">
             <div v-for="piece in puzzles" :key="piece.id" class="puzzle" 
             :style="{ top: piece.top, left: piece.left, backgroundPosition: piece.position, opacity: piece.opacity,
             backgroundImage:`url(../src/public/puzzle${photoNumber}.jpg)`}" 
             @click="change(piece.index,piece.id)"
             >
             </div>
         </div>
         
         <transition name="fade">
         <div class="startGame" v-show="readyGo">
             <div class="startImg" @click="ready"></div>
         </div>
         </transition>
 
         <transition name="isComplete">
             <div class="finishGame" v-show="isComplete">
                 <h3>完成时间:</h3>
                 <span>{{ hours }}:{{ minutes }}:{{ seconds }}</span>
             </div>
         </transition>
     </div>
 </template>
 
 <script setup>
 import { ref,nextTick } from 'vue';
 import { usePuzzleStore } from '@/store/Puzzle';
 import { storeToRefs } from 'pinia';
const puzzleStore = usePuzzleStore()
const {readyGo,puzzles, hours, seconds,minutes,isComplete,photoNumber} = storeToRefs(puzzleStore)

    puzzleStore.setOriginalPuzzle(6);

     const puzzleContent = ref(null); 
     function ready() { 
         puzzleStore.storeshufflePuzzles()
         nextTick(() => {
             puzzleContent.value.focus();
         });
     }
     // 交换拼图
     function change(pieceIndex, pieceID) {
         puzzleStore.storechange(pieceIndex, pieceID)
     }
 
     // 上下左右移动
     function arrowControl (event) {
         event.preventDefault();
         puzzleContent.value.focus();
         if (!readyGo.value) {
             puzzleStore.storearrowControl(event)
         }
     };
 </script>
 
 <style scoped>
@import '/src/assets/Puzzle.css';
.puzzle {
   background-size:600%;
   width: 16.6%;
   height: 16.6%;
}
 </style>