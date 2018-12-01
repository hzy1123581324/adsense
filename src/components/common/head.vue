<template>
  <div class="head_box flex_row flex_center_y pad_lf_rg_30 pad_top_20">
    <div class='back'></div>
    <div class='title flex_grow f_s_34 txt_c color_fff'>{{title}}</div>
    <div>
        <image  :src='head_icon' v-if='head_icon' />
        <text v-if='rg_txt'>{{rg_txt}}</text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'head',
  props: {},
  data: () => {
    return {
      title: '首页',
      head_icon: '',
      rg_txt: 'edede'
    };
  },
  methods: {
    back: () => {
      this.$router.go(1);
    }
  },
  computed: {}
};
</script>
<style scoped lang="stylus">
.head_box 
    height  64px
    .back 
        width: 28px;
        height: 28px;
        border-style: solid;
        border-width: 4px;
        border-color: #fff #fff rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
        transform: rotate(-135deg);
</style>
