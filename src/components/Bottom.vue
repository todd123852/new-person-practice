<template>
    <div class="main-footer">
    <div class="footerItem">
      <div class="container" v-for="info in infos" :key="info.tittle">
        <h4>{{ info.tittle }}</h4>
          <nav>
            <a href="#" v-for="li in info.content" :key="li">{{ li }}</a>
          </nav>        
      </div>
      <div class="container">
        <h4>联系方式</h4>
        <div class="sub">
          <form action="#">
            <input type="text" name="" id="">
            <button>订阅</button>
          </form>     
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="icons-place">
          <img v-for="icon in allIcons" 
          class="icon"
          :key="icon"
          :src=icon alt="">
      </div>
      <div class="copyright">
        Copyright &copy; 2025
        这是一个底部放置抠逼莱特的地方
      </div>

    </div>
  </div>
</template>

<script setup>
import icons from '@/store/logoBus'
const {CSS, HTML5, JS, TS, React, Vue, npm, VsCode} = icons;
const infos = [
  {tittle: '关于我们', content: ['生平','出生地','家庭','小孩']},
  {tittle: '合作方', content: ['Bootstrap','JavaScript','React','Vue','Webpack']},
  {tittle: '牌照资质', content: ['幼稚园毕业','国小毕业','高中毕业','大学没毕业']}
]

const allIcons = [CSS, HTML5, JS, TS, React, Vue, npm, VsCode]

</script>

<style scoped>
  .icons-place {
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
  }
  .icon {
    width: 100px;
    height: 100px;
    margin: 10px;
  }
  .main-footer {
    background-color: rgb(0, 0, 0);
    height: auto;
  }
  .main-footer .footerItem {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60%;
    flex-wrap: wrap;
  }
  .main-footer .container{
    display: flex;
    height:60%;
    text-align: center;
    align-content: space-around;
    flex-direction: column;
    width: 25%;
  }

  .main-footer h4 {
    color: rgb(224, 206, 36);
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 0;
  }
  .main-footer h4::after {
    content: '';
    margin: 0 auto;
    display: block;
    border: 1px solid #fff;
    width: 50%;
  }
  .main-footer .sub button, .main-footer .sub input{
    border: none;
    padding: 5px;
    border-radius: 3px;
  }
  .main-footer .sub input {
    background-color: #fff;
    width: 150px;
    text-align: left;
  }
  .main-footer form {
    display: flex;
    justify-content: center;
  }

  .main-footer .sub button {
    background-color: rgb(224, 206, 36);
    opacity: 0.8;
    transition: .3s;
  }
  .main-footer .sub button:hover{
    background: rgb(129, 231, 134);
    opacity: 1;
  }
  

  .main-footer nav a {
    color: #fff;
    display: block;
    text-decoration: none;
  }
  .main-footer nav a:hover {
    color: rgb(224, 206, 36);
  }

  .main-footer .bottom {
    display: flex;
    height: 50%;
    flex-direction: column;
  }
  .licenesImg {
    background-color: rgb(0, 0, 0);
    color: #fff;
    flex: 3;
  }
  .main-footer .bottom .copyright {
    flex: 1;
    align-content: center;
    text-align: center;
    height: 30px;
    width: 100%;
    color: #fff;
    background-color: #000000;
  }
</style>