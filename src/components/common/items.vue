<template>
  <div class='items_box flex_warp'>
    <div class='pad_lf_rg_30 h_88 flex flex_nowarp flex_center_y bg_fff '
    :class="[item.has_top&&'mar_top_30',item.has_bor&&'bor_btm']"
     v-for='item in items' :key='item.id' v-if='item.is_show' >
        <div class='flex_grow '>
            <image class='mar_rg_30 items_icon' :src='item.icon' v-if="item.icon!=''"/>
            <text class='f_s_28'>{{item.name}}</text>
        </div>
        <div class='flex_center_y' >
            <div class='rg_txt mar_rg_30' >{{item.msg}}</div>
            <wxc-icon name="more"></wxc-icon>
        </div>
    </div>
  </div>
</template>

<script>

import { WxcIcon } from 'weex-ui';
export default {
  name: 'items',
  components: {
    WxcIcon,
  },
  props: {
    items:Array
  },
  data: () => {
    return {
    };
  },
  methods: {
    jump () {
      
    }
  },
  computed: {
    // 计算属性的 getter
    // reversedMessage: function () {
    //   // `this` 指向 vm 实例
    //   return this.message.split('').reverse().join('')
    // }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  .items_box
    width:750px;
    &>div
      height:88px;
  .items_icon{
    width:48px;
    height:48px;
    margin-right:40px;
  }



</style>
