<template>
  <div class="mainheader">
        <div class="container">
            <router-link class="logo" :to="mainPage">
                <img src="@/public/Hotto.png" alt="">
            </router-link>
        </div>
        <nav>
            <!-- 列表区 -->
            <router-link v-for="list in topLists" :key="list.path" :to="list.path" class="top-link" active-class="isYellow">{{ list.title }}</router-link>
            <div class="topSearch">    
                <button v-if="!isLoged" 
                @click="showModal"
                type="button" class="btn btn-primary" >
                登錄/註冊
                </button>
                <span v-else>欢迎回来，{{ username }}</span>
                <!-- 弹窗页面 -->
                     <div 
                     :class="{ show: isModalOpen }" v-show="isModalOpen"
                     class="modal fade" id="staticBackdrop" tabindex="-1" 
                     aria-labelledby="staticBackdropLabel">
                         <div class="modal-dialog">
                         <div class="modal-content">
                             <div class="modal-header">
                             <h5 class="modal-title" id="exampleModalLabel">会员登入/注册</h5>
                             <button @click="hideModal"
                             type="button" class="btn-close" aria-label="Close" ></button>
                             </div>
                             <div class="modal-body">
                             <!-- 登陆注册切换 -->
                             <ul class="nav nav-tabs" id="myTab" role="tablist">
                                 <li class="nav-item" id="myNav" role="presentation">
                                 <button @click="switchTab('login')"
                                  class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login-tab-pane" type="button" role="tab" aria-controls="login-tab-pane" aria-selected="true">登入</button>
                                 </li>
                                 <li class="nav-item" id="myNav" role="presentation">
                                 <button @click="switchTab('register')" class="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register-tab-pane" type="button" role="tab" aria-controls="register-tab-pane" aria-selected="false">註冊</button>
                                 </li>
                             </ul>
                             <div class="tab-content" id="myTabContent">
                                 <!-- 登陆区 -->
                                 <div class="tab-pane fade show active" id="login-tab-pane" role="tabpanel" aria-labelledby="login-tab">
                                     <!-- 账号密码区 -->
                                     <form>
                                         <div class="mb-3">                                 
                                         <p class="suport-account">支持账号注册</p>
                                         <!-- 账号 -->
                                         <div class="input-group has-validation mb-3">
                                             <i class="bi bi-person-fill input-group-text" id="regist-account"></i>
                                             <input v-model="username" type="text" 
                                             @blur="verifyAccount(username)"
                                             class="form-control" 
                                             :class="{'is-invalid': accInvalid }" 
                                             id="label-login-account" 
                                             placeholder="请输入账号">
                                             <div class="invalid-feedback">
                                                 请输入8位中英文数字组合
                                             </div>
                                         </div>
                                         <!-- 密码 -->
                                         </div>
                                         <div class="input-group has-validation mb-3">
                                             <i class="bi bi-key-fill input-group-text" ></i>
                                             <input v-model="password" type="text" 
                                             @blur="verifyPsssword(password)"
                                             class="form-control" 
                                             :class="{'is-invalid': pwdInvalid }" 
                                             id="password" 
                                             placeholder="请输入密码">
                                             <div class="invalid-feedback">
                                                 请输入6位英文数字组合
                                             </div>
                                         </div>
                                     </form>
                                     <div class="d-grid gap-2 col-12 mx-auto">
                                     <button @click="login" type="button" 
                                     class="btn btn-primary" id="login-button"
                                     v-html="loginOrLoading"
                                     ></button>
                                     </div>
                                 </div>
                                 <!-- 注册区 -->
                                 <div class="tab-pane fade" id="register-tab-pane" role="tabpanel" aria-labelledby="register-tab">
                                     <form>
                                         <div class="mb-3">
                                         <p class="suport-account">支持账号注册</p>
                                         <!-- 账号 -->
                                         <div class="input-group has-validation mb-3">
                                             <i class="bi bi-person-fill input-group-text" id="regist-account"></i>
                                             <input 
                                             type="text" 
                                             @blur="verifyAccount(logUsername)"
                                             v-model="logUsername" 
                                             class="form-control" 
                                             :class="{'is-invalid': accInvalid }" 
                                             placeholder="请输入账号">
                                             <div class="invalid-feedback">
                                                 请输入8位中英文数字组合
                                             </div>
                                         </div>
                                         <!-- 密码 -->
                                         </div>
                                         <div class="input-group has-validation mb-3">
                                             <i class="bi bi-key-fill input-group-text"></i>
                                             <input 
                                             @blur="verifyPsssword(logPassword),verifySecPsssword()" 
                                             v-model="logPassword" type="text" 
                                             class="form-control" 
                                             :class="{ 'is-invalid': pwdInvalid }" 
                                             placeholder="请输入密码">
                                             <!-- is-invalid 控制是否提示警告 -->
                                             <div class="invalid-feedback">
                                                 请输入6位英文数字组合
                                             </div>
                                         </div>
                                         <!-- 再次输入密码 -->
                                         <div class="input-group has-validation mb-3">
                                             <i class="bi bi-key-fill input-group-text"></i>
                                             <input 
                                             @blur="verifySecPsssword"
                                             v-model="passwordAgain" type="text" 
                                             class="form-control" 
                                             :class="{'is-invalid': isnotSamepwd }" 
                                             placeholder="请输入密码">
                                             <div class="invalid-feedback">
                                                 密码不一致，请重新输入
                                             </div>
                                         </div>
                                     </form>
                                     <div class="d-grid gap-2 col-12 mx-auto">
                                         <button @click="regist" type="button" 
                                         class="btn btn-primary" id="regist-button"
                                         v-html="registOrLoading"
                                         ></button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         </div>
                     </div>
                 </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useloginRegistStore } from '@/store/loginRegist';
