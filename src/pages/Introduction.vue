<template>
  <div>
    <button type="button" class="btn btn-primary" @click="showModal">
      打开 Modal
    </button>

    <div class="modal fade" :class="{ show: isModalOpen }" tabindex="-1" role="dialog" aria-hidden="!isModalOpen" v-show="isModalOpen">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal 标题</h5>
            <button type="button" class="close" @click="closeModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            这是一个 Bootstrap modal 示例。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="hideModal">关闭</button>
            <button type="button" class="btn btn-primary" @click="hideModal">保存更改</button>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="topSearch">    
                <button @click="sModal"
                type="button" class="btn btn-primary" 
                >
                登錄/註冊
                </button>
                <!-- 弹窗页面 -->
                     <div 
                     :class="{ show: isOpen }" v-show="isOpen"
                     class="modal fade" id="staticBackdrop" tabindex="-1" 
                     aria-labelledby="staticBackdropLabel" aria-hidden="true">
                         <div class="modal-dialog">
                         <div class="modal-content">
                             <div class="modal-header">
                             <h5 class="modal-title" id="exampleModalLabel">会员登入/注册</h5>
                             <button @click="hModal"
                             type="button" class="btn-close" aria-label="Close" ></button>
                             <!-- data-bs-dismiss="modal" -->
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
                                             <i class="bi bi-key-fill input-group-text" id="login-password"></i>
                                             <input v-model="password" type="text" 
                                             @blur="verifyPsssword(password)"
                                             class="form-control" 
                                             :class="{'is-invalid': pwdInvalid }" 
                                             id="password login-password" 
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
                                             @blur="verifyPsssword(logPassword)"
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
    <br><br><br><br><br><br><br><br><br><br>

</template>

<script setup>
import { ref } from 'vue';
let isModalOpen = ref(false)
let isOpen = ref(false)

function showModal () {
  isModalOpen.value = true
}
function hideModal () {
  isModalOpen.value = false
}
function sModal () {
  isOpen.value = true
}
function hModal () {
  isOpen.value = false
}
</script>

<style>
.modal.show {
  display: block;
}

</style>