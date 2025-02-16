<template>
   <div class="puzzleCotent" @keydown="arrowControl($event)" tabindex="0" ref="puzzleContent">
        <div class="puzzleBox">
            <div v-for="piece in puzzles" :key="piece.id" class="puzzle" 
            :style="{ top: piece.top, left: piece.left, backgroundPosition: piece.position, opacity: piece.opacity,
            backgroundImage:`url(${base}/src/public/puzzle${photoNumber}.jpg)`}" 
            @click="change(piece.index,piece.id)"
            >
            </div>
        </div>
        
        <transition name="fade">
            <div class="startGame" v-show="readyGo">
                <div class="startImg" @click="ready"></div>
            </div>
        </transition>

        <Transition name="isComplete">
            <div class="finishGame" v-show="isComplete">
                <h3>完成时间:</h3>
                <span>{{ hours }}:{{ minutes }}:{{ seconds }}</span>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref,nextTick,onMounted } from 'vue';
import { usePuzzleStore } from '@/store/Puzzle';
import { storeToRefs } from 'pinia';

const puzzleStore = usePuzzleStore();
const {readyGo,puzzles, hours, seconds,minutes,isComplete,photoNumber} = storeToRefs(puzzleStore);

const base = process.env.NODE_ENV === 'production' ? '/new-person-practice':'..'
    puzzleStore.setOriginalPuzzle(3)

    onMounted(()=>{console.log(puzzles);})
    // 聚焦拼图
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
   background-size:300%;
   width: 33.3%;
   height: 33.3%;
}
</style>