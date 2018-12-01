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
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ({

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(49)
)

/* script */
__vue_exports__ = __webpack_require__(50)

/* template */
var __vue_template__ = __webpack_require__(51)
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
__vue_options__.__file = "E:\\vue-project1\\app\\src\\components\\flicker.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-76addb90"
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

/***/ 49:
/***/ (function(module, exports) {

module.exports = {
  "flicker_main": {
    "position": "relative",
    "width": "750"
  },
  "frame": {
    "width": "750"
  },
  "slider": {
    "width": "750"
  },
  "image": {
    "width": "7500",
    "height": "1250"
  },
  "go_into": {
    "width": "120",
    "height": "40",
    "borderTopLeftRadius": "20",
    "borderTopRightRadius": "20",
    "borderBottomLeftRadius": "20",
    "borderBottomRightRadius": "20",
    "position": "absolute",
    "top": "100",
    "right": "30",
    "backgroundColor": "rgba(225,225,225,0.7)"
  },
  "slide-fade-enter": {
    "transform": "translateX(375px)",
    "opacity": 0
  },
  "@TRANSITION": {
    "slide-fade-enter-active": {
      "duration": 300,
      "timingFunction": "ease"
    }
  },
  "slide-fade-enter-active": {
    "transitionDuration": 300,
    "transitionTimingFunction": "ease"
  },
  "slide-fade-leave": {
    "transform": "translateX(-750px)"
  }
}

/***/ }),

/***/ 50:
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
//
//

exports.default = {
  name: "flicker",
  components: {},
  data: function data() {
    return {
      imageList: [{
        id: 1,
        src: "/src/image/home/banner1.png"
      }, {
        id: 2,
        src: "/src/image/home/banner2.png"
      }, {
        id: 3,
        src: "/src/image/home/banner3.png"
      }, {
        id: 4,
        src: "/src/image/home/banner4.png"
      }]
    };
  },

  methods: {
    tap: function tap() {
      console.log("ooooooooo");
      this.$emit("show_main");
    }
  }
};

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["flicker_main", "flex"]
  }, [_c('slider', {
    staticClass: ["slider", "flex"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, _vm._l((_vm.imageList), function(img) {
    return _c('div', {
      key: img.id,
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "stretch",
        "src": img.src
      }
    })])
  })), _c('div', {
    staticClass: ["go_into", "flex", "flex_center"],
    on: {
      "click": _vm.tap
    }
  }, [_c('text', {
    staticClass: ["f_s_28", "color_999", "flex", "flex_center"]
  }, [_vm._v("跳过")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _flicker = __webpack_require__(48);

var _flicker2 = _interopRequireDefault(_flicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_flicker2.default.el = '#root';
new Vue(_flicker2.default);

/***/ })

/******/ });