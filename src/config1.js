/**
 * Created by Tw93 on 2016/11/4.
 */

export default {
  
    tabTitles: [
      {
        title: '最新',
        icon: '/src/image/tab/home.png',
        activeIcon: '/src/image/tab/home_sel.png',
      },
      {
        title: '最壕',
        icon: '/src/image/tab/home.png',
        activeIcon: '/src/image/tab/home_sel.png'
      },
      {
        title: '生活',
        icon: '/src/image/tab/home.png',
        activeIcon: '/src/image/tab/home_sel.png'
      },
      {
        title: '招聘',
        icon: '/src/image/tab/home.png',
        activeIcon: '/src/image/tab/home_sel.png'
      }, {
        title: '求职',
        icon: '/src/image/tab/home.png',
        activeIcon: '/src/image/tab/home_sel.png'
      },
      {
        title: '婚配',
        icon: '/src/image/tab/home.png',
        activeIcon: '/src/image/tab/home_sel.png'
      }
    ],
    tabStyles: {
      bgColor: '#FFFFFF',
      titleColor: '#666666',
      activeTitleColor: '#3D3D3D',
      activeBgColor: '#FFFFFF',
      isActiveTitleBold: true,
      iconWidth: 70,
      iconHeight: 70,
      width: 160,
      height: 120,
      fontSize: 24,
      hasActiveBottom: true,
      activeBottomColor: '#FFC900',
      activeBottomHeight: 6,
      activeBottomWidth: 120,
      textPaddingLeft: 10,
      textPaddingRight: 10
    },
    // 使用 iconfont 模式的tab title配置
    tabIconFontTitles: [
      {
        title: '首页',
        codePoint: '\ue623'
      },
      {
        title: '特别推荐',
        codePoint: '\ue608'
      },
      {
        title: '消息中心',
        codePoint: '\ue752',
        badge: 5
      },
      {
        title: '我的主页',
        codePoint: '\ue601',
        dot: true
      }
    ],
    tabIconFontStyles: {
      bgColor: '#FFFFFF',
      titleColor: '#666666',
      activeTitleColor: '#3D3D3D',
      activeBgColor: '#FFFFFF',
      isActiveTitleBold: true,
      width: 160,
      height: 120,
      fontSize: 24,
      textPaddingLeft: 10,
      textPaddingRight: 10,
      iconFontSize: 50,
      iconFontColor: '#333333',
      iconFontMarginBottom: 8,
      activeIconFontColor: 'red',
      iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
    }
  }