<template>
  <div class="flex flex_wrap main">
      <!-- 轮播图 -->
      <slider class="slider" interval="3000" auto-play="true">
        <div class="frame" v-for="img in imageList" :key="img.id">
          <image class="image" resize="cover" :src="img.src"/>
        </div>
      </slider>
      <!--广告的挡位-->
      <!-- <div class="goods_box mar_top_30">
        <div class="" 
        v-for="good in goods" :key='good.type' >
          <div class="pad_30">
            <text class="f_s_32 color_f55 color_100">{{good.typeName}}</text>
          </div>
          <div>
             <scroller class="scroller" scroll-direction='horizontal' flex-direction='row'>
               <div class="videos_box pad_lf_30">
                <div v-for="(adsense,index) in good.data" v-if="index%2==1" :key="adsense.id">
                  <video class="video" :src="adsense.src"/>
                  <text></text>
                </div>
                <div  v-for="(adsense,index) in good.data" v-if="index%2==0" :key="adsense.id">
                  <text></text>
                </div>
               </div>
              </scroller>
          </div>
        </div> 
      </div>-->
  </div>
</template>
<!--<style src='../css/index.css'></style>-->
<script>
export default {
  name: "home",
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
      ],
      goods: [{
        type:'1',
        id:1,
        typeName:'正能量',
        data:[
          {
            id:'1',
            src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4',
            info:'1'
          },
          {
            id:'2',
            src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4',
            info:'2'
          },
          {
            id:'3',
            src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4',
            info:'3'
          },
          {
            id:'4',
            src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4',
            info:''
          },
          {
            id:'5',
            src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4',
            info:''
          },
          {
            id:'6',
            src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4',
            info:''
          },
          {
            id:'7',
            src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4',
            info:''
          },
          {
            id:'8',
            src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4',
            info:''
          },
          {
            id:'9',
            src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4',
            info:''
          },

        ]
      },
      {
        type:'1',
        id:1,
        typeName:'正能量',
      },
      {
        type:'1',
        id:1,
        typeName:'正能量',
      },
      {
        type:'1',
        id:1,
        typeName:'正能量',
      },
      {
        type:'1',
        id:1,
        typeName:'正能量',
      },],
    };
  },
  methods: {}
};
</script>

<style scoped>
.main {
  width: 750px;
}
.image,
.slider,
.frame {
  width: 750px;
  height: 420px;
}
.frame {
  position: relative;
}
.videos_box{
  width:630px;
  height:460px;
  background:#ff5;

}
.scroller{
  width:750px;
  height:760px;
}
.video{
  width:630px;
  height: 350px;
  margin-bottom:30px;
}
</style>


