<template>
  <div class="flex w_100">
       <main v-if="win_Index==1"/>
       <flicker v-if="win_Index==0" @show_main="win_Index=1"/>
<!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<!--<style src='./css/index.less' lang="less"></style>-->
<style src='./css/index.css'></style>
<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
  .slide-fade-enter{
    transform: translateX(100px);
    opacity: 0;
  }
.slide-fade-enter-active {
  /* transform: translateX(-375px); */
  /* opacity: 1; */
  transition: all .3s ease;
}
.slide-fade-leave{
  transform: translateX(-100px);
  /* opacity: 0; */
}
/* .slide-fade-leave-active {/*离开过程中*/
  /* transition: all .8s ease .2s; 
} */
/* .slide-fade-enter-to{
  transform: translateX(0);
  opacity: 0;
} */
/* .slide-fade-leave-to {
  transform: translateX(-375px);
  opacity: 0;
} */
</style>

<script>
import main from "./components/main";
import flicker from "./components/flicker";
import router from './router';
import store from './store';
export default {
  router,
  store,
  components: {
    main,flicker
  },
  data: () => ({
      win_Index:0
  }),
  created() {
   
  },
  methods: {
  }
};
</script>
