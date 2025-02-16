import { defineStore } from "pinia";
import axios from 'axios';

export const useloginRegistStore = defineStore('loginRegist',{
    actions: {
        // 注册接口
        async regist() {
            // 等待响应实转圈
            this.registOrLoading = '<div class="spinner-border text-light" role="status"><span class="visually-hidden"></span></div>'
            this.storeVerifyAccount(this.logUsername)
            this.storeVerifyPsssword(this.logPassword)
            this.storeVerifySecPsssword()
            if (!this.accInvalid && !this.pwdInvalid && !this.isnotSamepwd) {
                try {
                    const response  = await axios.post('https://hmajax.itheima.net/api/register', {
                    username: this.logUsername, 
                    password: this.logPassword
                });
                console.log(response.data); // 輸出伺服器回應的資料
                this.registOrLoading = '<span>注册</span>'
                this.isModalOpen = false
                } catch (error:any) {
                    this.registOrLoading = '<span>注册</span>'
                    alert(error.response.data.message)
                } finally  {
                    this.registOrLoading = '<span>注册</span>'
                }
            }
        },
        async login() {
            this.storeVerifyAccount(this.username)
            this.storeVerifyPsssword(this.password)
            if (!this.accInvalid && !this.pwdInvalid) {
                try {
                    this.loginOrLoading = '<div class="spinner-border text-light" role="status" style="width: 25px; height: 25px"><span class="visually-hidden"></span></div>'
                    const response  = await axios.post('https://hmajax.itheima.net/api/login', 
                    {
                        username: this.username, 
                        password: this.password
                    });
                    console.log(response.data); // 輸出伺服器回應的資料
                    this.loginOrLoading = '<span>登陆</span>'
                    this.isModalOpen = false
                } catch (error:any) {
                    this.loginOrLoading = '<span>登陆</span>'
                    alert(error.response.data.message)
                    //alert('出现了一些意外')
                } finally  {
                    this.loginOrLoading = '<span>登陆</span>'
                }
            }
        },
        // 验证账号密码是否合法
        storeVerifyAccount (value:string) {
            const verify = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
            this.accInvalid = !verify.test(value)
        },
        storeVerifyPsssword (value:string) {
            const verify = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/;
            this.pwdInvalid = !verify.test(value)
        },
        storeVerifySecPsssword() {
            this.isnotSamepwd = this.logPassword !== this.passwordAgain
        },
        // 登陆注册tab切换清空
        clearInput(){
            this.username = '';
            this.password = '';
            this.logUsername = '';
            this.logPassword = '';
            this.passwordAgain = '';
            this.accInvalid = false;
            this.pwdInvalid = false;
            this.isnotSamepwd = false;
        },
        storeSwitchTab(tab:string) {
            if (this.activeTab !== tab) {
                this.clearInput();
                this.activeTab = tab;
            }
        }
    },
    state () {
        return {
            logUsername: '',logPassword: '',passwordAgain: '',username: '',password: '',
            loginOrLoading: '<span>登陆</span>',registOrLoading: '<span>注册</span>',
            isModalOpen: false,accInvalid:false,isnotSamepwd:false,pwdInvalid: false,
            activeTab:'login'
        }
    }

})

