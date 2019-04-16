(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/edit/attendance.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/edit/attendance.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "attendance",
  data: function data() {
    var d = new Date(),
        month = d.getMonth(),
        year = d.getYear();
    return {
      month: month,
      year: year,
      no_of_days: new Date(year, month + 1, 0),
      user: {
        attendances: []
      },
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    };
  },
  computed: {
    days: function days() {
      var vm = this,
          index = 0,
          days = {};

      while (index < vm.no_of_days.getDate()) {
        days[index + 1] = false;
        index++;
      }

      if (vm.user.attendances ? vm.user.attendances.length : null) {
        index = 0;

        while (index < vm.user.attendances.length) {
          var d = new Date(vm.user.attendances[index].started_at.split(" ")[0]).addDays(1);

          if (d.getDate()) {
            days[d.getDate()] = true;
          }

          index++;
        }
      }

      return vm.user ? days : {};
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      axios.get("/api/user/".concat(to.params.id, "/attendances")).then(function (response) {
        next(function (vm) {
          return vm.setData(response.data);
        });
      });
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var vm = this;

    if (to.params.id) {
      axios.get("/api/user/".concat(to.params.id, "/attendances")).then(function (response) {
        vm.setData(response.data);
        next();
      });
    }
  },
  methods: {
    setData: function setData(data) {
      this.user = data;
    },
    getSummaries: function getSummaries(param) {
      var columns = param.columns,
          data = param.data;
      var sums = [],
          vm = this;
      columns.forEach(function (column, index) {
        if (index === 0) {
          sums[index] = "Total Cost: $".concat(vm.user.total_timing);
          return;
        }

        if (index === 2) {
          sums[index] = data.reduce(function (prev, curr) {
            var value = Number();

            if (!isNaN(value)) {
              return prev + curr.timing * 0.0002777778;
            } else {
              return prev;
            }
          }, 0) + ' Hour(s)';
        }
      });
      return sums;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/edit/attendance.vue?vue&type=style&index=0&id=19f5f4d6&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/edit/attendance.vue?vue&type=style&index=0&id=19f5f4d6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dot[data-v-19f5f4d6] {\n    height: 15pt;\n    width: 15pt;\n    border-radius: 50%;\n}\ntable[data-v-19f5f4d6], th[data-v-19f5f4d6], td[data-v-19f5f4d6] {\n    border: 1px solid black;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/edit/attendance.vue?vue&type=style&index=0&id=19f5f4d6&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/edit/attendance.vue?vue&type=style&index=0&id=19f5f4d6&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./attendance.vue?vue&type=style&index=0&id=19f5f4d6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/edit/attendance.vue?vue&type=style&index=0&id=19f5f4d6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/edit/attendance.vue?vue&type=template&id=19f5f4d6&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/edit/attendance.vue?vue&type=template&id=19f5f4d6&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("caption", [
        _vm._v("\n        " + _vm._s(_vm.monthNames[_vm.month]) + "\n    ")
      ]),
      _vm._v(" "),
      _vm.days
        ? _c("table", [
            _c(
              "tr",
              _vm._l(_vm.no_of_days.getDate(), function(day) {
                return _c("th", [_vm._v(_vm._s(day))])
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "tr",
              _vm._l(_vm.days, function(no) {
                return _c("td", {
                  staticClass: "dot",
                  style: { "background-color": no ? "green" : "red" }
                })
              }),
              0
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-table",
        {
          staticStyle: { width: "100%" },
          attrs: {
            data: _vm.user.attendances,
            stripe: "",
            "summary-method": _vm.getSummaries,
            "show-summary": ""
          }
        },
        [
          _c("el-table-column", {
            attrs: { prop: "started_at", label: "Started At" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "stopped_at", label: "Stopped At" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "Timing", label: "As Hour" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(scope.row.timing * 0.0002777778) +
                        "\n            "
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/edit/attendance.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/user/edit/attendance.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attendance_vue_vue_type_template_id_19f5f4d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance.vue?vue&type=template&id=19f5f4d6&scoped=true& */ "./resources/js/components/user/edit/attendance.vue?vue&type=template&id=19f5f4d6&scoped=true&");
/* harmony import */ var _attendance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance.vue?vue&type=script&lang=js& */ "./resources/js/components/user/edit/attendance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _attendance_vue_vue_type_style_index_0_id_19f5f4d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attendance.vue?vue&type=style&index=0&id=19f5f4d6&scoped=true&lang=css& */ "./resources/js/components/user/edit/attendance.vue?vue&type=style&index=0&id=19f5f4d6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _attendance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attendance_vue_vue_type_template_id_19f5f4d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attendance_vue_vue_type_template_id_19f5f4d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "19f5f4d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/edit/attendance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/edit/attendance.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/user/edit/attendance.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./attendance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/edit/attendance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/edit/attendance.vue?vue&type=style&index=0&id=19f5f4d6&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/user/edit/attendance.vue?vue&type=style&index=0&id=19f5f4d6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_style_index_0_id_19f5f4d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./attendance.vue?vue&type=style&index=0&id=19f5f4d6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/edit/attendance.vue?vue&type=style&index=0&id=19f5f4d6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_style_index_0_id_19f5f4d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_style_index_0_id_19f5f4d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_style_index_0_id_19f5f4d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_style_index_0_id_19f5f4d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_style_index_0_id_19f5f4d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/edit/attendance.vue?vue&type=template&id=19f5f4d6&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/user/edit/attendance.vue?vue&type=template&id=19f5f4d6&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_template_id_19f5f4d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./attendance.vue?vue&type=template&id=19f5f4d6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/edit/attendance.vue?vue&type=template&id=19f5f4d6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_template_id_19f5f4d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_template_id_19f5f4d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);