const loginRegistStore = useloginRegistStore()
let {username, password,logUsername, logPassword,passwordAgain,loginOrLoading,registOrLoading, isModalOpen,accInvalid,pwdInvalid,isnotSamepwd} = storeToRefs(loginRegistStore)
    const isLoged = ref(false)
    // 加载后查看是否已登陆
    function checkLoged() {
        username.value = JSON.parse(localStorage.getItem('username'));
        if (username.value) {
            isLoged.value = true
        }
    }
    onMounted(() => checkLoged())
    watch(isModalOpen, () => checkLoged())
    const mainPage = '/'
    const topLists = [
        {title: '个人简历',path: '/introduction'},
        {title: '对话生成器',path: '/faketalk'},
        {title: '拼图',path: '/puzzle'}
    ]
    const myForm = ref(null)
// 开关弹窗
    function showModal () {
        isModalOpen.value = true
    }
    function hideModal () {
        isModalOpen.value = false;
        loginRegistStore.clearInput()
    }
    function switchTab(tab) {loginRegistStore.storeSwitchTab(tab);}

    function regist() {
        loginRegistStore.regist()
    }
    
    function login() {
        loginRegistStore.login()
    }
    // 登陆注册共用相同验证方式
    function verifyAccount (value) {
        loginRegistStore.storeVerifyAccount(value)
    }
    function verifyPsssword (value) {
        loginRegistStore.storeVerifyPsssword(value)
    }
    function verifySecPsssword () {
        loginRegistStore.storeVerifySecPsssword()
    }
</script>

<style scoped>
        * {
            font-family: "Microsoft YaHei", sans-serif;
        }
    /* 登陆注册弹窗 */
        #myTab {
            justify-content: center;
        }
        .modal.show {
            display: block;
        }
        #myNav {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            flex: 1;
        }
        #login-button, #regist-button {
            height: 45px;
        }
        .suport-account {
            margin: 5px 0;
        }
        .mainheader{
            display: flex;
            width: 100%;
            height: 100px;
            background: linear-gradient(rgb(224, 236, 238), rgb(60, 130, 235));
        }
        .mainheader .container{
            display: flex;
            flex:1 ;
        }
        .mainheader .container .logo{
            display: flex;
            
        }
        .mainheader .container .logo img{
            width: 200px;
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
        .mainheader nav .isYellow {
            color: yellow;
            font-size: 24px;
        }
        </style>