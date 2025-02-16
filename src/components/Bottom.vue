<template>
    <div class="main-footer">
    <div class="footerItem">
      <div class="container">
        <h4>关于我们</h4>
          <nav>
            <a href="#">生平</a>
            <a href="#">出生地</a>
            <a href="#">家庭</a>
            <a href="#">小孩</a>
          </nav>        
      </div>
  
      <div class="container">
        <h4>合作方</h4>
          <nav>
            <a href="#">JILI</a>
            <a href="#">PG电子</a>
            <a href="#">BG电子</a>
            <a href="#">WL真人</a>
          </nav>
      </div>
  
      <div class="container">
        <h4>牌照资质</h4>
          <nav>
            <a href="#">幼稚园毕业</a>
            <a href="#">国小毕业</a>
            <a href="#">高中毕业</a>
            <a href="#">大学没毕业</a>
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
      <div class="licenesImg">
          放图片的地方。。。
      </div>
      <div class="copyright">
        Copyright &copy; 2025
        这是一个底部放置抠逼莱特的地方
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .main-footer {
    background-color: rgb(0, 0, 0);
    height: 50vh;
  }
  .main-footer .footerItem {
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