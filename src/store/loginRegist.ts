import { defineStore } from "pinia";
import axios from 'axios';

export const useloginRegistStore = defineStore('loginRegist',{
    actions: {
        // 注册接口
        async regist() {
            try {
            // 等待响应实转圈
                this.loginOrLoading = '<div class="spinner-border text-light" role="status"><span class="visually-hidden"></span></div>'
                const response  = await axios.post('https://hmajax.itheima.net/api/register', {
                username: this.logUsername, 
                password: this.logPassword
            });
            console.log(response.data); // 輸出伺服器回應的資料
            this.registOrLoading = '<span>注册</span>'

            } catch (error) {
                this.registOrLoading = '<span>注册</span>'
                alert('出现了一些意外')
            } finally  {
                this.registOrLoading = '<span>注册</span>'
            }
        },
        async login() {
            try {
                this.loginOrLoading = '<div class="spinner-border text-light" role="status" style="width: 25px; height: 25px"><span class="visually-hidden"></span></div>'
                const response  = await axios.post('https://hmajax.itheima.net/api/login', 
                {
                    username: this.username, 
                    password: this.password
                });
                console.log(response.data); // 輸出伺服器回應的資料
                this.loginOrLoading = '<span>登陆</span>'
            } catch (error) {
                this.loginOrLoading = '<span>登陆</span>'
                alert('出现了一些意外')
            } finally  {
                this.loginOrLoading = '<span>登陆</span>'
            }
        },
        // 验证账号
        verifyAccount (value:string) {
            const verify = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
            return verify.test(value)
        },
        verifyPsssword (value:string) {
            const verify = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/;
            return verify.test(value)
        },
        verifySecPsssword() {
            return this.logPassword === this.passwordAgain
        },
    },
    state () {
        return {
            logUsername: '',
            logPassword: '',
            passwordAgain: '',
            username: '',
            password: '',
            loginOrLoading: '<span>登陆</span>',
            registOrLoading: '<span>注册</span>',
            isModalOpen: false
        }
    }

})

