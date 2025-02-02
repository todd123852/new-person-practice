<template>
  <div class="main">
        <div class="left">
            <h1>你渴望变壮吗?</h1>
            <h3>来WG吧，这边会教你变壮</h3>
            <span>教你变壮的方法都在这里</span>
        </div>
        <div class="right">
            <button>
                <router-link to="/introduction" class="router">前往查看 ▶︎</router-link>
            </button>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    body {
        padding: 0;
        margin: 0;
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
        background: linear-gradient(115deg, rgb(0, 0, 0), rgb(251, 255, 0) 50%, transparent 50%) 
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