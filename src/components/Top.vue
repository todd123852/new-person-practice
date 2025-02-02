<template>
  <div class="mainheader">
        <div class="container">
            <a href="#" class="logo">
                <img src="@/public/HOTTO.png" alt="">
            </a>
        </div>
        <nav>
            <router-link 
            to="/introduction" class="top-link" active-class="isYellow">
            变壮的地方</router-link>
            <router-link 
            to="/faketalk" class="top-link" active-class="isYellow">
            角斗场</router-link>
            <router-link 
            to="/" class="top-link" active-class="isYellow">
            大宝剑</router-link>
            <div class="topSearch">    
                <input type="text" class="sear">
                <img src="@/public/search.png" alt="">
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
        .mainheader{
            display: flex;
            width: 100%;
            height: 100px;
            background: linear-gradient(rgb(245, 19, 11), rgb(60, 130, 235));
        }
        .mainheader .container{
            display: flex;
            flex:1 ;
        }
        .mainheader .container .logo{
            display: flex;
            
        }
        .mainheader .container .logo img{
            width: 250px;
            object-fit: cover;
        }
        .mainheader nav {
            flex: 7;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .mainheader nav .top-link {
            margin: 0;
            text-decoration: none;
            display: block;
            text-align: center;
            font-size: 20px;
            color: #fff;
            transform: translateY(0px);
            transition: transform 0.3s ease-in-out;
        }
        .mainheader nav .top-link::after {
            content: '';
            margin: 0 auto;
            display: block;
            border-bottom: 3px solid rgb(241, 223, 87);
            transform: scaleX(0); /*用scaleX可避免疯狂抖动*/
            width: 100px;
            transition: .3s;
        }
        .mainheader nav .top-link:hover::after {
            left: 0;
            right: 0;
            transform: scaleX(1);
        } 
        .mainheader nav .top-link:hover {
            transform: translateY(-5px);
            transform: scale(1.2); /* 放大效果 */
        }
        .mainheader nav img {
            width: 30px;
            height: 30px;
            position: absolute;
            right: 3px;
            top: 1px;
            transition: .3s;
            cursor: pointer;
        }
        .mainheader nav img:hover {
            transform: scale(1.2);
        }
        .topSearch {
            display: flex;
            position: relative;
        }
        .mainheader nav img{
            margin: 0;
            border-radius: 30px;
        }
        .mainheader nav input {
            padding: 5px;
            height: 22px;
            line-height: 22px;
            background-color: #ebe18e;
            border-radius: 100px;
            border: none;
        }
        .mainheader nav .isYellow {
            color: yellow;
            font-size: 24px;
        }
        </style>