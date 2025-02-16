<template>
      <div class="main">
        <div class="rightPart">
            <div class="container">
                <div class="headCotent">
                    <div class="head">
                        <div class="leftStatus">
                            <span>11:26</span>
                        </div>
                        <div class="rightStatus">
                            <span>5G</span>
                            <i class="bi bi-reception-4"></i>
                            <i class="bi bi-wifi"></i>
                            <i class="bi bi-battery-half" id="battery"></i>
                        </div>
                    </div>
                    <div class="topAvator">
                        <div class="topAvatorLeft">
                            <i class="bi bi-chevron-left"></i>
                            <img v-if="(imgLeftUrl === null || imgLeftUrl === 'null')" :src="defImg">
                            <img v-else :src="imgLeftUrl">

                        </div>
                        <div class="topAvatorRight">
                            <i class="bi bi-telephone-fill"></i>
                            <i class="bi bi-camera-video-fill"></i>
                        </div>
                    </div>
                </div>
                <div class="body" ref="chatContainer">
                    <!-- 左/右边的人讲话 用v-for
                    <div class="leftUser">
                        <div class="chat-bubble user1">
                            <div class="cnotentLeft">
                                <img src="@/public/defaultavatar.jpg" alt="">
                                <p>Hello</p>
                            </div>
                        </div>
                    </div>
                    
                    右边的人讲话
                    <div class="rightUser">
                        <div class="chat-bubble user2">
                            <div class="cnotentRight">
                                <img src="@/public/defaultavatar.jpg" alt="">
                                <p>I'm good, thank you!</p>
                            </div>
                        </div>
                    </div> -->
                    <TransitionGroup name="chatContent" @enter="onAfterEnter">
                        <div v-for="(message, index) in messages" :key="message.key" :class="{'message': true, 
                        'chatTime': message.user === 'timeUser', 
                        'leftUser': message.user === 'left', 
                        'rightUser': message.user === 'right', 
                        'continued': index > 0 && isContinued(index)
                        }">
                            <!-- 时间戳 -->
                            <div v-if="message.user === 'timeUser'" class="chatTime">
                                {{ message.text }}
                                <a @click="emit('delMessage', message.key)">
                                    <i class="bi bi-x-circle-fill timeDel"></i>
                                </a>
                            </div>
                            <!-- 对话串 -->
                            <div v-else class="message-container">
                                <div class="chat-bubble" :class="message.user === 'left' ? 'user1' : 'user2'">
                                    <div :class="message.user === 'left' ? 'cnotentLeft' : 'cnotentRight'">
                                        <img v-if="message.user === 'left' && (imgLeftUrl === null || imgLeftUrl === 'null')" :src="defImg">
                                        <img v-else-if="message.user === 'right' && imgRightUrl === 'null' || imgRightUrl === null" :src="defImg">
    
                                        <img v-else-if="message.user === 'left'" :src="imgLeftUrl">
                                        <img v-else-if="message.user === 'right'" :src="imgRightUrl">
    
                                        <!-- 渲染对话 -->
                                        <p>{{ message.text }}</p>
                                    </div>
                                    <!-- 删除图标 -->
                                    <a @click="emit('delMessage', message.key)">
                                        <i class="bi bi-x-circle-fill"
                                        :class="message.user === 'right' ? 'rightDel' : 'leftDel'"
                                        ></i>
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </TransitionGroup>
                </div>

                <div class="foot">
                    <i class="bi bi-plus-circle"></i>
                    <i class="bi bi-image"></i>
                    <div class="textMessege">
                        <span>Aa</span>
                        <i class="bi bi-emoji-smile-fill"></i>
                    </div>
                    <i class="bi bi-mic-fill"></i>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';
// 解构方式接收
const {messages, imgRightUrl, imgLeftUrl} = defineProps(['messages','imgRightUrl','imgLeftUrl'])
const defImg = 'https://cdn1.cybassets.com/media/W1siZiIsIjE2NzgwL3Byb2R1Y3RzLzUyNjI0ODI5LzE3MzU1ODM1MzVfOWJiZWJmMmIyZmYyY2M5MTMxMTYuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=92897887875d225f'
let chatContainer = ref(null)
// 页面加载时划到最底部
onMounted(() => {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
})
// 页面更新时划到最底部
function onAfterEnter() {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
}
// 检测是否连续对话，是的话就减少间距
function isContinued(index) {
    return messages.length > 0 && index > 0 && messages[index].user === messages[index - 1].user;
}

