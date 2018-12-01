<template>
<!-- <transition name='slide-fade'> -->
  <div class="flicker_main flex">
    <!-- 轮播图 -->
      <slider class="slider flex" interval="3000" auto-play="true">
        <div class="frame" v-for="img in imageList" :key="img.id">
          <image class="image" resize="stretch" :src="img.src"/>
        </div>
      </slider>
      <div class="go_into flex flex_center" @click="tap">
        <text class="f_s_28 color_999 flex flex_center">跳过</text>
      </div>
  </div>
  <!-- </transition> -->
</template>
<script>
export default {
  name: "flicker",
  components: {},
  data() {
    return {
      imageList: [
        {
          id: 1,
          src: "/src/image/home/banner1.png"
        },
        {
          id: 2,
          src: "/src/image/home/banner2.png"
        },
        {
          id: 3,
          src: "/src/image/home/banner3.png"
        },
        {
          id: 4,
          src: "/src/image/home/banner4.png"
        }
      ]
    };
  },
  methods: {
    tap() {
      console.log("ooooooooo");
      this.$emit("show_main");
    }
  }
};
</script>
<style scoped>
.flicker_main {
  position: relative;
}
.flicker_main,
.frame,
.slider {
  width: 750px;
}
.image {
  width: 7500px;
  height: 1250px;
}
.go_into {
  width: 120px;
  height: 40px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  top: 100px;
  right: 30px;
  background-color: rgba(225, 225, 225, 0.7);
}

.slide-fade-enter {
  transform: translateX(375px);
  opacity: 0;
}
.slide-fade-enter-active {
  /* transform: translateX(-375px); */
  /* opacity: 1; */
  transition: all 0.3s ease;
}
.slide-fade-leave {
  transform: translateX(-750px);
  /* opacity: 0; */
}
</style>
