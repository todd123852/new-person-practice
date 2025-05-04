<template>
  <div class="main">
        <div class="left">
            <h1>学习之路</h1>
            <div class="floatText">
                <span>燃</span><span>动</span><span>你</span><span>的</span><span>激</span><span>情</span><span> </span><span>释</span><span>放</span><span>你</span><span>的</span><span>活</span><span>力</span>
            </div>
            <span>天分是你的地板，努力没有天花板</span>
        </div>
        <div class="right">
            <router-link to="/introduction" class="router">
                <button>前往查看 ▶︎</button>
            </router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    h1 {
        font-weight: 800;
    }
    body {
        padding: 0;
        margin: 0;
    }
    .floatText {
        margin: 0 0 10px 0;
    }
    .floatText span {
        font: bold 28px "微软雅黑", "SimSun", serif;
        box-shadow: 10px#ff0226;
        color: #fff;
        margin: 5px;
        animation: shadowing 1s ease-in-out infinite alternate;
    }
    @keyframes shadowing {
        to {
            color: #ff0226;
            text-shadow: 20px 0 70px #ff0226;
        }
    }
    .floatText span:nth-child(2) {
        animation-delay: 0.2s;
    }
    .floatText span:nth-child(3) {
        animation-delay: 0.4s;
    }
    .floatText span:nth-child(4) {
        animation-delay: 0.6s;
    }
    .floatText span:nth-child(5) {
        animation-delay: 0.8s;
    }
    .floatText span:nth-child(6) {
        animation-delay: 1s;
    }
    .floatText span:nth-child(7) {
        animation-delay: 1.2s;
    }
    .floatText span:nth-child(8) {
        animation-delay: 1.4s;
    }
    .floatText span:nth-child(9) {
        animation-delay: 1.6s;
    }
    .floatText span:nth-child(10) {
        animation-delay: 1.6s;
    }
    .floatText span:nth-child(11) {
        animation-delay: 1.6s;
    }
    .floatText span:nth-child(12) {
        animation-delay: 1.6s;
    }
    .floatText span:nth-child(13) {
        animation-delay: 1.6s;
    }
    .router {
        text-decoration: none;
        font-weight: 800;
        color: black;
    }
    .main {
        display: flex;
        width: 100%;
        height: 100vh;
        background: linear-gradient(115deg, rgb(0, 0, 0), rgb(215, 216, 162) 50%, transparent 50%) 
        center center / 100%,
        url(@/public/BodyBuilder.jpg) right center / auto 100%;
        transition: transform 0.3s ease; /* 為了讓背景圖片也平滑過渡 */      
    } 
    
    .right {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin: 20px;
        transition: transform 0.3s ease; /* 添加過渡效果 */
        position: fixed;
        bottom: 20px;
        right: 20px;
    }

    .left:hover {
        transform: scale(1.1); /* 滑鼠懸停時放大 1.1 倍 */
    }
    .left h1 {
        position: relative; /* 建立定位上下文 */
        transition: transform 0.3s ease; /* 讓縮放效果平滑 */
        padding-bottom: 15px;
    }
    .left h1::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0; /* 線條位置 */
        width: 0; /* 初始寬度為 0 */
        height: 5px;
        background-color: rgb(241, 209, 23); /* 線條顏色 */
        transition: width 0.3s ease; /* 線條寬度過渡效果 */
    }
    .left:hover h1::after {
        width: 100%; /* 線條寬度變為 100% */
    }

    .right:hover {
        transform: scale(1.1); /* 滑鼠懸停時放大 1.1 倍 */
    }
    .left {
        line-height: 10px;
        flex: 1;
        height: 100%;
        display: flex; /* 確保內容垂直置中 */
        flex-direction: column;
        justify-content: center;
        align-items: flex-start; /* 使用 align-items 來垂直置中 */
        transition: transform 0.3s ease; /* 添加過渡效果 */
        position: fixed;
        left: 20px;
        color: aliceblue;
    }

    button {
        width: 200px;
        font: italic 30px solid;
        height: 70px;
        border-radius: 20px;
        opacity: 0.7;
        right: 30px;
        left: 30px;
        transition: transform 0.3s ease
    }
    button:hover {
        opacity: 1;
    }
</style>