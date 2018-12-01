<template>
  <div class='items_box flex_row'>
    <div class='pad_lf_rg_30 h_88 flex_nowarp flex_center_y '
     v-for='item in items' :key='item.id' v-if='item.is_show' >
        <div class='flex_grow '>
            <image class='mar_rg_30' :src='item.icon' v-if="item.icon!=''"/>
            <text class='f_s_28'>{{item.name}}</text>
        </div>
        <div class='flex_center_y' >
            <div class='rg_txt mar_rg_30' >{{item.msg}}</div>
            <div class='next_icon'></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    items:{
      type:Array,
    }
  },
  data: () => {
    return {
    };
  },
  methods: {

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
    .next_icon{
      width: 24px;
      height: 24px;
      border-style:  solid; 
      border-width: 2px;
      border-color: #4f4f4f #4f4f4f rgba(0,0,0,0) rgba(0,0,0,0);
      transform: rotate(45deg);
    }
</style>
