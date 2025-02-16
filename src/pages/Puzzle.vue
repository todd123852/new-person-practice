<template>
    <div class="puzzleContainer">
        <router-view></router-view>
        <div class="levelAndShow">
            <div class="rules">
                <h3>玩法说明:</h3>
                <h5>通过上 <i class="bi bi-arrow-up-square"></i> 下 <i class="bi bi-arrow-down-square"></i> 左 <i class="bi bi-arrow-left-square"></i> 右 <i class="bi bi-arrow-right-square"></i> 或是鼠标点击进行移动，将图片拼回如下方(图)即可通关</h5>
                <!-- 重新开始 -->
                <button type="button" class="btn btn-primary" @click="replay" :disabled="readyGo">这局不算<i class="bi bi-arrow-counterclockwise"></i></button>
                <!-- 换一张图 -->
                <button type="button" class="btn btn-primary" @click="changePhoto()"
                >换一张图<i class="bi bi-arrow-counterclockwise"></i></button>
            </div>
            <div class="level">
                <h3>难度等级:</h3>
                <div class="levelButton">
                    <router-link v-for="level in levels" :key=level.path :to="level.path" @click="changePhoto()"
                    class="levelLink" active-class="activeLink">
                        {{ level.name }}
                    </router-link>
                </div>
            </div>
            <div class="completeContent">
                <div class="completePhoto">
                    <h3>完成图:</h3>
                    <div class="originalPicture" 
                    :style="{backgroundImage:`url(/src/public/puzzle${photoNumber}.jpg)`}"
                    >
                    </div>
                </div>
                <div class="completeTime">
                    <h3>花费时间:</h3>
                    <div>{{ hours }}:{{ minutes }}:{{ seconds }}</div>
                    <div class="reverse">{{ hours }}:{{ minutes }}:{{ seconds }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePuzzleStore } from '@/store/Puzzle';
import { storeToRefs } from 'pinia';
const puzzleStore = usePuzzleStore()
const {readyGo, hours, seconds,minutes,photoNumber} = storeToRefs(puzzleStore)
    // 重新开始
    function replay() {
        puzzleStore.cleanTimer()
    } 
    function changePhoto() {
        puzzleStore.storeChangePhoto()
    }
    const levels = [
        {name:'简单', path:'easy'},
        {name:'普通', path:'medium'},
        {name:'困难', path:'hard'},
        {name:'地狱', path:'hell'},
    ]
</script>

<style scoped>
    * {
        color: #fff;
    }
    .activeLink{
        background-color: #fff;
        color: black;
        font-weight: 1000;
        font-size: 22px;
    }
    .completeTime {
        position: relative;

    }
    .completeTime div {
        font-size: 80px;
    }
    .completeTime .reverse {
        position: absolute;
        top: 45%;
        transform: scaleY(-1);
        opacity: 0.2;
        color: transparent;
        background: linear-gradient(to bottom, rgba(139, 136, 136, 0.863), rgba(201, 199, 199, 0.664)); /* 顏色從淺到深的漸變 */
        -webkit-background-clip: text; /* 剪裁背景以適應文字 */
        background-clip: text;
    }
    .completeContent {
        display: flex;
        flex: 4;
    }
    .fade-enter-active,.fade-leave-active {
        transition: opacity 1s ease-in ;
    }
    .fade-enter, .fade-leave-to { 
        opacity: 0;
    }
    .levelAndShow {
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 510px;
        background: linear-gradient(115deg,rgb(0, 0, 0), rgb(194, 194, 116));
    }
    .rules {
        margin: 5px;
        flex: 2;
    }
    .rules button {
        margin: 10px;
    }
    .level {
        flex: 2;
        position: relative;
    }
    .levelButton {
        display: flex;
        width: 80%;
        min-width: 80%;
        align-items: center;
    }
    .levelButton .levelLink {
        min-width: 100px;
        height: 40px;
        border: 2px solid rgb(134, 180, 233);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }
    .levelLink:hover {
        background-color: #fff;
        color: black;
        font-weight: 1000;
    }
    .totally{
        visibility: hidden;
    }
    .puzzleContainer {
        display: flex;
        position: relative;
    }
    .originalPicture {
        width: 190px;
        height: 190px;
        background-size: 100%;
        border: 2px solid #fff;
    }
    .completePhoto{
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 100px;
    }
</style>