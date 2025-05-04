<template>
  <div>

    <div class="aboutMe">
      <h1>About Me</h1>
      <h2>I'm Hotto/厚的</h2>
      <p>一个自学半年的前端工程师</p>
      <p>熟悉JavaScript, HTML，CSS，Vue框架，Bootstrap，AJAX应用</p>
      <p>了解Webpack，Git基本使用</p>
      <p>对于新事物总报有热情，喜欢发现学习新事物</p>
      <p>闲暇之余就是带娃，健身，陪老婆逛街</p>
      <div class="contactMe">
        <p><i class="bi bi-phone"></i>+63 9494225234</p>
        <p><i class="bi bi-envelope"></i>todd123852@gmail.com</p>
        <img class="icon" :src=icons.Github alt="">https://github.com/todd123852
      </div>
    </div><br><br><br><br><br>
    <div class="mySkills" ref="skillBlock">
      <h1>Skills</h1>
      <Transition name="skillTrans">
          <div v-show="skillOpacity" class="skillContent" ref="skillContent">
            <div class="skillsOption" v-for="(section, index) in sections" :key="index">
              <div class="skillCircle" v-html="section.htmlContent"></div>
              <h4>{{ section.title }}</h4>
              <ul>
                <li v-for="(content, index) in section.skills" :key="index">
                  {{ content.skill }}
                </li>
              </ul>
            </div>
          </div>
        </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import icons from '@/store/logoBus'
  const skillBlock = ref(null)
  const skillContent = ref(null)
  const skillOpacity = ref(0)
  const sections =[
    {
      title:'前端',
      skills:[
        {skill:'HTML、CSS、JavaScript:熟练掌握这些核心技术，能够创建响应式和互动性的网页应用'},
        {skill:'Bootstrap：利用 Bootstrap 框架快速设计美观且一致的用户界面，提升开发效率。'},
        {skill:'AJAX：熟悉使用 AJAX 技术进行异步请求，提升用户体验。'}
      ],
      htmlContent:'<i class="bi bi-laptop"></i>'
    },
    {
      title:'框架',
      skills:[
        {skill:'擅长使用 Vue.js 的双向数据绑定，能够确保数据和视图始终保持同步，提升用户体验'},
        {skill:'具備將應用拆分為可重用組件的能力，讓代碼結構更清晰，便於維護和擴展。'},
        {skill:'熟练掌握 Vue 的内置指令，如 v-if、v-for 和 v-bind，能够灵活控制 DOM 行为。'},
        {skill:'理解 Vue 组件的生命周期，能够在适当的时机执行代码，提升应用性能。'},
        {skill:'React useState运用，适当使用useEffect进行异步操作'}
      ],
      htmlContent:'<i class="bi bi-code-square"></i>'
    },
    {
      title:'个人优势',
      skills:[
        {skill:'更好地理解用户和业主的需求，将其转化为具体的技术实现，减少开发过程中的误解'},
        {skill:'对业主和用户需求的深刻理解，能够在前端开发中更好地考虑用户体验，设计出更符合用户期望的界面。'},
        {skill:'技术实现与业务目标结合，确保开发的功能不仅技术可行，还能满足业务需求'},
      ],
      htmlContent:'<i class="bi bi-person-hearts"></i>'
    },
    {
      title:'其他',
      skills:[
        {skill:'Webpack：了解 Webpack 的基本使用，能够配置模块打包，优化资源加载。'},
        {skill:'Git：了解版本控制，并掌握基础Git指令'},
        {skill:'Node.js：具备基本的 Node.js 使用经验，自行搭建环境'}
      ],
      htmlContent:'<i class="bi bi-tools"></i>'
    }
  ]

  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 當元素進入視口時執行的操作
      skillOpacity.value = true 
    } else {
      skillOpacity.value = false
    }
  });
});
// 元件挂载后添加监听，滑动到该元素时触发
onMounted(() => {
  observer.observe(skillBlock.value)
})
</script>

<style>
  .icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .skillTrans-enter-active {
    transition: all 1s ease-in;
  }
  .skillTrans-enter-from,.skillTrans-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  .aboutMe {
    margin: 50px;
  }
  .contactMe p {
    display: flex;
    align-items: center;
  }
  .contactMe .bi {
    margin-right: 10px;
    font-size: 30px;
  }
  .skillContent {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .mySkills {
    position: relative;
    width: 100%;
    background-color: #f2f2f2;
    padding-top: 30px;
  }
  .mySkills h1{
    text-align: center;
  }
  .skillsOption {
    text-decoration: none;
    width: 40%;
    height: 430px;
    margin: 1.5%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease-in;
    padding: 90px 10px 10px 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 30px;
    position: relative;
    background-color: #fff;

  }
  .skillsOption:hover {
    transform: scale(1.1);
  } 
  .skillsOption:hover .skillCircle {
    background-color: black;
    color: #fff;
  } 
  
  .skillsOption .skillCircle {
    height: 70px;
    width: 70px;
    background-color: #dddcdc;
    border-radius: 100px;
    transition: all 0.5s ease-in;
    position: absolute;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }

</style>