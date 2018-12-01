<template>
  <div class="footer  flex_nowrap flex_between_x txt_c flex_row">
      <router-link class="flex_center flex_grow flex_reverse"
      v-for="(tab, index) in $store.state.tabs" :key="tab.id"
      @click="tab_tap(index)" to="tab.path">
        <image class="icon" style="width:46px;height:46px"
         :src="tab_index==index?tab.icon_sel:tab.icon"/>
        <text :class="['tab_name', 'f_s_24', 'color_91',tab_index==index&&'active']"
        >{{tab.name}}
        </text>
      </router-link>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  components: {},
  data () {
    return {
      tab_index: 0
    };
  },
  methods: {
    tab_tap: function (index) {
      this.tab_index = index;
    }
  }
};
</script>
<style lang='stylus' scoped>
.footer {
  width: 750px;
  height: 98px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-style: solid
  border-width 2px 0 0 0 
  border-color #ddd 
  div {
    /* width:150px; */
    width: auto;
  }
}

.icon {
  width: 46px;
  height: 46px;
}

.tab_name {
  width: auto;
  line-height: 1;
  padding-top: 8px;
}

.tab_name.active {
  color: #f55 !important;
}
</style>


