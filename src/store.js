import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: {
      is_show: false
    },
    is_footer_show: true // 底部导航是否展示
  },
  mutations: {},
  actions: {}
});
