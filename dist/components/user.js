// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(11);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _user = __webpack_require__(38);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_user2.default.el = '#root';
new Vue(_user2.default);

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(15)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\vue-project1\\app\\node_modules\\weex-ui\\packages\\wxc-icon\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-12c9d709"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = {
  "icon-font": {
    "color": "#666666"
  }
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//

var _type = __webpack_require__(14);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom');

exports.default = {
  props: {
    name: {
      default: 'success',
      type: String
    },
    size: {
      default: 'small',
      type: String
    },
    iconStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      Icon: _type2.default
    };
  },
  beforeCreate: function beforeCreate() {
    dom.addRule('fontFace', {
      'fontFamily': "weexUiIconFont",
      'src': "url('https://at.alicdn.com/t/font_520368_r89ekv69euahsemi.ttf')"
    });
  },

  computed: {
    mergeStyle: function mergeStyle() {
      var iconStyle = this.iconStyle,
          size = this.size;

      var fontSize = '48px';
      switch (size) {
        case 'xs':
          fontSize = '24px';
          break;
        case 'small':
          fontSize = '48px';
          break;
        case 'medium':
          fontSize = '72px';
          break;
        case 'big':
          fontSize = '128px';
          break;
        default:
          fontSize = '48px';
      }
      return _extends({
        fontFamily: 'weexUiIconFont',
        fontSize: fontSize
      }, iconStyle);
    }
  },
  methods: {
    itemClicked: function itemClicked(name) {
      this.$emit('wxcIconClicked', {
        name: name
      });
    }
  }
};

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  less: '\uE6A5',
  'more_unfold': '\uE6A6',
  back: '\uE697',
  more: '\uE6A7',
  add: '\uE6B9',
  subtract: '\uE6FE',
  close: '\uE69A',
  cry: '\uE69C',
  delete: '\uE69D',
  help: '\uE6A3',
  refresh: '\uE6AA',
  search: '\uE6AC',
  success: '\uE6B1',
  warning: '\uE6B6',
  wrong: '\uE6B7',
  clock: '\uE6BB',
  scanning: '\uE6EC',
  filter: '\uE6F1',
  map: '\uE715',
  play: '\uE719'
};

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["icon-font"],
    style: _vm.mergeStyle,
    on: {
      "click": function($event) {
        _vm.itemClicked(_vm.name)
      }
    }
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["items_box", "flex_warp"]
  }, _vm._l((_vm.items), function(item) {
    return (item.is_show) ? _c('div', {
      key: item.id,
      staticClass: ["pad_lf_rg_30", "h_88", "flex", "flex_nowarp", "flex_center_y", "bg_fff"],
      class: [item.has_top && 'mar_top_30', item.has_bor && 'bor_btm']
    }, [_c('div', {
      staticClass: ["flex_grow"]
    }, [(item.icon != '') ? _c('image', {
      staticClass: ["mar_rg_30", "items_icon"],
      attrs: {
        "src": item.icon
      }
    }) : _vm._e(), _c('text', {
      staticClass: ["f_s_28"]
    }, [_vm._v(_vm._s(item.name))])]), _c('div', {
      staticClass: ["flex_center_y"]
    }, [_c('div', {
      staticClass: ["rg_txt", "mar_rg_30"]
    }, [_vm._v(_vm._s(item.msg))]), _c('wxc-icon', {
      attrs: {
        "name": "more"
      }
    })], 1)]) : _vm._e()
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(39)
)

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(41)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\vue-project1\\app\\src\\components\\user.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ec56ef8a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = {
  "user_head": {
    "width": "750",
    "backgroundColor": "#ffffff",
    "height": "400"
  },
  "crile": {
    "width": "150",
    "height": "150",
    "borderTopLeftRadius": "75",
    "borderTopRightRadius": "75",
    "borderBottomLeftRadius": "75",
    "borderBottomRightRadius": "75"
  }
}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _items = __webpack_require__(7);

var _items2 = _interopRequireDefault(_items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'user',
  components: {
    items: _items2.default
  },
  data: function data() {
    return {
      items: [{
        id: 'bag',
        name: '背包',
        icon: '',
        path: '/',
        msg: '',
        is_show: true,
        has_top: true
      }, {
        id: 'adsense',
        name: '投放广告',
        icon: '',
        path: '/',
        msg: '',
        is_show: true,
        has_top: false
      }, {
        id: 'ranking',
        name: '排行榜',
        icon: '',
        path: '/',
        msg: '',
        is_show: true,
        has_top: false
      }, {
        id: 'order',
        name: '日记', //用户的所有记录
        icon: '',
        path: '/',
        msg: '',
        is_show: true
      }, {
        id: 'medal',
        name: '勋章', //用户操作达到的成就
        icon: '',
        path: '/',
        msg: '',
        is_show: true
      }, {
        id: 'contacts',
        name: '联系人', //
        icon: '',
        path: '/',
        msg: '',
        is_show: true
      }, {
        id: 'task',
        name: '任务',
        icon: '',
        path: '/',
        msg: '',
        is_show: true
      }, {
        id: 'set',
        name: '设置',
        icon: '',
        path: '/',
        msg: '',
        is_show: true
      }, {
        id: 're_wpd',
        name: '修改密码',
        icon: '',
        path: '/',
        msg: '',
        is_show: true
      }, {
        id: 'join',
        name: '加入我们',
        icon: '',
        path: '/',
        msg: '',
        is_show: true
      }],
      head_img: '/src/image/home/banner1.png'
    };
  },

  methods: {}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["user_main"]
  }, [_c('div', {
    staticClass: ["user_head", "pad_30", "flex_center_x", "flex_between_"]
  }, [_c('image', {
    staticClass: ["image", "", "crile"],
    attrs: {
      "resize": "cover",
      "src": _vm.head_img
    }
  }), _vm._m(0)]), _c('items', {
    staticClass: ["w_100", "user_item"],
    attrs: {
      "items": _vm.items
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('text', [_vm._v("登录")])]), _c('div', [_c('text', [_vm._v("/")])]), _c('div', [_c('text', [_vm._v("注册")])])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(8)
)

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\vue-project1\\app\\src\\components\\common\\items.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d9335e02"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = {
  "items_box": {
    "width": "750"
  },
  "items_icon": {
    "width": "48",
    "height": "48",
    "marginRight": "40"
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcIcon = __webpack_require__(10);

var _wxcIcon2 = _interopRequireDefault(_wxcIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'items',
  components: {
    WxcIcon: _wxcIcon2.default
  },
  props: {
    items: Array
  },
  data: function data() {
    return {};
  },
  methods: {
    jump: function jump() {}
  },
  computed: {
    // 计算属性的 getter
    // reversedMessage: function () {
    //   // `this` 指向 vm 实例
    //   return this.message.split('').reverse().join('')
    // }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ })

/******/ });