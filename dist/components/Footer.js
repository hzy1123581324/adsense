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
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
/******/ })
/************************************************************************/
/******/ ({

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Footer = __webpack_require__(92);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Footer2.default.el = '#root';
new Vue(_Footer2.default);

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(93)
)

/* script */
__vue_exports__ = __webpack_require__(94)

/* template */
var __vue_template__ = __webpack_require__(95)
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
__vue_options__.__file = "E:\\vue-project1\\app\\src\\components\\Footer.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1260502b"
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

/***/ 93:
/***/ (function(module, exports) {

module.exports = {
  "footer": {
    "width": "750",
    "height": "98",
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "borderStyle": "solid",
    "borderColor": "#dddddd"
  },
  "icon": {
    "width": "46",
    "height": "46"
  },
  "tab_name": {
    "lineHeight": 1,
    "paddingTop": "8"
  }
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  name: 'Footer',
  components: {},
  data: function data() {
    return {
      tab_index: 0
    };
  },

  methods: {
    tab_tap: function tab_tap(index) {
      this.tab_index = index;
    }
  }
};

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["footer", "", "flex_nowrap", "flex_between_x", "txt_c", "flex_row"]
  }, _vm._l((_vm.$store.state.tabs), function(tab, index) {
    return _c('router-link', {
      key: tab.id,
      staticClass: ["flex_center", "flex_grow", "flex_reverse"],
      attrs: {
        "to": "tab.path"
      },
      on: {
        "click": function($event) {
          _vm.tab_tap(index)
        }
      }
    }, [_c('image', {
      staticClass: ["icon"],
      staticStyle: {
        width: "46px",
        height: "46px"
      },
      attrs: {
        "src": _vm.tab_index == index ? tab.icon_sel : tab.icon
      }
    }), _c('text', {
      class: ['tab_name', 'f_s_24', 'color_91', _vm.tab_index == index && 'active']
    }, [_vm._v(_vm._s(tab.name) + "\n      ")])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });