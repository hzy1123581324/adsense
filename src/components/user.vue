<template>
  <div class="user_main">
    <div class="user_head pad_30 flex_center_x flex_between_">
      <image class="image  crile" resize="cover" :src="head_img"></image>
      <div>
        <div><text>登录</text></div>
        <div><text>/</text></div>
        <div><text>注册</text></div>
      </div>
    </div>
    <items class="w_100 user_item" :items="items" />
    <!-- <router-view class=""></router-view> -->
  </div>
</template>
<script>
import items from "./common/items.vue";
import { WxcIcon } from 'weex-ui';
export default {
  name: 'user',
  components: {
    items,
  },
  data () {
    return {
      items: [
        {
          id: 'bag',
          name: '背包',
          icon: '',
          path: '/',
          msg: '',
          is_show: true,
          has_top:true,
        },
        {
          id: 'adsense',
          name: '投放广告',
          icon: '',
          path: '/',
          msg: '',
          is_show: true,
          has_top:false,
        },
        {
          id: 'ranking',
          name: '排行榜',
          icon: '',
          path: '/',
          msg: '',
          is_show: true,
          has_top:false,
        },
        {
          id: 'order',
          name: '日记',//用户的所有记录
          icon: '',
          path: '/',
          msg: '',
          is_show: true
        },
        {
          id: 'medal',
          name: '勋章',//用户操作达到的成就
          icon: '',
          path: '/',
          msg: '',
          is_show: true
        },
        {
          id: 'contacts',
          name: '联系人',//
          icon: '',
          path: '/',
          msg: '',
          is_show: true
        },
        {
          id: 'task',
          name: '任务',
          icon: '',
          path: '/',
          msg: '',
          is_show: true
        },
        {
          id: 'set',
          name: '设置',
          icon:'',
          path: '/',
          msg: '',
          is_show: true
        },
        {
          id: 're_wpd',
          name: '修改密码',
          icon:'',
          path: '/',
          msg: '',
          is_show: true
        },
        {
          id: 'join',
          name: '加入我们',
          icon: '',
          path: '/',
          msg: '',
          is_show: true
        }
      ],
      head_img:'/src/image/home/banner1.png'
    };
  },
  methods: {
  }
}
</script>
<style scoped>
.user_head{
  width:750px;
  background-color:#fff;
  height:400px;
}
.crile{
  width:150px;
  height:150px;
  border-top-left-radius: 75px;
  border-top-right-radius: 75px;
  border-bottom-left-radius: 75px;
  border-bottom-right-radius: 75px;
}
</style>
