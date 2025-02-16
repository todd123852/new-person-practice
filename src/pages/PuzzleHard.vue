<template>
    <div class="puzzleCotent" @keydown="arrowControl($event)" tabindex="0" ref="puzzleContent">
        <div class="puzzleBox">
            <div v-for="puzzle in puzzles" :key="puzzle.id" class="puzzle" 
            :style="{ top: puzzle.top, left: puzzle.left, backgroundPosition: puzzle.position, opacity: puzzle.opacity,
            backgroundImage:`url(/src/public/puzzle${photoNumber}.jpg)`}" 
            @click="change(puzzle.index,puzzle.id)"
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
    const {readyGo, hours, seconds,minutes,isComplete,photoNumber,puzzles} = storeToRefs(puzzleStore)
    
    puzzleStore.setOriginalPuzzle(5);


    const puzzleContent = ref(null); 
    function ready() { 
        puzzleStore.storeshufflePuzzles()
        nextTick(() => {
            puzzleContent.value.focus();
        });
    }

     
    //交换拼图
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
   background-size:500%;
   width: 20%;
   height: 20%;
}
 </style>