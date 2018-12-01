<template>
<transition name='slide-fade'>
  <div  class="flex w_100">
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!--The first page content-->
    <div class="item-container flex" :style="contentStyle">
      <home/>
    </div>
    <!--The second page content-->
    <div class="item-container flex" :style="contentStyle">
      <classify/>
    </div>

    <!-- The third page content-->
    <div class="item-container flex" :style="contentStyle">
       <market/>
    </div>

    <!-- The fourth page content-->
    <div class="item-container flex" :style="contentStyle">
      <user/>
    </div>
  </wxc-tab-bar>
  </div>
  </transition>
</template>
<style scoped>
.item-container {
  width: 750px;
}
</style>
<script>
import { WxcTabBar, Utils } from "weex-ui";
import home from "./home";
import classify from "./classify";
import market from "./market";
import user from "./user";
import Config from "./../config";
export default {
  name: 'main',
  components: {
    WxcTabBar,
    home,
    classify,
    market,
    user
  },
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles
  }),
  created() {
    const tabPageHeight = Utils.env.getPageHeight();
    // If the page doesn't have a navigation bar
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const { tabStyles } = this;
    this.contentStyle = { height: tabPageHeight - tabStyles.height + "px" };
  },
  methods: {
    wxcTabBarCurrentTabSelected(e) {//底部导航栏点击事件
      const index = e.page;
      console.log(index);
    }
  }
};
</script>
