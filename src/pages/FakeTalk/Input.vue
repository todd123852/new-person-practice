<template>
<div class="father">
    <div class="main">
    <!-- 输入时间框 -->
        <div class="setTime">
            <form action="" id="newTime">
            <span>添加聊天时间: </span><br>
            <select name="year" v-model="year">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025" selected>2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
            </select>
            <span>年</span>
            <select name="month" v-model="month">
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <span>月</span>
            <select name="day" v-model="day">
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            <span>日</span>
    
            <select name="weekday" v-model="weekday">
                <option value="星期一">星期一</option>
                <option value="星期二">星期二</option>
                <option value="星期三">星期三</option>
                <option value="星期四">星期四</option>
                <option value="星期五">星期五</option>
                <option value="星期六">星期六</option>
                <option value="星期日">星期日</option>
            </select><br>
    
            <span>时间</span>
            <select name="hours" v-model="hours">
                <option value="0">00</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <span> : </span>
                <!-- 分鐘的下拉選單 -->
            <select name="minutes" v-model="minutes">
                <option value="0">00</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
            </select>
    
            <select name="noonTime" v-model="noonTime">
                <option value="上午">上午</option>
                <option value="下午">下午</option>
            </select>
            <button type="button" @click.prevent="subTime" id="time-button" class="btn btn-primary">提交</button>
        </form>
        </div>
     <!-- 输入对话框 -->
        <div class="setContent">
            <span>输入对话(左): </span>
            <input type="text" v-model="hisName" placeholder="请输入对方名称"><br>
            <div class="type-area">
                <textarea v-model="leftContent"></textarea>
                <button  @click="subFirstContent" type="button" class="btn btn-primary">发送</button>
            </div>
            <span>输入对话(右): </span><br>
            <div class="type-area">
                <textarea v-model="rightContent"></textarea>
                <button  @click="subSecondCotent" type="button" class="btn btn-primary">发送</button>
            </div>
        </div>
    <!-- 输入头像 -->
        <div class="setAvator">
            <div class="avator-text">
                <span>头像(左)</span>
                <span>头像(右)</span>
            </div>
            <div class="upload-avator">
                <!-- 头像表单(左) -->
                <form action="#">
                    <input @change="upLoadleftImage" type="file" accept="image/*" style="display: none;" id="left-avator">                 
                    <label for="left-avator">
                        <div class="left-avator">
                            <img v-if="imgLeftUrl != 'null' && imgLeftUrl != null" :src="imgLeftUrl">
                            <span v-else>+</span>
                        </div>
                    </label>
                </form>
                <!-- 头像表单(右) -->
                <form action="#">
                    <input @change="upLoadrighttImage" type="file" accept="image/*" style="display: none;" id="right-avator">                 
                    <label for="right-avator">
                        <div class="right-avator">
                            <img v-if="imgRightUrl != 'null' && imgRightUrl != null"  :src="imgRightUrl">
                            <span v-else>+</span>
                        </div>
                    </label>
                </form>
            </div>
            <div class="upload-button">
                <button @click="delLeftAvator" type="button" class="btn btn-danger">删除</button>
                <button @click="delRightAvator" type="button" class="btn btn-danger">删除</button>
            </div>
        </div>
    </div>
    <Content
    :imgLeftUrl="imgLeftUrl"
    :imgRightUrl="imgRightUrl"
    :messages = messages
    :hisName = hisName
    @delMessage="delMessage"
    ></Content>
</div>
</template>

<script setup>
import { ref } from 'vue';
import Content from './Dialogue.vue';

let year = ref(2025), month = ref(1), day = ref(1), hours = ref(2), minutes = ref(0)
let weekday = ref('星期一')
let noonTime = ref('上午')
let leftContent = ref(''), rightContent = ref('')
let imgLeftUrl = ref(localStorage.getItem('imgLeftUrl') || null)
let imgRightUrl = ref(localStorage.getItem('imgRightUrl') || null)
const hisName = ref('')
// 上传图片
function upLoadleftImage(e) {
    const file = e.target.files[0]; // 从 event.target.files 获取文件
    if (file) {
        const reader = new FileReader(); // 创建 FileReader 对象
        reader.onload = (e) => {
            imgLeftUrl.value = e.target.result; // 设置图片 src 属性
            // 本地存储图片
            localStorage.setItem('imgLeftUrl', imgLeftUrl.value)
        }
        reader.readAsDataURL(file); // 读取图片文件
    }
}
function upLoadrighttImage(e) {
    const file = e.target.files[0]; // 从 event.target.files 获取文件
    if (file) {
        const reader = new FileReader(); // 创建 FileReader 对象
        reader.onload = (e) => {
            imgRightUrl.value = e.target.result; // 设置图片 src 属性
            localStorage.setItem('imgRightUrl', imgRightUrl.value)
        }
        reader.readAsDataURL(file); // 读取图片文件
    }
}
// 删除图片
function delLeftAvator() {
    imgLeftUrl.value = null
    localStorage.setItem('imgLeftUrl', imgLeftUrl.value)
}
function delRightAvator() {
    imgRightUrl.value = null
    localStorage.setItem('imgRightUrl', imgRightUrl.value)
}

