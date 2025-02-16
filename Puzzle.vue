<template>
    <div class="puzzleContainer">
        <div class="puzzleCotent" @keydown="arrowControl($event)" tabindex="0" ref="puzzleContent">
            <div class="puzzleBox">
                <div v-for="piece in puzzles" :key="piece.id" class="puzzle" 
                :style="{ top: piece.top, left: piece.left, backgroundPosition: piece.position, opacity: piece.opacity}" @click="change(piece.index,piece.id)"
                >
                </div>
            </div>
            <!-- 尚未开始前的页面 -->
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

        <div class="levelAndShow">
            <div class="rules">
                <h3>玩法说明:</h3>
                <h5>通过上 <i class="bi bi-arrow-up-square"></i> 下 <i class="bi bi-arrow-down-square"></i> 左 <i class="bi bi-arrow-left-square"></i> 右 <i class="bi bi-arrow-right-square"></i> 或是鼠标点击进行移动，将图片拼回如下方(图)即可通关</h5>
                <button type="button" class="btn btn-primary" @click="replay" :disabled="readyGo">这局不算<i class="bi bi-arrow-counterclockwise"></i></button>
            </div>
            <div class="level">
                <h3>难度等级:</h3>
                <div class="levelButton">
                    <button type="button" class="btn btn-outline-success">简单</button>
                    <button type="button" class="btn btn-outline-warning">中等</button>
                    <button type="button" class="btn btn-outline-secondary">困难</button>
                    <button type="button" class="btn btn-outline-danger">地狱</button>
                </div>
            </div>
            <div class="completeContent">
                <div class="completePhoto">
                    <h3>完成图:</h3>
                    <div class="originalPicture"></div>
                </div>
                <div class="completeTime">
                    <h3>花费时间:</h3>
                    <span>{{ hours }}:{{ minutes }}:{{ seconds }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,nextTick } from 'vue';
import { usePuzzleStore } from '@/store/Puzzle';
import { storeToRefs } from 'pinia';

const puzzleStore = usePuzzleStore()
const {readyGo,puzzles, hours, seconds,minutes,isComplete} = storeToRefs(puzzleStore)
    const puzzleContent = ref(null); 
    function ready() { 
        puzzleStore.storeshufflePuzzles()
        nextTick(() => {
            puzzleContent.value.focus();
        });
    }
    // 重新开始
    function replay() {
        puzzleStore.cleanTimer()
    }
    // 初始的位置
    const originalPositions = [
        { top: '0', left: '0' },
        { top: '0', left: '33%' },
        { top: '0', left: '66%' },
        { top: '33%', left: '0' },
        { top: '33%', left: '33%' },
        { top: '33%', left: '66%' },
        { top: '66%', left: '0' },
        { top: '66%', left: '33%' },
        { top: '66%', left: '66%' },
    ];
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
    .completeTime span {
        font-size: 40px;
    }
    .completeContent {
        display: flex;
    }
    .fade-enter-active,.fade-leave-active {
        transition: opacity 1s ease-in ;
    }
    .fade-enter, .fade-leave-to { 
        opacity: 0;
    }
    
    .startGame, .finishGame {
        width: 100%;
        height: 100%;
        background-color: rgba(80, 79, 79, 0.781);
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
    }
    .startImg {
        width: 350px;
        height: 200px;
        background-image: url('../public/puzzle-logo.png');
        background-size: 100%;
        transition: transform 0.3s ease-in-out ;
        cursor: pointer;
    }
    .startImg:hover {
        transform: scale(1.2);
    }
    .totally{
        visibility: hidden;
    }
    .puzzleContainer {
        display: flex;
        position: relative;
    }
    .originalPicture {
        width: 200px;
        height: 200px;
        background-size: 100%;
        background-image: url('../public/肌肉男3.jpg');
        margin: 20px 40px;
    }
    .puzzle {
        position: absolute;
        width: 32%;
        height: 32%;
        background-color: pink;
        font-size: 30px;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.551);
        background-size: 300%;
        background-image: url('../public/肌肉男3.jpg');
        transition: top 0.3s ease, left 0.3s ease, opacity 1.5s ease-in-out;
    }
    
    .puzzleCotent {
        width: 500px;
        height: 500px;
        background-color: rgb(141, 230, 136);
        position: relative;
        padding: 10px;       
    }
    .puzzleBox {
        width: 490px;
        height: 490px;
        position: relative;
    }
</style>