// 删除业务
const emit = defineEmits(['delMessage'])
</script>

<style scoped>
    * {
        font-family: "Microsoft YaHei", sans-serif;
    }
    .chatContent-enter-active {
        transition: all 0.5s ease-in;
    }
    .chatContent-enter-from{
        opacity: 0;
        transform: translateX(10px);
    }
    i {
        margin-left: 3px;
    }
    .main {
        width: 800px;
        position: relative;
        height: 100%; 
    }
    .container {
        width: 360px;
        height:630px;
        background-color: #fff;
        margin: 0 auto;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0;
    }
    .headCotent{
        height: 12%;
    }
    .head {
        display: flex;
        width: 100%;
        height: 40%;
        padding: 3px 10px;
        position: relative;
        box-sizing: border-box;
        justify-content: space-between;
    }
    .leftStatus {
        margin: 0;
        position: relative;
    }
    .rightStatus {
        line-height: 25px;
        right: 5px;
        top: 2px;
    }

    .head span {
        font-family: "Microsoft YaHei", sans-serif;
        font-size: 16px;
        margin: 0;
        line-height: 3px;
    }
    .topAvator {
        display: flex;
        height: 65%;
        width: 100%;
        justify-content: space-between;
        padding: 3px 15px 3px 3px;
        color: black;
    }
    .topAvator img{
        width: 35px;
        height: 35px;
        border-radius: 100px;
        margin-left: 5px;
    }
    .topAvatorLeft,.topAvatorRight{
        display: flex;
        align-items: center;
        position: relative;
    }
    .topAvatorRight .bi {
        margin-left: 15px;
    }
    .material-icons{
        top: -1px;
        position: absolute;
        right: 1.5em;
    }
    .bi {
        font-size: 20px;
        color: black;
    }
    

    /* //////////////// body /////////////// */
    .body {
        position: relative;
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        /* 设置滚动条并隐藏滚动条样式 */
        overflow: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .leftUser {
        position: relative;
        display: flex;
        justify-content: flex-start;
    }
    .rightUser{
        position: relative;
        display: flex;
        justify-content: end;
    }
    .message-container{
        display: flex; /* 使用 Flexbox 布局 */
        flex-direction: column; /* 垂直排列消息气泡和时间 */
        align-items: flex-start; /* 默认左对齐，根据需要调整 */
        /*margin-bottom: 10px; /* 消息之间的间距 */
    }
    .rightUser .message-container {
        align-items: flex-end; /* 右对齐右侧消息 */
    }
    
    .body img {
        width: 30px;
        height: 30px;
        border-radius: 100px;
        position: absolute;
        bottom: 0;
    }
    .leftUser img {
        left: -33px;
    }
    .rightUser img {
        right: -33px;
    }

    .leftUser .chat-bubble {
        max-width: 70%;
        margin-left: 35px;
        padding: 5px;
        border-radius: 15px;
        position: relative;
    }
    .rightUser .chat-bubble {
        max-width: 70%;
        margin-right: 35px;
        padding: 5px;
        border-radius: 15px;
        position: relative;
    }
    #battery {
        font-size: 22px;
    }

    .message {
        margin-top: 10px; /* 默认间距 */
    }

    .continued {
        margin-top: 3px; /* 连续对话的顶部间距 */
    }
    .chat-bubble p {
        margin: 5px;
        word-break: break-word;
    }
    .user1 {
        background-color: #DCF8C6;
    }

    .user2 {
        background-color: #C2E0FF;
    }
    .leftDel {
        position: absolute;
        right: -25px;
        top: 7px;
        cursor: pointer;
    }
    .rightDel {
        position: absolute;
        left: -27px;
        top: 7px;
        cursor: pointer;
    }
    .timeDel {
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .chatTime {
        width: 360px;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        color: rgba(155, 149, 149, 0.822);
        font-size: 12px;
    }

    /* //////////////// foot /////////////// */
    .foot {
        position: relative;
        height: 8%;
        padding: 10px 5px;
        display: flex;
        align-items: center;
    }
    .foot .bi {
        margin: 5px;
    }
    .textMessege {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "Microsoft YaHei", sans-serif;
        font-size: 16px;
        width: 75%;
        background-color: rgb(226, 219, 219);
        border-radius: 100px;
        padding: 0 5px 0 8px;
        height: 30px;
        box-sizing: border-box;
    }

</style>