// 判断图片
function isImg(src) {
    if(src !== 'null' || src !== null){
        return true
    }
}
// 创建一个数组存储信息
let messages = ref([
    { user: 'left', text: 'Hello', key: 'asd1234' },
    { user: 'right', text: "I'm good, thank you!" , key: 'asd12345' },
]);
// 把对话存储到本地
function saveMessages() {
    localStorage.setItem('messages', JSON.stringify(messages.value));
}
// 把对话拿出来
const storedMessages = localStorage.getItem('messages');
messages.value =  storedMessages ? JSON.parse(storedMessages) : messages.value

// 处理左边对话
function subFirstContent() {
    if (leftContent.value.trim() !== '')
    messages.value.push({ user:'left', text: leftContent.value, key: Date.now()});
    saveMessages()
    leftContent.value = ''
}
// 处理右边对话
function subSecondCotent() {
    if (rightContent.value.trim() !== '')
    messages.value.push(
    { user:'right', text: rightContent.value, key: Date.now()});
    localStorage.setItem('messages', JSON.stringify(messages.value))
    rightContent.value = ''
}
// 删除业务
function delMessage(key) {
    messages.value = messages.value.filter(message => message.key !== key )
    saveMessages()
}
// 添加时间
function subTime() {
    const timeContent = `${year.value}年 ${month.value}月 ${day.value}日 ${noonTime.value} ${hours.value}:${minutes.value < 10 ? '0' + minutes.value : minutes.value}`
    // 给最后一个对话添加的时间
    messages.value.push({ user:'timeUser', text: timeContent, key: Date.now()});
    saveMessages()
}
</script>

<style scoped>
    .father {
        display: flex;
        position: relative;
        background: linear-gradient(rgb(60, 130, 235), skyblue)
    }
    select {
        font-family: sans-serif;
        margin: 10px 3px 3px 3px;
    }
    .type-area {
        display: flex;
        position: relative;
        justify-content: space-around;
        align-items: center;
    }
    .type-area textarea {
        resize: none;
        width: 300px; /* 设置宽度 */
        height: 50px; /* 设置高度 */
        font-size: 20px;
    }
    input {
        padding: 5px;
        border: 2px solid #ccc; /* 設置邊框顏色和寬度 */
        border-radius: 5px; /* 設置圓角半徑 */
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
        outline: none; /* 移除默認的輪廓效果 */
    }
    
    input:focus {
        border-color: #007bff; /* 聚焦時改變邊框顏色 */
    }
    .main{
        width: 500px;
        height: 630px;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .setTime{
        box-shadow: 0 0 10px rgba(0, 0, 0, 2);
        background-color: #a8e6c7;
        padding: 10px 20px;
        border-radius: 20px;
    }
    .setTime button {
        margin-left: 26px;
    }
    .setContent{
        box-shadow: 0 0 10px rgba(0, 0, 0, 2);
        background-color: #7ceeb5;
        padding: 10px;
        border-radius: 20px;
    }
    .setAvator{
        box-shadow: 0 0 10px rgba(0, 0, 0, 2);
        background-color: #4a8cb6;
        padding: 10px;
        border-radius: 20px;
    }
    .upload-button {
        display: flex;
        justify-content: space-around;
        margin-top: 15px;
    }
    .upload-avator, .avator-text {
        display: flex;
        justify-content: space-around;
    }
    .left-avator, .right-avator{
        width: 80px;
        height: 80px;
        border: 3px dashed rgba(202, 194, 194, 0.781);
        margin-top: 20px;
        cursor: pointer;
        text-align: center;
        font-size: 30px;
        color: rgba(202, 194, 194, 0.781);;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .upload-avator img {
        width: 80px;
        height: 80px;
        border-radius: 100px;
    }
    select {
        border-radius: 5px;
        height: 30px;
        font-size: 25px;
        margin-top: 0px 3px;
    }
    span {
        font-family: "Microsoft YaHei", sans-serif;
        font-size: 25px;
    }
    button {
        font-family: "Microsoft YaHei", sans-serif;
        font-size: 20px;

    }
</style>